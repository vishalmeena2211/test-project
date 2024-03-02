// // authSlice.js
// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   isLoggedIn: !!localStorage.getItem('isLoggedIn') || false, // Check if a token is present in local storage
//   user: localStorage.getItem('user') || null, // Store the token in the state
// };

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     login: (state, action) => {
//       state.isLoggedIn = true;
//       state.user = action.payload;
//     },
//     logout: (state) => {
//       state.isLoggedIn = false;
//       state.user = null;
//     },
//   },
// });

// export const { login, logout } = authSlice.actions;
// export default authSlice.reducer;
