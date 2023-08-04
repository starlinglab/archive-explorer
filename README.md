# Archive Explorer

This tool is used to view [Starling Integrity](https://github.com/starlinglab/integrity-backend) encrypted archives that are gated by the [Starling Access Token](https://github.com/starlinglab/starling-access-token) contract using the [Lit Protocol](https://litprotocol.com/). The archives are stored with AES-256 encryption on [IPFS](https://ipfs.tech).

## Basic Usage
To use this tool, you need a [MetaMask](https://metamask.io/) wallet installed in your browser and an active wallet that holds the tokens for the assets you wish to decrypt.

You can browse the tokens you hold by connecting your wallet on OpenSea:
- Mainnets (e.g. Ethereum, Polygon) - https://opensea.io
- Testnets (e.g. Rinkeby, Mumbai) - https://testnets.opensea.io

Starling Access Tokens have a self-referencing link to this app embedded inside them. The link can be accessed by using the `View Website` button in the menu of the token on OpenSea.

When in the app, to load the asset click `Connect` at the top right corner. You will be required to connect to your MetaMask wallet and sign an attestation for use with Lit Protocol.

## Getting an Access Token

To have a demo `Starling Access Token` sent to your MetaMask address (on the Mumbai network, the Polygon testnet), enter your wallet address in the faucet at [faucet.starlinglab.org](https://faucet.starlinglab.org/). This token will be visible in OpenSea's testnet interface and will let you decrypt an asset using the Archive Explorer.

## Animated Walkthrough

![](/assets/walkthrough.gif)
