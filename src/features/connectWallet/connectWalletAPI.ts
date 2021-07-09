import { ethers } from "ethers";

declare global {
  interface Window { ethereum: any; }
}

export const provider = new ethers.providers.Web3Provider(window.ethereum);
export const signer = provider?.getSigner();

export const hasWallet = () => {
  return Promise.resolve(window.ethereum);
}

export const isWalletConnected = () => {
  return Promise.resolve(window.ethereum.isConnected());
}

export const connectWallet = async () => {
  await window.ethereum.enable();
  return {
    address: await signer.getAddress(),
    network: getNetwork()
  }
}

export const getNetwork = () => {
  if (window.ethereum.networkVersion === "4") {
    return "Rinkeby";
  } else {
    return "";
  }
}
