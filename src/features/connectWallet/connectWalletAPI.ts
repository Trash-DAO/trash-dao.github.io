import Web3 from "web3";

declare global {
  interface Window { ethereum: any; }
}

export const hasWallet = () => {
  return !!window.ethereum;
}

export const isWalletConnected = () => {
  return Promise.resolve(window.ethereum.isConnected());
}

export const connectWallet = async () => {
  await window.ethereum?.send('eth_requestAccounts');
  const web3 = new Web3(window.ethereum);
  const network = await web3.eth.net.getNetworkType();
  const accounts = await web3.eth.getAccounts();
  return {
    address: accounts[0],
    network
  }
}

export const addWalletListener = (callback: any) => {
  window.ethereum.on("accountsChanged", (accounts: any) => {
    if (accounts.length > 0) {
      callback(accounts[0]);
    } else {
      callback();
    }
  });
}