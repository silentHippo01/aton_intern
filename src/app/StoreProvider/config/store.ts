import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { StateSchema } from "./StateSchema";
import { UserTableReducer } from "../../../entities/UserTable/model/slice/UsersSlice";
import { loginReducer } from "../../../features/LoginForm/model/slice/loginSlice";
import { catalogReducer } from "../../../entities/Product/model/productSlice";


export function createReduxStore(initialState?: StateSchema){
    const rootReducers: ReducersMapObject<StateSchema> = {
        users: UserTableReducer,
        login: loginReducer,
        catalog: catalogReducer,
    }

    return configureStore<StateSchema>({
        reducer: rootReducers,
        devTools: true,
        preloadedState: initialState,
    })
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];