import { useEffect } from "react";
import { useAppDispatch } from "../../../shared/lib/hooks/useAppDispatch/useAppDispatch";
import { fetchUsers } from "../model/services/fetchUsers";
import { useSelector } from "react-redux";
import { getUsers } from "../model/selectors/getUsers/getUsers";
import { Col, Row, Table } from "antd";
import { getUsersIsLoading } from "../model/selectors/getUsersIsLoading/getUsersIsLoading";
import { Loader } from "../../../shared/ui/Loader/Loader";
import cls from './UserTable.module.scss';
import { getPage } from "../model/selectors/getPage/getPage";

export const UserTable = () => {

    useEffect(() => {
        dispatch(fetchUsers(1));
    }, []);

    const dispatch = useAppDispatch();

    const users = useSelector(getUsers);
    const currentPage = useSelector(getPage);
    const isLoading = useSelector(getUsersIsLoading);

    if (isLoading) {
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

    const dataSource = users.map(item => ({...item, key:item.id}));

    return (
        <div className={cls.useTable}>
            <Row>
                <Col xs={24} md={{span: 12, offset: 6}}>
                    <Table
                        dataSource={dataSource}
                        columns={columns}
                        pagination={{
                            current: currentPage,
                            pageSize: 3,
                            total: 10,
                            onChange: (page: number) => {
                                dispatch(fetchUsers(page));
                            }
                        }}
                    />
                </Col>
            </Row>
        </div>
    );
};

