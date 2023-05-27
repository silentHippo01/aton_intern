import { createAsyncThunk } from "@reduxjs/toolkit";


export interface ILogin {
    username: string;
    email: string;
    password: string;
}

export const login = createAsyncThunk<any, ILogin>(
    'login',
    async (authData) => {
        try {
            const response = await fetch('http://localhost:8000/login', {
                method: 'POST',
                headers: {'Content-Type' : 'application/json'},
                body: JSON.stringify(authData),
            })
            .then(res => res.json())
            .then(data => console.log(data));

            console.log(response);
            return response;
        } catch (e){
            console.log(e);
        }
    }
)