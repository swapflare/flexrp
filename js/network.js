const RippleAPI = require('ripple-lib').RippleAPI;
const offline_api = new RippleAPI();

// Create new online API handle from settings
var _online_api;
async function online_api(settings){
  if(_online_api) return _online_api;

  _online_api = new RippleAPI({
    server : settings.testnet ? 'wss://s.altnet.rippletest.net:51233' :
                                'wss://s1.ripple.com'
  })

  await _online_api.connect();
  return _online_api;
}

// Sign transaction using input values and settings
async function sign_tx(api, settings){
  var xrp_secret = document.getElementById("xrp_secret");
  var xrp_address = document.getElementById("xrp_address");
  var eth_address = document.getElementById("eth_address")

  const instructions = settings.offline ? {
    fee : settings.fee,
    sequence : settings.sequence,
    maxLedgerVersion : settings.maxLedgerVersion
  } : {};

  // Specified xrp address or convert secret to public address
  const xrp_addr = settings.specify_account ?
    xrp_address.value :
    offline_api.deriveAddress(offline_api.deriveKeypair(xrp_secret.value).publicKey);

  // Eth address to message key
  const message_key = ('02' + (new Array(25).join("0")) + eth_address.value.substr(2)).toUpperCase()

  // Create AccountSet transaction, setting the message key, and sign
  const prepared = await api.prepareSettings(xrp_addr, {messageKey: message_key}, instructions)
  return api.sign(prepared.txJSON, xrp_secret.value)
}

// Process transaction:
// - offline mode: sign and render signed tx
// - online mode: sign and submit
async function process_tx(settings){
  var loader = document.getElementById("loader");

  if(settings.offline){
    var signed;
    var error = null
    try{
      signed = await sign_tx(offline_api, settings)
    }catch(err){
      error = err
    }

    if(error){
      ipcRenderer.send("sign_failed", error);

    }else{
      ipcRenderer.send("set_signed_tx", signed.signedTransaction);
      ipcRenderer.send("show_signed_tx");
    }

  }else{
    const api = await online_api(settings)

    var error = null
    try{
      const signed = await sign_tx(api, settings)
      await api.submit(signed.signedTransaction);
    }catch(err){
      error = err
    }

    if(error)
      ipcRenderer.send("submit_failed", error)
    else
      ipcRenderer.send("submit_success")
  }

  loader.style.display = 'none';
}