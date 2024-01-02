import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAllProduct, fetchProductByFilter } from "./productAPI";

const initialState = {
  products: [],
  status: "idle"
};

export const fetchAllProductsAsync = createAsyncThunk(
  "product/fetchAllProduct",
  async () => {
    const response = await fetchAllProduct();
    return response.data;
  }
);
export const fetchProductByFilterAsync = createAsyncThunk(
  "product/fetchProductByFilter",
  async (filter, sort) => {
    const response = await fetchProductByFilter(filter, sort);
    return response.data;
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProductsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllProductsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.products = action.payload;
      })
      .addCase(fetchProductByFilterAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProductByFilterAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.products = action.payload;
      })
  },
});

export const { increment } = productSlice.actions;

export const selectAllProducts = (state) => state.product.products;

export default productSlice.reducer;
