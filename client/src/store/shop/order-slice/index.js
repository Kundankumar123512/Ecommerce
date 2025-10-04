import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// ✅ Base API URL from .env
const API_URL = import.meta.env.VITE_API_URL;

const initialState = {
  approvalURL: null,
  isLoading: false,
  orderId: null,
  orderList: [],
  orderDetails: null,
};

// 🟢 Create New Order
export const createNewOrder = createAsyncThunk(
  "/order/createNewOrder",
  async (orderData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}/shop/order/create`, orderData, {
        withCredentials: true,
      });
      return response.data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data || { success: false, message: "Failed to create order" }
      );
    }
  }
);

// 🟢 Capture Payment
export const capturePayment = createAsyncThunk(
  "/order/capturePayment",
  async ({ paymentId, payerId, orderId }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${API_URL}/shop/order/capture`,
        { paymentId, payerId, orderId },
        { withCredentials: true }
      );
      return response.data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data || { success: false, message: "Failed to capture payment" }
      );
    }
  }
);

// 🟢 Get All Orders by User ID
export const getAllOrdersByUserId = createAsyncThunk(
  "/order/getAllOrdersByUserId",
  async (userId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}/shop/order/list/${userId}`, {
        withCredentials: true,
      });
      return response.data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data || { success: false, message: "Failed to fetch orders" }
      );
    }
  }
);

// 🟢 Get Order Details
export const getOrderDetails = createAsyncThunk(
  "/order/getOrderDetails",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}/shop/order/details/${id}`, {
        withCredentials: true,
      });
      return response.data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data || { success: false, message: "Failed to fetch order details" }
      );
    }
  }
);

const shoppingOrderSlice = createSlice({
  name: "shoppingOrderSlice",
  initialState,
  reducers: {
    resetOrderDetails: (state) => {
      state.orderDetails = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // 🔹 Create New Order
      .addCase(createNewOrder.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createNewOrder.fulfilled, (state, action) => {
        state.isLoading = false;
        state.approvalURL = action.payload.approvalURL;
        state.orderId = action.payload.orderId;
        sessionStorage.setItem("currentOrderId", JSON.stringify(action.payload.orderId));
      })
      .addCase(createNewOrder.rejected, (state) => {
        state.isLoading = false;
        state.approvalURL = null;
        state.orderId = null;
      })

      // 🔹 Get All Orders by User
      .addCase(getAllOrdersByUserId.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllOrdersByUserId.fulfilled, (state, action) => {
        state.isLoading = false;
        state.orderList = action.payload?.data || [];
      })
      .addCase(getAllOrdersByUserId.rejected, (state) => {
        state.isLoading = false;
        state.orderList = [];
      })

      // 🔹 Get Order Details
      .addCase(getOrderDetails.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getOrderDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.orderDetails = action.payload?.data || null;
      })
      .addCase(getOrderDetails.rejected, (state) => {
        state.isLoading = false;
        state.orderDetails = null;
      })

      // 🔹 Capture Payment
      .addCase(capturePayment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(capturePayment.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(capturePayment.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { resetOrderDetails } = shoppingOrderSlice.actions;

export default shoppingOrderSlice.reducer;
