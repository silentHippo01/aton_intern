import { CatalogSchema } from "../../../entities/Product/model/types/CatalogSchema";
import { UserTableSchema } from "../../../entities/UserTable/model/types/UserTableSchema";
import { LoginSchema } from "../../../features/LoginForm";

export interface StateSchema{
    users: UserTableSchema;
    login: LoginSchema;
    catalog: CatalogSchema;
}