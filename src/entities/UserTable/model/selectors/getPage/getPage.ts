import { StateSchema } from "../../../../../app/StoreProvider";


export const getPage = (state:StateSchema) => state.users.usersData.page;