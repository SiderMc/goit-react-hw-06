import { createSlice } from '@reduxjs/toolkit';
import dataContacts from '../data/contactsData.json';

const initialState = {
  items: dataContacts,
  modal: false,
};

const slice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.items.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(
        contact => contact.id !== action.payload
      );
    },
    openModal: (state, action) => {
      state.modal = action.payload;
    },
  },
});

export const selectContacts = state => state.contacts.items;
export const selectModal = state => state.contacts.modal;
export const { addContact, deleteContact, openModal } = slice.actions;
export const contactsReducer = slice.reducer;
