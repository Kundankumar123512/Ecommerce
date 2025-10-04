import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// ✅ Base API URL from .env
const API_URL = import.meta.env.VITE_API_URL;

const initialState = {
  isLoading: false,
  addressList: [],
};

// 🟢 Add New Address
export const addNewAddress = createAsyncThunk(
  "/addresses/addNewAddress",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}/shop/address/add`, formData, {
        withCredentials: true,
      });
      return response.data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data || { success: false, message: "Failed to add address" }
      );
    }
  }
);

// 🟢 Fetch All Addresses
export const fetchAllAddresses = createAsyncThunk(
  "/addresses/fetchAllAddresses",
  async (userId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}/shop/address/get/${userId}`, {
        withCredentials: true,
      });
      return response.data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data || { success: false, message: "Failed to fetch addresses" }
      );
    }
  }
);

// 🟢 Edit Address
export const editAddress = createAsyncThunk(
  "/addresses/editAddress",
  async ({ userId, addressId, formData }, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `${API_URL}/shop/address/update/${userId}/${addressId}`,
        formData,
        { withCredentials: true }
      );
      return response.data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data || { success: false, message: "Failed to edit address" }
      );
    }
  }
);

// 🟢 Delete Address
export const deleteAddress = createAsyncThunk(
  "/addresses/deleteAddress",
  async ({ userId, addressId }, { rejectWithValue }) => {
    try {
      const response = await axios.delete(
        `${API_URL}/shop/address/delete/${userId}/${addressId}`,
        { withCredentials: true }
      );
      return response.data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data || { success: false, message: "Failed to delete address" }
      );
    }
  }
);

const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // 🔹 Add New Address
      .addCase(addNewAddress.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addNewAddress.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(addNewAddress.rejected, (state) => {
        state.isLoading = false;
      })

      // 🔹 Fetch All Addresses
      .addCase(fetchAllAddresses.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllAddresses.fulfilled, (state, action) => {
        state.isLoading = false;
        state.addressList = action.payload?.data || [];
      })
      .addCase(fetchAllAddresses.rejected, (state) => {
        state.isLoading = false;
        state.addressList = [];
      });
  },
});

export default addressSlice.reducer;
