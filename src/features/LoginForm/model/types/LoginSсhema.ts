

export interface LoginSchema {
    username: string;
    email: string;
    password: string;
    isAuth: boolean;
    isLoading: boolean;
    error?: string;
}