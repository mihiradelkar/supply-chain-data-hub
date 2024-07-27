import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCompanies } from "../services/api";

export const fetchCompaniesThunk = createAsyncThunk(
  "companies/fetchCompanies",
  async ({ page, limit }) => {
    console.log("Fetching companies with page:", page, "and limit:", limit);
    let skip = (page - 1) * limit;
    console.log("Skip:", skip);
    const response = await fetchCompanies(skip, limit);
    return {
      data: response.companies,
      page,
      limit,
      total: response.total,
    };
  }
);

const companySlice = createSlice({
  name: "companies",
  initialState: {
    companies: [],
    search: "",
    status: "idle",
    error: null,
    currentPage: 1,
    itemsPerPage: 9, // Default value
    total: 10,
  },
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setItemsPerPage: (state, action) => {
      state.itemsPerPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCompaniesThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCompaniesThunk.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.companies = action.payload.data;
        state.currentPage = action.payload.page;
        state.itemsPerPage = action.payload.limit;
        state.totalItems = action.payload.total;
      })
      .addCase(fetchCompaniesThunk.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setSearch, setPage, setItemsPerPage } = companySlice.actions;
export default companySlice.reducer;
