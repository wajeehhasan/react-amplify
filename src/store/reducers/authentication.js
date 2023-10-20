// types
import { createSlice } from '@reduxjs/toolkit';

// initial state
const initialState = {
  userAuthenticationStatus: false
};

// ==============================|| SLICE - user ||============================== //

const userauth = createSlice({
  name: 'userauth',
  initialState,
  reducers: {
    userLogIn: (state, action) => {
      state.userAuthenticationStatus = action.payload;
    },
    userLogOut: (state, action) => {
      state.userAuthenticationStatus = action.payload;
    }
  }
});
export default userauth.reducer;

export const { userLogIn, userLogOut } = userauth.actions;
