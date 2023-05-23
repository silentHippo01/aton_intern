import { createSlice } from "@reduxjs/toolkit";
import { UserTableSchema } from "../types/UserTableSchema";
import { fetchUsers } from "../services/fetchUsers";

const initialState: UserTableSchema = {
    isLoading: false,
    error: undefined,
    usersData: {
        page: 0,
        per_page: 0,
        total: 0,
        total_pages: 0,
        data: undefined,
    }
}

export const UsersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.usersData = action.payload;
                state.isLoading = false;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.isLoading = false;
                // state.error = action.payload;
            })
    }
    
})

export const { actions: UserTableAction } = UsersSlice;
export const { reducer: UserTableReducer } = UsersSlice;
