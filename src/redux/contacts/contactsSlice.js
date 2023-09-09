import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './contactsOperations';

const contactsState = {
  items: [],
  isLoading: false,
  error: null,
};
const handleFulfilled = (state, { payload }) => {
  state.items = payload;
};

const handleAddContactFulfilled = (state, { payload }) => {
  state.items.push(payload);
};

const handleDeleteContactFulfilled = (state, { payload }) => {
  state.items = state.items.filter(contact => contact.id !== payload.id);
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsState,
  // reducers: {
  //   addContact: {
  //     reducer(state, { payload }) {
  //       state.items = [...state.items, payload];
  //     },
  //     prepare(name, number) {
  //       return {
  //         payload: {
  //           name,
  //           number,
  //         },
  //       };
  //     },
  //   },
  //   deleteContact(state, { payload }) {
  //     const index = state.findIndex(item => item.id === payload);
  //     state.splice(index, 1);
  //   },
  // },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, handleFulfilled)
      .addCase(addContact.fulfilled, handleAddContactFulfilled)
      .addCase(deleteContact.fulfilled, handleDeleteContactFulfilled);
  },
});

// export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
