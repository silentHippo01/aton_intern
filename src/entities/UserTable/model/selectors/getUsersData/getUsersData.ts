import { StateSchema } from "../../../../../app/StoreProvider";


export const getUsersData = (state: StateSchema) => state.users.usersData;