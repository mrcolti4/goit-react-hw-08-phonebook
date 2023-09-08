const { combineReducers } = require('@reduxjs/toolkit');
const { contactsReducer } = require('./contacts/contactsSlice');
const { filterReducer } = require('./filterSlice');

export const reducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
