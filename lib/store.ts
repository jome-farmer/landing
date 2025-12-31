import { configureStore } from '@reduxjs/toolkit';
import { exampleSlice } from './features/exampleSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      example: exampleSlice.reducer,
      // Add your other reducers here
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
