import React from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  selectAddress,
  selectConnected,
  selectLoading,
  selectNetwork,
  connectWalletAsync
} from './connectWalletSlice';

export function ConnectWallet() {
  const loading = useAppSelector(selectLoading);
  const connected = useAppSelector(selectConnected);
  const address = useAppSelector(selectAddress);
  const network = useAppSelector(selectNetwork);
  const dispatch = useAppDispatch();

  return (
    <div>
      {loading ?
        "Loading..." :
        connected ?
          <><span>{network}</span> <span>{address}</span></>
          :
          <button onClick={() => dispatch(connectWalletAsync())}>Connect Wallet</button>
      }
    </div>
  );
}