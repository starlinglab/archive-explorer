// chain IDs to chain names
const chainIds = {
    "1": "ethereum",
    "137": "polygon",
    "250": "fantom",
    "100": "xdai",
    "56": "bsc",
    "42161" : "arbitrum",
    "43114": "avalanche",
    "42" :"kovan",
    "80001": "mumbai",
    "5": "goerli",
    "3": "ropsten",
    "25": "cronos",
    "10": "optimism",
    "42220" :"celo",
    "1313161554": "aurora",
    "955305": "eluvio",
    "44787": "alfajores",
    "50" :"xdc",
    "9001": "evmos",
    "9000" : "evmosTestnet"
     };
// fetch url params
if (window.location.search.length > 0) {
    const urlParams = (new URL(document.location)).searchParams;
    if (urlParams.has("contract")) {
        const contractAddress = urlParams.get("contract");
        document.getElementById('contractAddress').value = contractAddress;
    }
    if (urlParams.has("chainid")) {
        const chainID = urlParams.get("chainid");
        document.getElementById('chainID').value = chainIds[chainID];
        console.log("chainID obj", chainIds[chainID]);
        console.log("chainID", chainID);
    }
    if (urlParams.has("id")) {
        const tokenType = urlParams.get("id");
        document.getElementById('tokenId').value = tokenType;
    }
};