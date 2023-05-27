import { StateSchema } from './../../../../../app/StoreProvider/config/StateSchema';

export const getIsAuth = (state: StateSchema) => state.login.isAuth;