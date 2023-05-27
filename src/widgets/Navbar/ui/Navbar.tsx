import { Button, Form, Input, Modal, Tabs } from "antd";
import { useState } from "react";
import { LoginForm } from "../../../features/LoginForm";
import TabPane from "antd/es/tabs/TabPane";
import { SignUpForm } from "../../../features/SignUpForm/ui/SignUpForm";
import { Link } from "react-router-dom";

export const Navbar = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const [activeTab, setActiveTab] = useState('login');

    const handleTabChange = (key: string) => {
        setActiveTab(key);
    };

    const handleOk = () => {
        // Handle form submission
    };

    const loginTest = async () => {
        const response = await fetch('https://reqres.in/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: 'eve.holt@reqres.in', password: 'cityslicka' }),
              });
    }

    const signTest = async () => {
        const response = await fetch('https://reqres.in/api/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: '123@mail.ru', password: '123' }),
          });
    }

    return (
        <div>
            <Modal
                title={activeTab === 'login' ? 'Вход' : 'Регистрация'}
                centered
                open={modalIsOpen}
                onCancel={() => setModalIsOpen(false)}
                width={500}
                footer={null}
            >
                <Tabs activeKey={activeTab} onChange={handleTabChange}>
                    <TabPane tab="Вход" key="login">
                        <LoginForm />
                    </TabPane>
                    <TabPane tab="Регистрация" key="registration">
                        <SignUpForm />
                    </TabPane>
                </Tabs>

            </Modal>

            <button
                onClick={() => setModalIsOpen(true)}
            >
                Войти
            </button>

            <Link to="/">Таблица</Link>
            <Link to="/catalog">Объекты</Link>

            
        </div>
    );
};
