// store
// reducer
// action/dispatching action
// subscription

import { configureStore } from "@reduxjs/toolkit";

// counterReducer adalah alias untuk counterSlice.reducer
import counterReducer from "./features/counterSlice";
import authReducer from "./features/authSlice";

export const store = configureStore({
    reducer: {
        // ini cuman naming pada umumnya, misal auth : authReducer
        counter: counterReducer,
        auth: authReducer,
    },
});
