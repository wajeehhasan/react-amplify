// types
import { createSlice } from '@reduxjs/toolkit';

// initial state
const initialState = {
  userAuthenticationStatus: false,
  username: '',
  jwtAuthcognitoToken: ''
};

// ==============================|| SLICE - user ||============================== //

const userauth = createSlice({
  name: 'userauth',
  initialState,
  reducers: {
    userLogIn: (state, action) => {
      state.userAuthenticationStatus = action.payload;
    },

    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setToken: (state, action) => {
      state.jwtAuthcognitoToken = action.payload;
    }
  }
});
export default userauth.reducer;

export const { userLogIn, setUsername, setToken } = userauth.actions;
