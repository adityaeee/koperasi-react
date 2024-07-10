import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axiosInstance";

const initialState = {
    employees: [],
    employee: null,
    status: null,
    error: null,
};

export const fetchEmployees = createAsyncThunk(
    "employee/fetchEmployees",
    async (_, { rejectedWithValue }) => {
        try {
            const response = await axiosInstance.get("/employee");
            return response.data;
        } catch (error) {
            return rejectedWithValue(error.response.data);
        }
    }
);

const employeeSlice = createSlice({
    name: "employee",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchEmployees.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchEmployees.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.employees = action.payload.data;
            })
            .addCase(fetchEmployees.rejected, (state, action) => {
                state.status = "failed";
                state.employees = action.payload;
            });
    },
});

export default employeeSlice.reducer;
