import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// ✅ Base API URL from .env
const API_URL = import.meta.env.VITE_API_URL;

const initialState = {
  isLoading: false,
  searchResults: [],
};

// 🔹 Get Search Results
export const getSearchResults = createAsyncThunk(
  "/order/getSearchResults",
  async (keyword, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}/shop/search/${keyword}`, {
        withCredentials: true,
      });

      return response.data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data || { success: false, message: "Failed to fetch search results" }
      );
    }
  }
);

const searchSlice = createSlice({
  name: "searchSlice",
  initialState,
  reducers: {
    resetSearchResults: (state) => {
      state.searchResults = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSearchResults.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSearchResults.fulfilled, (state, action) => {
        state.isLoading = false;
        state.searchResults = action.payload?.data || [];
      })
      .addCase(getSearchResults.rejected, (state) => {
        state.isLoading = false;
        state.searchResults = [];
      });
  },
});

export const { resetSearchResults } = searchSlice.actions;

export default searchSlice.reducer;
