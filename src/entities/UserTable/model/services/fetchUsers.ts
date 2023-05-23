import { createAsyncThunk } from "@reduxjs/toolkit";
import { UsersData } from "../types/UserTableSchema";


export const fetchUsers = createAsyncThunk<UsersData>(
    'users/fetchUsers',
    async () => {
        try{
            const response = await fetch('https://reqres.in/api/users');
            const data = response.json();

            // if(!data){
            //     throw new Error();
            // }

            return data;
        } catch(err) {
            console.log(err);
            return err;
        }
    }
)