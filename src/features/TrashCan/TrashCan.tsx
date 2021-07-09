import React, { useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { nftFaucetAddress } from '../NftFaucet/nftFaucetAPI';
import { trashCanAddress } from './trashCanAPI';
import { safeTransferFromAsync, selectPendingTx } from './trashCanSlice';

export function TrashCan() {
  const pendingTx = useAppSelector(selectPendingTx);
  const dispatch = useAppDispatch();
  const [contractAddress, setContractAddress] = useState(nftFaucetAddress);
  const handleInputContractAddress = (event: any) => {
    setContractAddress(event.target.value);
  };
  const [tokenId, setTokenId] = useState("");
  const handleInputTokenId = (event: any) => {
    setTokenId(event.target.value);
  };

  return (
    <div>
      <h2>Trash Can</h2>
      <div>Rinkeby Trash Can Contract: {trashCanAddress}</div>
      {
        pendingTx ?
          "Pending Transaction..." :
          <>
            Contract address<input onChange={handleInputContractAddress} /><br />
            Token ID <input onChange={handleInputTokenId} /><br />
            <button onClick={() => {
              dispatch(safeTransferFromAsync({ contractAddress, tokenId }));
            }}>Dump</button>
          </>
      }
    </div>
  );
}
