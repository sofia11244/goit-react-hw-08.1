import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from './contactsOps.js';

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    searchValue: "", 
    error: null, // Hata durumu
  },
  reducers: {
    updateSearchValue(state, action) {
      state.searchValue = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload; // API'den gelen veriyi state'e ekliyoruz
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload); // Yeni eklenen kişiyi state'e ekliyoruz
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (contact) => contact.id !== action.payload.id // Silinen kişiyi state'den çıkarıyoruz
        );
      });
  },
});

export const { updateSearchValue } = contactsSlice.actions;
export default contactsSlice.reducer;
