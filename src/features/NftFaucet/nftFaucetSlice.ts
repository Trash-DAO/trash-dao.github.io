import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { listenForMints, mint } from './nftFaucetAPI';

export interface NftMint {
  tokenUri: string;
  tokenId: number;
}

export interface NftFaucetState {
  mints: NftMint[];
  pendingTx: boolean;
}

const initialState: NftFaucetState = {
  mints: [],
  pendingTx: false,
};

let alreadyListening = false;

export const mintAsync = createAsyncThunk(
  'nftFaucet/mint',
  async (arg, thunkAPI) => {
    if (!alreadyListening) {
      listenForMints(mint => {
        thunkAPI.dispatch(mintSuccess(mint));
      });
      alreadyListening = true;
    }
    const tx = await mint();
    const receipt = await tx.wait();
    return receipt.transactionHash;
  }
);

export const nftFaucetSlice = createSlice({
  name: 'nftFaucet',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    mintSuccess: (state, action: PayloadAction<NftMint>) => {
      state.mints.push(action.payload);
      state.pendingTx = false;
    },
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
      .addCase(mintAsync.pending, (state) => {
        state.pendingTx = true;
      })
      .addCase(mintAsync.fulfilled, (state, action) => {
        state.pendingTx = false;
      })
  },
});

export const { mintSuccess } = nftFaucetSlice.actions;

export const selectPendingTx = (state: RootState) => state.nftFaucet?.pendingTx;
export const selectMints = (state: RootState) => state.nftFaucet?.mints;


export default nftFaucetSlice.reducer;