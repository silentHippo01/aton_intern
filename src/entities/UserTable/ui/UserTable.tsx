import { useEffect } from "react";
import { useAppDispatch } from "../../../shared/lib/hooks/useAppDispatch/useAppDispatch";
import { fetchUsers } from "../model/services/fetchUsers";
import { useSelector } from "react-redux";
import { getUsers } from "../model/selectors/getUsers/getUsers";
import { Table } from "antd";
import { getUsersIsLoading } from "../model/selectors/getUsersIsLoading/getUsersIsLoading";
import { Loader } from "../../../shared/ui/Loader/Loader";

export const UserTable = () => {

    useEffect(() => {
        dispatch(fetchUsers());
    }, []);

    const dispatch = useAppDispatch();

    const users = useSelector(getUsers);
    const isLoading = useSelector(getUsersIsLoading);

    if(isLoading){
        return <Loader />
    }

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Имя',
            dataIndex: 'first_name',
            key: 'first_name',
        },
        {
            title: 'Фамилия',
            dataIndex: 'last_name',
            key: 'last_name',
        },
        {
            title: 'Аватар',
            dataIndex: 'avatar',
            key: 'avatar',
        },
    ]

    return (
        <div>
            <Table dataSource={users} columns={columns}/>
        </div>
    );
};

