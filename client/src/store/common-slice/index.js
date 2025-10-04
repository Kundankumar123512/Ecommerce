import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// ✅ Base API URL from .env
const API_URL = import.meta.env.VITE_API_URL;

const initialState = {
  isLoading: false,
  featureImageList: [],
};

// 📌 Get Feature Images
export const getFeatureImages = createAsyncThunk(
  "/order/getFeatureImages",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}/common/feature/get`, {
        withCredentials: true,
      });
      return response.data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data || { success: false, message: "Failed to fetch feature images" }
      );
    }
  }
);

// 📌 Add Feature Image
export const addFeatureImage = createAsyncThunk(
  "/order/addFeatureImage",
  async (image, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${API_URL}/common/feature/add`,
        { image },
        { withCredentials: true }
      );
      return response.data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data || { success: false, message: "Failed to add feature image" }
      );
    }
  }
);

const commonSlice = createSlice({
  name: "commonSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // 🔹 Get Feature Images
      .addCase(getFeatureImages.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getFeatureImages.fulfilled, (state, action) => {
        state.isLoading = false;
        state.featureImageList = action.payload?.data || [];
      })
      .addCase(getFeatureImages.rejected, (state) => {
        state.isLoading = false;
        state.featureImageList = [];
      })

      // 🔹 Add Feature Image
      .addCase(addFeatureImage.fulfilled, (state, action) => {
        if (action.payload.success) {
          state.featureImageList.push(action.payload.data);
        }
      })
      .addCase(addFeatureImage.rejected, (state, action) => {
        console.error(action.payload?.message || "Failed to add feature image");
      });
  },
});

export default commonSlice.reducer;
