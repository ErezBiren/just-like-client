import { createSlice } from "@reduxjs/toolkit";
import { stat } from "fs";

interface AuthState {
  isAdmin: boolean,
  selectUser: number,
  token: string,
  isLoggedIn: Boolean
}

export const initialState: AuthState = {
  isAdmin: false,
  selectUser: 0,
  token: localStorage.getItem("token") || "",
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    toggleAdmin: (state: AuthState) => {
      state.isAdmin = !state.isAdmin;
    },
    login: (state, action) => {

      state.token = action.payload;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.token = "";
      state.isLoggedIn = false;
    }
  },
});

export const authActions = authSlice.actions;

export const isAdmin = (state: AuthState) => isAdmin;

export default authSlice.reducer;
