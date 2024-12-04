import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contact/contactsSlice";
import filtersReducer from "./contact/filtersSlice";
import authReducer from "../redux/auth/authSlice"; 

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,
    auth: authReducer,
  },
});

