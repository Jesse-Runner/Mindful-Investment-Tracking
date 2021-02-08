/*
 * File: store.ts
 * Project: receiving-rules
 * -----
 * Last Modified: 30 Sep 2020 4:54:42 pm
 * -----
 * Copyright (c) 2020 Elegant Software Solutions All rights reserved.
 */

import { AnyAction, ThunkDispatch, configureStore } from '@reduxjs/toolkit';
import rootReducer, { RootState } from './rootReducer';

const store = configureStore({
  reducer: rootReducer
});

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./rootReducer', () => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const newRootReducer = require('./rootReducer').default;

    store.replaceReducer(newRootReducer);
  });
}

export type AppDispatch = typeof store.dispatch;
export type ThunkAppDispatch = ThunkDispatch<RootState, void, AnyAction>;

export default store;
