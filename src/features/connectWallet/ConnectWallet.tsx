import React from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  selectAddress,
  selectConnected,
  selectLoading,
  selectNetwork,
  connectWalletAsync,
  selectHasWallet,
  hasWalletAsync
} from './connectWalletSlice';

export function ConnectWallet() {
  const loading = useAppSelector(selectLoading);
  const connected = useAppSelector(selectConnected);
  const address = useAppSelector(selectAddress);
  const network = useAppSelector(selectNetwork);
  const hasWallet = useAppSelector(selectHasWallet);
  const dispatch = useAppDispatch();

  return (
    <div>
      {
        !hasWallet ? <div>Please install a wallet like <a target="_blank" rel="noreferrer" href="https://metamask.io">MetaMask</a> and try again.</div> :
          loading ? "Loading..." :
            connected ?
              <><span>{network}</span> <span>{address}</span> <a target="_blank" rel="noreferrer" href={`https://rinkeby.etherscan.io/address/${address}`}>Etherescan</a></> :
              <button onClick={() => dispatch(connectWalletAsync())}>Connect Wallet</button>
      }
    </div>
  );
}
