import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppStateModel } from '../../models/AppStateModel';

const initialState: AppStateModel = {
  showLoader: false
};

// export const asyncFetchApplication = createAsyncThunk<ApplicationModel | null, string, ThunkApiModel>('app/asyncFetchApplication', async (token, thunkApi) => {
//   const { getState, rejectWithValue } = thunkApi;
//   const { app } = getState();
//   const response = await ApplicationService.getApplication(token);

//   if (response.error !== null) {
//     const error: ErrorModel = {
//       ...response.error,
//       ...{ status: response.status ?? 500, userInfo: { userId: app.user?.sub ?? 'user id undefined' }, actionType: 'app/asyncFetchApplication' }
//     };

//     return rejectWithValue(error as ErrorModel);
//   }

//   return response.data;
// });

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    showLoader(state, action: PayloadAction<boolean>): void {
      state.showLoader = action.payload;
    }
  }
  // extraReducers: (builder) => {
  //   // FETCH APPLICATION
  //   builder.addCase(asyncFetchApplication.fulfilled, (state, action) => {
  //     state.application = action.payload;
  //     state.applicationLoading = false;
  //   });
  //   builder.addCase(asyncFetchApplication.pending, (state) => {
  //     state.applicationLoading = true;
  //   });
  //   builder.addCase(asyncFetchApplication.rejected, (state, action) => {
  //     state.error = action.payload as ErrorModel;
  //     state.applicationLoading = false;
  //     logError(action.payload as ErrorModel);
  //   });
  // }
});

export const { showLoader } = appSlice.actions;

export const appReducer = appSlice.reducer;
