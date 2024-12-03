import { createSlice } from "@reduxjs/toolkit"; // Corrected the import
import { loginuser } from "./LoginThunk"; // Assuming the correct thunk action is loginUser

const initialState = {
  user: null,
  loading: false,
  error: null,
};

export const loginSlice = createSlice({ // Corrected the function name
  name: "login",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginuser.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    builder.addCase(loginuser.fulfilled, (state, action) => {
      state.loading = false;  
      state.user = action.payload;
    })
    .addCase(loginuser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    })
     
  },
});

export const { logout } = loginSlice.actions;

export default loginSlice.reducer;


 // .addCase(loginuser.pending, (state) => { // Corrected the action name
      //   state.loading = true;
      //   state.error = null;
      // })
      // .addCase(loginuser.fulfilled, (state, action) => { // Corrected the action name
      //   state.loading = false;
      //   state.user = action.payload;
      // })
      // .addCase(loginuser.rejected, (state, action) => { // Corrected the action name
      //   state.loading = false;
      //   state.error = action.error.message;
      // });
