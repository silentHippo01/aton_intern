import { StateSchema } from "../../../../../app/StoreProvider";


export const getTotalPage = (state:StateSchema) => state.users.usersData.total_pages;