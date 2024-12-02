import {configureStore} from "@reduxjs/toolkit"
import loginReducer from "../Features/LoginSlice"

const store = configureStore({
    reducer: {
      login: loginReducer
    }
  });
  
  export default store;