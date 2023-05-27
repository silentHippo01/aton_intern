import { Button, Form, Input } from "antd";

export const LoginForm = () => {
    return (
        <Form >
            <Form.Item
                label="Ник"
                name="username"
                rules={[{
                    required: true,
                    message: 'Введи свое имя'
                }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Почта"
                name="email"
                rules={[{
                    required: true,
                    message: 'Введи свое ник'
                }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Пароль"
                name="password"
                rules={[{
                    required: true,
                    message: 'Введи свое пароль'
                }]}
            >
                <Input />
            </Form.Item>

            <Form.Item>
                <Button type={"primary"} htmlType="submit">
                    Войти
                </Button>
            </Form.Item>
        </Form>
    );
};
