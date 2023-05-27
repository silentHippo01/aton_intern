import { Button, Form, Input, Modal, Tabs } from "antd";
import { useState } from "react";
import { LoginForm } from "../../../features/LoginForm";
import TabPane from "antd/es/tabs/TabPane";
import { SignUpForm } from "../../../features/SignUpForm/ui/SignUpForm";

export const Navbar = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const [activeTab, setActiveTab] = useState('login');

    const handleTabChange = (key: string) => {
        setActiveTab(key);
    };

    const handleOk = () => {
        // Handle form submission
    };


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
        </div>
    );
};
