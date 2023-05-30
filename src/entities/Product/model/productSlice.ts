import { createSlice } from "@reduxjs/toolkit";
import { CatalogSchema } from "./types/CatalogSchema";

const initialState: CatalogSchema  = {
    catalog: [
        
    ],
}

export const CatalogSlice = createSlice({
    name: 'catalog',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            state.catalog.push(action.payload);
        },
        editProduct: (state, action) => {
            state.catalog = state.catalog.map(item => {
                if(item.id === action.payload.id){
                    return {...item, ...action.payload};
                } else{
                    return item;
                }
            })
        },
        deleteProduct: (state, action) => {
            state.catalog = state.catalog.filter(product => product.id != action.payload);
        }
    },
    
})

export const { actions: catalogAction } = CatalogSlice;
export const { reducer: catalogReducer } = CatalogSlice;
