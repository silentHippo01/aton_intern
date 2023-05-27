import { createSlice } from "@reduxjs/toolkit";
import { CatalogSchema } from "./types/CatalogSchema";

const initialState: CatalogSchema  = {
    catalog: [{
        title: '12',
        category: '1',
        cost: '12'
    }],
}

export const CatalogSlice = createSlice({
    name: 'catalog',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            state.catalog.push(action.payload);
        },
        deleteProduct: (state, action) => {
            // state.catalog = state.catalog.filter(item => state[action.payload] !== item)
        }
    },
    
})

export const { actions: catalogAction } = CatalogSlice;
export const { reducer: catalogReducer } = CatalogSlice;
