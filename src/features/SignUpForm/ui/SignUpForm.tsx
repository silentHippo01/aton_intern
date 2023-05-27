import { Button, Form, Input } from "antd";

export const SignUpForm = () => {
    return (
        <>
            <Form >
            <Form.Item
                label="Ник"
                name="username"
                rules={[{
                    required: true,
                    message: 'Введите свой ник'
                }]}
            >

                <Input />
            </Form.Item>

            <Form.Item
                label="Почта"
                name="email"
                rules={[{
                    required: true,
                    message: 'Введите почту'
                }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Пароль"
                name="password"
                rules={[{
                    required: true,
                    message: 'Введите пароль'
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
        </>
    );
};

