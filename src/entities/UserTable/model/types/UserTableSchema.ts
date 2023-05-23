export interface UserSchema {
    id?: number;
    email?: string;
    first_name?: string;
    last_name?: string;
    avatar?: string;
}

export interface UsersData {
    page?: number;
    per_page?: number;
    total?: number;
    total_pages?: number;
    data?: UserSchema[];
}
export interface UserTableSchema {
    isLoading: boolean;
    error?: string;
    usersData?: UsersData;
}

