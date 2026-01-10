import { createSlice } from "@reduxjs/toolkit";
const loadState = () => {
  try {
    const serializedState = localStorage.getItem("auth");
    if (serializedState === null) {
      return { user: null, isAuthenticated: false, users: [] };
    }
    const state = JSON.parse(serializedState);
    if (!state.users) state.users = [];
    return state;
  } catch (err) {
    return { user: null, isAuthenticated: false, users: [] };
  }
};
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("auth", serializedState);
  } catch (err) {
  }
};
const initialState = loadState();
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      saveState(state);
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      saveState(state);
    },
    registerUser: (state, action) => {
      const exists = state.users.some((u) => u.email === action.payload.email);
      if (!exists) {
        state.users.push(action.payload);
        saveState(state);
      }
    },
    updateProfile: (state, action) => {
      if (state.user) {
        const updatedUser = { ...state.user, ...action.payload };
        state.user = updatedUser;
        const index = state.users.findIndex((u) => u.id === state.user.id);
        if (index !== -1) {
          state.users[index] = { ...state.users[index], ...action.payload };
        }
        saveState(state);
      }
    }
  }
});
const { login, logout, registerUser, updateProfile } = authSlice.actions;
var authSlice_default = authSlice.reducer;
export {
  authSlice_default as default,
  login,
  logout,
  registerUser,
  updateProfile
};
