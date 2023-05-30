import { login } from './model/services/login';
import { getIsAuth } from './model/selectors/getIsAuth/getIsAuth';
import { getIsLoading } from './model/selectors/getIsLoading/getIsLoading';
import { signUp } from './model/services/signUp';
import { loginSlice } from './model/slice/loginSlice';
import { LoginSchema } from './model/types/LoginSсhema';
import { LoginForm } from "./ui/LoginForm";


export {
    LoginForm,
    LoginSchema,
    loginSlice,
    signUp,
    login,
    getIsLoading,
    getIsAuth,
}