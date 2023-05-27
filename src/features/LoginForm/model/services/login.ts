import { createAsyncThunk } from "@reduxjs/toolkit";
import { UserData } from "../types/UserData";


export interface ILoginToken {
    token: string;
}

export const login = createAsyncThunk<ILoginToken, UserData>(
    'login',
    async (thunkAPI, userData) => {
        try {
            // const response = await fetch('https://reqres.in/api/login', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify(userData),
            //   });

            //   return response;
            return null;
        } catch (e){
            console.log(e);
        }
    }
)