import { createSlice } from '@reduxjs/toolkit';

const formSlice = createSlice({
  name: 'form',
  initialState: {
    areYouEmployed: 'No',
    companyName: '',
    formErrors: {}
  },
  reducers: {
    updateField: (state, action) => {
      state[action.payload.fieldName] = action.payload.fieldValue;
    },
  },
});

export const { updateField } = formSlice.actions;
export default formSlice.reducer;