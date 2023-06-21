import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

const url='https://randomuser.me/api/?results=20';
const initialState ={
    users: [],
    isLoading: false,
    error:''
};

export const fetchUsers =createAsyncThunk( 'user/fetchUsers', async()=>{
    try{
        return await fetch(url)
        .then((response)=>response.json())
    }catch(e){
        return e;
    }
});

const userSlice=createSlice({
    name: 'user',
    initialState,
    extraReducers: (builder)=>{
        builder.addCase(fetchUsers.pending,(state)=>{
            state.isLoading = true;
        })  
builder.addCase(fetchUsers.fulfilled,(state, action)=>{
    state.isLoading=false;
    state.users =action.payload.results;
    state.error='';
})
builder.addCase(fetchUsers.rejected,(state,action)=>{
    state.isLoading=false;
    state.error=action.error.message;
});
        
    }
})