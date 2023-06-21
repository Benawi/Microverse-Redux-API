import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

const url='https://randomuser.me/api/?results=20';
const initialState ={
    users: [],
    isLoading: false,
    eror:''
};

export const fetchUsers =createAsyncThunk( 'user/fetchUsers', async()=>{
    try{
        return await fetch(url)
        .then((response)=>response.json())
    }catch(e){
        return e;
    }
});