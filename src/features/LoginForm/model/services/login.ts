import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";


export interface ILogin {
    username: string;
    email: string;
    password: string;
}

export const login = createAsyncThunk<any, ILogin>(
    'login',
    async (authData, thunkApi) => {
        try {
            const response = await fetch('http://localhost:8000/login', {
                method: 'POST',
                headers: {'Content-Type' : 'application/json'},
                body: JSON.stringify(authData),
            })
            .then(res => res.json())
            
            if(response.message === 'User not found'){
                throw new Error();
            }

            return response;
        } catch (e){
            console.log(e);
            return thunkApi.rejectWithValue('error');
        }
    }
)