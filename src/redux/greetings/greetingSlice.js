import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchMessages = createAsyncThunk('greetings/fetch', async () => {
  const greetings = await fetch('http://localhost:3000/api/v1/greetings/random');
  const data = await greetings.json();
  return data;
});

const greetingSlice = createSlice({
  name: 'greetings',
  initialState: {
    greetings: '',
    isLoading: false,
    error: null,
  },

  extraReducers: {
    [fetchMessages.pending]: (state) => ({
      ...state,
      isLoading: true,
      error: false,
    }),
    [fetchMessages.fulfilled]: (state, action) => ({
      ...state,
      isLoading: false,
      greetings: action.payload,
    }),
    [fetchMessages.rejected]: (state) => ({
      ...state,
      isLoading: false,
      error: true,
    }),
  },
});

export default greetingSlice.reducer;
