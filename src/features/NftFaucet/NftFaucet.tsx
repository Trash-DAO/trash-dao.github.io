import React from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { nftFaucetAddress } from './nftFaucetAPI';
import { mintAsync, selectMints, selectPendingTx } from './nftFaucetSlice';
import styles from './NftFaucet.module.css';

export function NftFaucet() {
  const pendingTx = useAppSelector(selectPendingTx);
  const mints = useAppSelector(selectMints);
  const dispatch = useAppDispatch();

  return (
    <div>
      <h2>NFT Faucet</h2>
      <div>Rinkeby NFT Faucet Contract: {nftFaucetAddress} <a target="_blank" rel="noreferrer" href={`https://rinkeby.etherscan.io/address/${nftFaucetAddress}`}>Etherescan</a></div>
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
          <div className={styles.mintUl}>
            {mints?.map(mint =>
              <div className={styles.mintLi} key={mint.tokenId}>
                <img className={styles.mintImg} src={mint.tokenUri} alt={`${mint.tokenId}`} />
                Token ID: {mint.tokenId}
              </div>)}
          </div>
        </> : null}
      <p>Check your Rinkeby NFTs in <a target="_blank" rel="noreferrer" href="https://testnets.opensea.io/account">Rinkeby OpenSea</a></p>
    </div>
  );
}
