import { StateSchema } from "../../../../../app/StoreProvider";


export const getUsers = (state: StateSchema) => state.users.usersData.data;