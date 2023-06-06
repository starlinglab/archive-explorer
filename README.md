# Archive Explorer

This tool is used to view [Starling Integrity](https://github.com/starlinglab/integrity-backend) encrypted archives that are gated by the [Starling Access Token](https://github.com/starlinglab/starling-access-token) contract using the [LIT Protocol](https://litprotocol.com/). The archives are stored AES256 encrypted on [IPFS](https://ipfs.tech).

Access the Archive Explorer
* [From Opensea](https://testnets.opensea.io/0x1C016C9A15e9Ef085bD0225bc5fa834b114a13e1)
* [Starling Lab Demo](https://ipfs.io/ipns/archiveexplorer.starlinglab.org/?chainid=80001&contract=0x5E10c1a82b422b6FB39d5b3FE1704BcE752453f2&id=1) direct Link

## Basic Usage
To use this tool, you need a [MetaMask](https://metamask.io/) wallet installed in your browser and an active wallet that holds the tokens for the assets you wish to decrypt.

You can browse the tokens you hold by connecting your wallet on OpenSea:
- Mainnet - https://opensea.io
- Testnet - https://testnets.opensea.io

Starling Access Tokens have a self-referencing link to this app embedded inside them. The link can be accessed by using the `View Website` button in the menu of the token on Open Sea.

When in the app, to load the asset click `Connect` at the top right corner. You will be required to connect to your MetaMask wallet and sign an attestation for use with LIT. 

## Get an access token

To have a demo `Starling Access Token` sent to your MetaMask address, enter your wallet address in the faucet at https://faucet.starlinglab.org/. This token will be visible in OpenSea's testnet interface and will let you decrypt an asset using the archive explorer.

## Animated Walkthrough

![](/assets/walkthrough.gif)
