import { ethers } from "ethers";
import { provider, signer } from "../connectWallet/connectWalletAPI";

declare global {
  interface Window { ethereum: any; }
}

export const trashCanAddress = "0x561b57fead41483cbc8b60e813b74b25a7d3e54d";

const nftAbi = [
  "function safeTransferFrom(address _from, address _to, uint256 _tokenId)",
  "event Transfer(address indexed from, address indexed to, uint tokenId)"
];

export const listenForTransfers = async (contractAddress: string, callback: () => void) => {
  const nftContract = new ethers.Contract(contractAddress, nftAbi, provider);
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
  nftContract.on("Transfer", (from, to, tokenId, event) => {
    console.log(`${from} sent ${tokenId} to ${to}`);
    callback();
});
  console.log("done listening")
};

export const safeTransferFrom = async (contractAddress: string, tokenId: number) => {
  const nftContract = new ethers.Contract(contractAddress, nftAbi, provider);
  const nftWithSigner = nftContract.connect(signer);
  const myAddress = await signer.getAddress();
  return await nftWithSigner.safeTransferFrom(myAddress, trashCanAddress, tokenId);
}

