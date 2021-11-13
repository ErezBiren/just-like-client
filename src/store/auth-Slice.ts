import { createSlice } from "@reduxjs/toolkit";

interface IAuthState {
  isAdmin: boolean,
  selectUser: number,
  token: string,
  isLoggedIn: Boolean
}

export const initialState: IAuthState = {
  isAdmin: false,
  selectUser: 0,
  token: localStorage.getItem("token") || "",
  isLoggedIn: true
};

// todo: change this to false

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    toggleAdmin: (state: IAuthState) => {
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

export const isAdmin = (state: IAuthState) => isAdmin;

export default authSlice.reducer;
