import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// ✅ Import base API URL from .env
const API_URL = import.meta.env.VITE_API_URL;

const initialState = {
  isLoading: false,
  productList: [],
};

// 🟢 Add New Product
export const addNewProduct = createAsyncThunk(
  "/products/addnewproduct",
  async (formData, { rejectWithValue }) => {
    try {
      const result = await axios.post(`${API_URL}/admin/products/add`, formData, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      return result.data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data || { success: false, message: "Failed to add product" }
      );
    }
  }
);

// 🟢 Fetch All Products
export const fetchAllProducts = createAsyncThunk(
  "/products/fetchAllProducts",
  async (_, { rejectWithValue }) => {
    try {
      const result = await axios.get(`${API_URL}/admin/products/get`, {
        withCredentials: true,
      });
      return result.data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data || { success: false, message: "Failed to fetch products" }
      );
    }
  }
);

// 🟢 Edit Product
export const editProduct = createAsyncThunk(
  "/products/editProduct",
  async ({ id, formData }, { rejectWithValue }) => {
    try {
      const result = await axios.put(`${API_URL}/admin/products/edit/${id}`, formData, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      return result.data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data || { success: false, message: "Failed to edit product" }
      );
    }
  }
);

// 🟢 Delete Product
export const deleteProduct = createAsyncThunk(
  "/products/deleteProduct",
  async (id, { rejectWithValue }) => {
    try {
      const result = await axios.delete(`${API_URL}/admin/products/delete/${id}`, {
        withCredentials: true,
      });
      return result.data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data || { success: false, message: "Failed to delete product" }
      );
    }
  }
);

const AdminProductsSlice = createSlice({
  name: "adminProducts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // 🔹 Fetch All Products
      .addCase(fetchAllProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.productList = action.payload?.data || [];
      })
      .addCase(fetchAllProducts.rejected, (state) => {
        state.isLoading = false;
        state.productList = [];
      })

      // 🔹 Add, Edit, Delete Success (refresh list or update UI)
      .addCase(addNewProduct.fulfilled, (state, action) => {
        if (action.payload.success) {
          state.productList.push(action.payload.data);
        }
      })
      .addCase(editProduct.fulfilled, (state, action) => {
        if (action.payload.success) {
          const updated = action.payload.data;
          const index = state.productList.findIndex((p) => p._id === updated._id);
          if (index !== -1) state.productList[index] = updated;
        }
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        if (action.payload.success) {
          state.productList = state.productList.filter(
            (p) => p._id !== action.payload.deletedId
          );
        }
      });
  },
});

export default AdminProductsSlice.reducer;
