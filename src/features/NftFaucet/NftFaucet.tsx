import React from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { nftFaucetAddress } from './nftFaucetAPI';
import { mintAsync, selectMints, selectPendingTx } from './nftFaucetSlice';

export function NftFaucet() {
  const pendingTx = useAppSelector(selectPendingTx);
  const mints = useAppSelector(selectMints);
  const dispatch = useAppDispatch();

  return (
    <div>
      <h2>NFT Faucet</h2>
      <div>Rinkeby NFT Faucet Contract: {nftFaucetAddress}</div>
      {
        pendingTx ?
          "Pending Transaction..." :

          <button onClick={() => {
            dispatch(mintAsync());
          }}>Mint</button>
      }
      {mints?.length > 0 ?
        <>
          <h3>Recent mints:</h3>
          <ul>
            {mints?.map(mint =>
              <li>
                <img src={mint.tokenUri} alt={`${mint.tokenId}`} />
                Token ID: {mint.tokenId}
              </li>)}
          </ul>
        </> : null}
      <p>Check your Rinkeby NFTs in <a target="_blank" rel="noreferrer" href="https://testnets.opensea.io/account">Rinkeby OpenSea</a></p>
    </div>
  );
}
