import { createAsyncThunk } from "@reduxjs/toolkit";
import { UsersData } from "../types/UserTableSchema";


export const fetchUsers = createAsyncThunk<UsersData, number>(
    'users/fetchUsers',
    async (page, thunkAPI) => {
        try{
            const data = await fetch(`https://reqres.in/api/users?page=${page}&per_page=3`).then(res => res.json());
            // const data = response.json();

            // if(!data){
            //     throw new Error();
            // }
            console.log(data);
            
            return data;
        } catch(err) {
            console.log(err);
            return err;
        }
    }
)