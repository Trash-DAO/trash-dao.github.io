import { NftMint } from "./nftFaucetSlice";
import Web3 from "web3";
import nftFaucetAbi from "./NFtFaucetAbi.json";
import { AbiItem } from "web3-utils";

declare global {
  interface Window { ethereum: any; }
}

export const nftFaucetAddress = "0x5a3b5aD2397A92a6Ff417489A24B16edEc7bC418";

let nftFaucetContract: any;
const getNftFaucetContract = async () => {
  const web3 = new Web3(window.ethereum);
  if (!nftFaucetContract) {
    nftFaucetContract = await new web3.eth.Contract(nftFaucetAbi as AbiItem[], nftFaucetAddress);
  }
  return nftFaucetContract;
}

export const listenForMints = async (callback: (mint: NftMint) => void) => {
  const nftFaucetContract = await getNftFaucetContract();
  nftFaucetContract.events.Transfer({ filter: { to: window.ethereum.selectedAddress } }, async function (error: any, event: any) {
    console.log("Transfer", event);
    if (error) {
      console.error("listenForMints", error);
      // callback(error);
    }
    const tokenId = event.returnValues[2];
    const tokenUri = await nftFaucetContract.methods.tokenURI(tokenId).call();
    callback({
      tokenId,
      tokenUri
    });
  });
};

export const mint = async () => {
  const nftFaucetContract = await getNftFaucetContract();

  const transactionParameters = {
    to: nftFaucetAddress, // Required except during contract publications.
    from: window.ethereum.selectedAddress, // must match user's active address.
    data: nftFaucetContract.methods.mint().encodeABI()//make call to NFT smart contract 
  };

  const tx = await window.ethereum
    .request({
      method: 'eth_sendTransaction',
      params: [transactionParameters],
    });

  return new Promise((resolve, reject) => {

    nftFaucetContract.once("Transfer", { filter: { to: window.ethereum.selectedAddress } }, function (error: any, event: any) {
      console.log("Transfer", event);
      if (error) {
        reject(error);
      }
      resolve(event.returnValues[2]);
    });
  });
}

