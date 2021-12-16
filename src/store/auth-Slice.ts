import { User } from "./models";
import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  isAdmin: boolean;
  selectUser: number;
  isLoggedIn: Boolean;
  user: User | null;
  signupUser: User | null;
}

export const initialState: AuthState = {
  isAdmin: false,
  selectUser: 0,
  isLoggedIn: false,
  user: null,
  signupUser: null,
};

// todo: change this to false

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    toggleAdmin: (state) => {
      state.isAdmin = !state.isAdmin;
    },
    // signup: (state,action) => {
    //   return auth.createUserWithEmailAndPassword(action.payload.email, action.payload.password)
    // },
    login: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      // state.isLoggedIn = false;
    },
    setSignupUser: (state, action) => {
      state.signupUser = action.payload;
    },
  },
});

export const authActions = authSlice.actions;

export const isAdmin = (state: AuthState) => isAdmin;

export default authSlice.reducer;
