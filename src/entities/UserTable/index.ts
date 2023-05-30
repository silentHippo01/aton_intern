import { getTotalPage } from './model/selectors/getTotalPages/getTotalPages';
import { getPage } from './model/selectors/getPage/getPage';
import { getUsersError } from './model/selectors/getUsersError/getUsersError';
import { getUsersIsLoading } from './model/selectors/getUsersIsLoading/getUsersIsLoading';
import { getUsers } from './model/selectors/getUsers/getUsers';
import { UserTable } from './ui/UserTable';
import { getUsersData } from './model/selectors/getUsersData/getUsersData';


export {
    UserTable,
    getUsers,
    getUsersData,
    getUsersIsLoading,
    getUsersError,
    getPage,
    getTotalPage,
}