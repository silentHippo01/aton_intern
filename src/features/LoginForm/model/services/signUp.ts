import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";


export interface ISignUp {
    username: string;
    email: string;
    password: string;
}

export const signUp = createAsyncThunk<any, ISignUp>(
    'signUp',
    async (authData, thunkApi) => {
        try {
            const response = await fetch('http://localhost:8000/signup', {
                method: 'POST',
                headers: {'Content-Type' : 'application/json'},
                body: JSON.stringify(authData),
            })
            .then(res => res.json())

            return response;
        } catch (e){
            console.log(e);
            return thunkApi.rejectWithValue('error');
        }
    }
)