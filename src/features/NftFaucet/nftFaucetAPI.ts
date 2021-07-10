import { ethers } from "ethers";
import { provider, signer } from "../connectWallet/connectWalletAPI";
import { NftMint } from "./nftFaucetSlice";

declare global {
  interface Window { ethereum: any; }
}

export const nftFaucetAddress = "0x5a3b5aD2397A92a6Ff417489A24B16edEc7bC418";

let nftFaucetContract: ethers.Contract;
const getNftFaucetContract = () => {
  if (!nftFaucetContract) {
    nftFaucetContract = new ethers.Contract(nftFaucetAddress, nftFaucetAbi, provider);
  }
  return nftFaucetContract;
}

const nftFaucetAbi = [
  "function mint() returns (uint)",
  "function tokenUri(uint tokenId) view returns (string)",
  "event Transfer(address indexed from, address indexed to, uint tokenId)"
];

export const fetchTokenUri = (tokenId: number) => {
  const nftFaucetContract = getNftFaucetContract();
  return nftFaucetContract.tokenUri(tokenId);
}

export const listenForMints = async (callback: (mint: NftMint) => void) => {
  const nftFaucetContract = getNftFaucetContract();
  // const myAddress = await signer.getAddress();
  // console.log("myAddress", myAddress)
  // const filter = nftFaucetContract.filters.Transfer(null, myAddress)
  // console.log("filter", filter)
  // nftFaucetContract.on(filter, async (from, to, tokenId, event) => {
  //   console.log("calling", myAddress)
  //   const tokenUri = await fetchTokenUri(tokenId);
  //   console.log("tokenUri", tokenUri)
  //   callback({
  //     tokenId,
  //     tokenUri,
  //   } as NftMint);
  // });
  nftFaucetContract.on("Transfer", (from, to, tokenId, event) => {
    console.log(`${from} sent ${tokenId} to ${to}`);
    callback({
      tokenId,
      tokenUri: "",
    } as NftMint);
});
  console.log("done listening")
};

export const mint = async () => {
  const nftFaucetContract = getNftFaucetContract();
  const nftFaucetWithSigner = nftFaucetContract.connect(signer);
  return await nftFaucetWithSigner.mint();
  // const tx = await nftFaucetWithSigner.mint();
  // return tx.wait().then((receipt: any) => receipt.transactionHash);
}

