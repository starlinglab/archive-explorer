# Archive Explorer

This tool is used to view [Starling Integrity](https://github.com/starlinglab/integrity-backend) encrypted archives that are gated by the [Starling Access Token](https://github.com/starlinglab/starling-access-token) contract using the [LIT Protocol](https://litprotocol.com/). The archives are stored AES256 encrypted on [IPFS](https://ipfs.tech).

## Basic Usage
To use this tool, you need a [MetaMask](https://metamask.io/) wallet installed in your browser and an active wallet that holds the tokens for the assets you wish to decrypt.

You can browse the tokens you hold by connecting your wallet on OpenSea:
- Mainnet - https://opensea.io
- Testnet - https://testnets.opensea.io

Starling Access Tokens have a self-referencing link to this app embedded inside them. The link can be accessed by using the `View Website` button in the menu of the token on Open Sea.

When in the app, to load the asset click `Connect` at the top right corner. You will be required to connect to your MetaMask wallet and sign an attestation for use with LIT. 

## Animated Walkthrough

![](https://github.com/starlinglab/archive-explorer/blob/feature-readm/assets/walkthrough.gif)
