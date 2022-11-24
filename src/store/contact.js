import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contactList: [],
};

const contactReduser = createSlice({
  name: "newcontacts",
  initialState,
  reducers: {
    newcontact(state, action) {
      state.contactList.push(action.payload);
    },
    deletecontact(state, action) {
      state.contactList = state.contactList.filter(
        (eachContact) => eachContact.id !== action.payload
      );
    },
  },
});

export const newcontacts = contactReduser.actions;

export default contactReduser.reducer;
