/*
 * File: rootReducer.ts
 * Project: receiving-rules
 * -----
 * Last Modified: 30 Sep 2020 4:55:14 pm
 * -----
 * Copyright (c) 2020 Elegant Software Solutions All rights reserved.
 */

import { combineReducers } from '@reduxjs/toolkit';
import { appReducer } from './app/app-slice';

const reducers = {
  app: appReducer
};

const rootReducer = combineReducers(reducers);

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
