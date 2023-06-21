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

    return(
        <>
        <h1 >List of System Users</h1>
        {isLoading && <div>Loading ...</div>}
        {!isLoading && error ?<div>Error...{error}</div>:null}
        {!isLoading && users.length?(
            <ul>
                {
                users.map((user)=>(<UserNames key={user.id.value} user={user}/>)
                )}
            </ul>
        ): null}
        </>
    )
}
