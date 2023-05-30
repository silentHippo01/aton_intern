import { Button, Form, Input, Modal, Tabs } from "antd";
import { useState } from "react";
import { LoginForm, getIsAuth } from "../../../features/LoginForm";
import TabPane from "antd/es/tabs/TabPane";
import { SignUpForm } from "../../../features/SignUpForm/ui/SignUpForm";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../shared/lib/hooks/useAppDispatch/useAppDispatch";
import { loginActions } from "../../../features/LoginForm/model/slice/loginSlice";
import cls from './Navbar.module.scss';

export const Navbar = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('login');
    const dispatch = useAppDispatch();
    const isAuth = useSelector(getIsAuth);

    const handleTabChange = (key: string) => {
        setActiveTab(key);
    };

    const authButtonHandler = () => {
        if(isAuth){
            dispatch(loginActions.setIsAuth());
        } else {
            setModalIsOpen(true);
        }
    }

    const tabsItem = [
        {label: 'Вход', key: 'login', children: <LoginForm />},
        {label: 'Регистрация', key: 'registration', children: <SignUpForm />},
    ]

    return (
        <div className={cls.navbar}>
            <Modal
                title={activeTab === 'login' ? 'Вход' : 'Регистрация'}
                centered
                open={modalIsOpen}
                onCancel={() => setModalIsOpen(false)}
                width={500}
                footer={null}
            >
                <Tabs activeKey={activeTab} onChange={handleTabChange} items={tabsItem} />
            </Modal>

            <Button
                type='primary'
                onClick={authButtonHandler}
            >
                {isAuth ? 'Выйти' : 'Войти'}
            </Button>

            <div className={cls.navigation}>
                <Link to="/"><span className={cls.navigation_item}>Таблица</span></Link>
                <Link to="/catalog"><span className={cls.navigation_item}>Объекты</span></Link>
            </div>
        </div>
    );
};
