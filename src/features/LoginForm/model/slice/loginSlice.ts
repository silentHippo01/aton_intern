import { createSlice } from "@reduxjs/toolkit";
import { LoginSchema } from "../types/LoginSсhema";
import { login } from "../services/login";
import { signUp } from "../services/signUp";


const initialState: LoginSchema = {
    username: '',
    email: '',
    password: '',
    isAuth: false,
    isLoading: false,
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setIsAuth: (state) => {
            state.isAuth = !state.isAuth;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(login.fulfilled, (state) => {
            state.isLoading = false;
            state.isAuth = true;
        })
        builder.addCase(login.rejected, (state, action ) => {
            state.isLoading = false;
        })

        builder.addCase(signUp.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(signUp.fulfilled, (state) => {
            state.isLoading = false;
        })
        builder.addCase(signUp.rejected, (state, action ) => {
            state.isLoading = false;
        })
    }
})

export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;