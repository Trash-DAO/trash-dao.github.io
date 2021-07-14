// import { ethers } from "ethers";
// import { provider, signer } from "../connectWallet/connectWalletAPI";
import Web3 from "web3";
import trashCanAbi from "./trashCanAbi.json";
import erc721Abi from "./erc721Abi.json";
import { AbiItem } from "web3-utils";

declare global {
  interface Window { ethereum: any; }
}

export interface NftDump {
  contractAddress: string,
  tokenId: number;
}

export const trashCanAddress = "0x370Eff7d2Ac0ACf3E7713Ec8beC8079e825EB0d4";

let trashCanContract: any;
const getTrashCanContract = async () => {
  const web3 = new Web3(window.ethereum);
  if (!trashCanContract) {
    trashCanContract = await new web3.eth.Contract(trashCanAbi as AbiItem[], trashCanAddress);
  }
  return trashCanContract;
}

const getErc721AbiContract = async (contractAddress: string) => {
  const web3 = new Web3(window.ethereum);
  return await new web3.eth.Contract(erc721Abi as AbiItem[], contractAddress);
}


export const listenForTransfers = async (contractAddress: string, callback: (dump: NftDump) => void) => {
  const nftContract = await getErc721AbiContract(contractAddress);
  nftContract.events.Transfer({ filter: { from: window.ethereum.selectedAddress, to: trashCanAddress } }, async function (error: any, event: any) {
    console.log("Transfer", event);
    if (error) {
      console.error("listenForTransfers", error);
      // callback(error);
    }
    const tokenId = event.returnValues[2];
    callback({
      contractAddress,
      tokenId,
    });
  });
};

export const safeTransferFrom = async (contractAddress: string, tokenId: number) => {
  const nftContract = await getErc721AbiContract(contractAddress);
  return await nftContract.methods.safeTransferFrom(window.ethereum.selectedAddress, trashCanAddress, tokenId).send({ from: window.ethereum.selectedAddress }, (error: any, tx: string) => {
    if (error) {
      console.error("safeTransferFrom", error);
    }
    console.log("safeTransferFrom", tx)
  });
}

