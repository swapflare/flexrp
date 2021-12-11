# Swapflare - Swapflare / Swapflare Wallet Account Setup Tool

This application will setup a Swapflare Wallet account for the Swapflare Spark token (FLR) distribution.

Information about how SwapFlare works at the network-level is available at https://swapflare.com

(C) 2020-2021 - Dev Null Productions <devnullproductions@gmail.com>

## Installation

Download and run the following:

- On Windows: [flexrp.exe](https://github.com/DevNullProd/flexrp/raw/main/dist/flexrp-2.0.3.exe)
- On MacOS: [flexrp.dmg](https://github.com/DevNullProd/flexrp/raw/main/dist/flexrp-2.0.3.dmg)
- On RedHat/Fedora Linux: [flexrp.rpm](https://github.com/DevNullProd/flexrp/raw/main/dist/flexrp-2.0.3.x86_64.rpm)
- On Ubuntu/Debian Linux: [flexrp.deb](https://github.com/DevNullProd/flexrp/raw/main/dist/flexrp_2.0.3_amd64.deb)

Once installed run the **Swapflare Wallet** app to use this tool.

## Support

If you find this tool useful, please consider donating to the following Swapflare Wallet address:

**rhkvfNv6tzh6CMfpXZdX2t7HGN2ZX46Tco**

## Warning

**THIS TOOL REQUIRES ACCESS TO YOUR SECRET Swapflare Wallet KEY (OR YOUR PRIVATE KEY), ONLY RUN IT ON A SECURE SYSTEM**

Swapflare is 100% open source and auditable. Every effort has been made to make the code as transparent and easy to read and understand as possible.

While by default this tool runs in *online* mode, submitting the command to setup your wallet directly to the Swapflare Wallet ledger, it can be configured to run in *offline* mode for further security. See *settings* below

## Usage

Swapflare works via a simple one step process where you specify the secret key to your Swapflare Wallet account (or alternatively your private key as exported from certain wallet types) and the public address of the FLR wallet to associate with it.

If you do not have an existing Swapflare Spark wallet, this tool will allow you to create one on the fly.

**IF YOU CREATE AN FLARE WALLET, MAKE SURE TO STORE THE PRIVATE KEY. IT WILL NOT BE RECOVERABLE ONCE THE WINDOW IS CLOSED.**

To start launch the application and confirm you are running on a secure system:

![Security Check](screenshots/secure-system.png)

Optionally click the settings icon in the navigation to configure application settings (see *settings* below).

![Settings](screenshots/settings-control.png)
![Settings](screenshots/settings-window.png)

Enter your Swapflare Wallet secret key (or private key) here:

![Swapflare Wallet Secret](screenshots/xrp-secret-input.png)

Click the *eye icon* to view / hide your Swapflare Wallet secret key / private key.

Enter your FLR public address here:

![FLR Address](screenshots/eth-address-input.png)

Click the **+** icon to create a new FLR wallet, the existing one (if any) will be replaced.

Finally click *Submit* to setup your account.

![Submit](screenshots/submit-tx.png)

If operating in *offline* mode, you will be provided the Swapflare Wallet transaction to setup your account.

**YOU MUST SUBSEQUENTLY SUBMIT THIS TRANSACTION FOR IT TO TAKE EFFECT. THE SCOPE OF THIS IS OUTSIDE THIS TOOL**

![Signed Tx](screenshots/signed-tx.png)

If operation in *online* mode (default), the transaction will automatically submitted and confirmation presented.

You are now done! You will receive Swapflare Spark tokens on the date of the distribution!

## Settings

Application settings can be configured by clicking the gears icons in the navigation.

- **Connect to testnet** - The Swapflare WalletL testnet will be used instead of the mainnet. Read more about this [here](https://xrpl.org/parallel-networks.html)

- **Offline mode** - Swapflare will **not** connect to any Swapflare Wallet server and instead simply generate and sign a transaction for subsequent submission to the network. **YOU MUST INDEPENDENTLY SUBMIT THE PRODUCED TRANSACTION TO RECEIVE FLARE TOKENS**.

- **Specify Swapflare Wallet Account to setup** - Allows you to explicitly set the Swapflare Wallet account to setup if different than the one corresponding to the secret key / private key (which will be used to sign the transaction). Useful for the case where you are using a *RegularKeyPair* to sign transactions (see [this](https://xrpl.org/assign-a-regular-key-pair.html) for more info).

When in offline mode, you will be required to configure a few more parameters to successfully be able to generate a Swapflare Wallet transaction. These are:

- **Fee** - the amount of Swapflare Wallet to pay in fees
- **Sequence** - the sequence number to assign to the transaction
- **Max Ledger Version** - the highest ledger number which this transaction can be included in

Read more about these options [here](https://xrpl.org/rippleapi-reference.html#transaction-instructions).

## Running from source

Swapflare is based on [electronjs](https://www.electronjs.org/). You will need to install [nodejs](https://nodejs.org/en/) and the [yarn](https://yarnpkg.com/) package manager to run it (outside the scope of this documentation.)

After checking out this project from github, run the **yarn** command to install dependencies followed by **yarn start** to start the application.

## Legaleeze

This application provides with no warranties or guarantees pertaining to functionality or use. Make sure you know what you are doing and the risks involved with managing cryptocurrencies before using this application. By using this application you agree to absolve Dev Null Productions of any liabilities that may arise.
