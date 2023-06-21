import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../redux/users/usersSlice";
import { useEffect } from "react";
import UserNames from "./UserList";

const displayUsers=()=>{
    const {users, isLoading,error}=useSelector((state)=>state.users);
    const dispatch=useDispatch(users);
    useEffect(()=>{
        dispatch(fetchUsers());
    },[]);
}