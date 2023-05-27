import { StateSchema } from "../../../../../app/StoreProvider";


export const getIsLoading = (state: StateSchema) => state.login.isLoading;