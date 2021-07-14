import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import connectWalletReducer, { hasWalletAsync } from '../features/connectWallet/connectWalletSlice';
import nftFaucetReducer from '../features/NftFaucet/nftFaucetSlice';
import trashCanReducer from '../features/TrashCan/trashCanSlice';

export const store = configureStore({
  reducer: {
    connectWallet: connectWalletReducer,
    nftFaucet: nftFaucetReducer,
    trashCan: trashCanReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

store.dispatch(hasWalletAsync());

