import React from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import { ConnectWallet } from './features/connectWallet/ConnectWallet';
import './App.css';
// import { useAppDispatch, useAppSelector } from './app/hooks';
import { NftFaucet } from './features/NftFaucet/NftFaucet';
import { useAppSelector } from './app/hooks';
import { selectConnected } from './features/connectWallet/connectWalletSlice';
import { TrashCan } from './features/TrashCan/TrashCan';

function App() {
  // const dispatch = useAppDispatch();
  const connected = useAppSelector(selectConnected);

  return (
    <div className="App">
      TrashDAO
      <ConnectWallet></ConnectWallet>
      {connected ? <NftFaucet></NftFaucet> : null}
      {connected ? <TrashCan></TrashCan> : null}
    </div>
  );
}

export default App;
