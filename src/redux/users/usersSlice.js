import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

const initialState ={
    users: [],
    isLoading: false,
    eror:''
};