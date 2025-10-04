import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// ✅ Base API URL from .env
const API_URL = import.meta.env.VITE_API_URL;

const initialState = {
  isLoading: false,
  reviews: {
    success: false,
    data: [],
  },
  error: null,
};

// 📌 Add Review
export const addReview = createAsyncThunk(
  "/order/addReview",
  async (formdata, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${API_URL}/shop/review/add`,
        formdata,
        { withCredentials: true } // optional if backend uses cookies
      );
      return response.data; // { success: true, message: "...", data: {...} }
    } catch (err) {
      return rejectWithValue(
        err.response?.data || { success: false, message: "Server error" }
      );
    }
  }
);

// 📌 Get Reviews
export const getReviews = createAsyncThunk(
  "/order/getReviews",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}/shop/review/${id}`);
      return response.data; // { success: true, data: [...] }
    } catch (err) {
      return rejectWithValue(
        err.response?.data || { success: false, message: "Server error" }
      );
    }
  }
);

const reviewSlice = createSlice({
  name: "reviewSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // 🔹 Get Reviews
      .addCase(getReviews.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getReviews.fulfilled, (state, action) => {
        state.isLoading = false;
        state.reviews = action.payload; // { success: true, data: [...] }
      })
      .addCase(getReviews.rejected, (state, action) => {
        state.isLoading = false;
        state.reviews = { success: false, data: [] };
        state.error = action.payload?.message || "Failed to fetch reviews";
      })

      // 🔹 Add Review
      .addCase(addReview.fulfilled, (state, action) => {
        if (action.payload.success) {
          state.reviews.data.push(action.payload.data);
        }
      })
      .addCase(addReview.rejected, (state, action) => {
        state.error = action.payload?.message || "Failed to add review";
      });
  },
});

export default reviewSlice.reducer;
