import type { PayloadAction } from "@reduxjs/toolkit";
import type { AuthState, User } from "@/types/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: AuthState = {
  isAuthenticated: true,
  user: null,
  token: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      state.isAuthenticated = true;
    },
    removeToken: (state) => {
      state.token = null;
      state.isAuthenticated = false;
    },
  },
});

export const { setUser, setToken, removeToken } = userSlice.actions;
export default userSlice.reducer;
