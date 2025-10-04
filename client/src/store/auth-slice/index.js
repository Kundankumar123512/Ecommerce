import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// ✅ Load API base URL from .env
const BASE_URL = import.meta.env.VITE_API_URL;

const initialState = {
  isAuthenticated: false,
  isLoading: true,
  user: null,
};

// 📌 Register User
export const registerUser = createAsyncThunk(
  "/auth/register",
  async (formData) => {
<<<<<<< HEAD:client/src/store/auth-slice/index.js
    const response = await axios.post(
      "https://ecommerce-zz2v.vercel.app/api/auth/register",
      formData,
      {
        withCredentials: true,
      }
    );

=======
    const response = await axios.post(`${BASE_URL}/auth/register`, formData, {
      withCredentials: true,
    });
>>>>>>> 68e06bf (Initial commit):E-commerce/client/src/store/auth-slice/index.js
    return response.data;
  }
);

// 📌 Login User
export const loginUser = createAsyncThunk(
  "/auth/login",
  async (formData) => {
<<<<<<< HEAD:client/src/store/auth-slice/index.js
    const response = await axios.post(
      "https://ecommerce-zz2v.vercel.app/api/auth/login",
      formData,
      {
        withCredentials: true,
      }
    );

=======
    const response = await axios.post(`${BASE_URL}/auth/login`, formData, {
      withCredentials: true,
    });
>>>>>>> 68e06bf (Initial commit):E-commerce/client/src/store/auth-slice/index.js
    return response.data;
  }
);

// 📌 Logout User
export const logoutUser = createAsyncThunk("/auth/logout", async () => {
  const response = await axios.post(
    `${BASE_URL}/auth/logout`,
    {},
    {
      withCredentials: true,
    }
  );
  return response.data;
});

<<<<<<< HEAD:client/src/store/auth-slice/index.js
  async () => {
    const response = await axios.post(
      "https://ecommerce-zz2v.vercel.app/api/auth/logout",
      {},
      {
        withCredentials: true,
      }
    );

    return response.data;
  }
);

export const checkAuth = createAsyncThunk(
  "/auth/checkauth",

  async () => {
    const response = await axios.get(
      "https://ecommerce-zz2v.vercel.app/api/auth/check-auth",
      {
        withCredentials: true,
        headers: {
          "Cache-Control":
            "no-store, no-cache, must-revalidate, proxy-revalidate",
        },
      }
    );

    return response.data;
  }
);
=======
// 📌 Check Authentication
export const checkAuth = createAsyncThunk("/auth/checkauth", async () => {
  const response = await axios.get(`${BASE_URL}/auth/check-auth`, {
    withCredentials: true,
    headers: {
      "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
    },
  });
  return response.data;
});
>>>>>>> 68e06bf (Initial commit):E-commerce/client/src/store/auth-slice/index.js

// 📦 Slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // 🔹 Register
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.isLoading = false;
        state.user = null;
        state.isAuthenticated = false;
      })
      .addCase(registerUser.rejected, (state) => {
        state.isLoading = false;
        state.user = null;
        state.isAuthenticated = false;
      })

      // 🔹 Login
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        console.log("Login Response:", action.payload);
        state.isLoading = false;
        state.user = action.payload.success ? action.payload.user : null;
        state.isAuthenticated = action.payload.success;
      })
      .addCase(loginUser.rejected, (state) => {
        state.isLoading = false;
        state.user = null;
        state.isAuthenticated = false;
      })

      // 🔹 Check Auth
      .addCase(checkAuth.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(checkAuth.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.success ? action.payload.user : null;
        state.isAuthenticated = action.payload.success;
      })
      .addCase(checkAuth.rejected, (state) => {
        state.isLoading = false;
        state.user = null;
        state.isAuthenticated = false;
      })

      // 🔹 Logout
      .addCase(logoutUser.fulfilled, (state) => {
        state.isLoading = false;
        state.user = null;
        state.isAuthenticated = false;
      });
  },
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
