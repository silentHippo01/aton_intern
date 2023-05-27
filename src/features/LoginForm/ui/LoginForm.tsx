import { Button, Form, Input } from "antd";
import { UserData } from "../model/types/UserData";
import { useAppDispatch } from "../../../shared/lib/hooks/useAppDispatch/useAppDispatch";
import { login } from "../model/services/login";

export const LoginForm = () => {
    const dispatch = useAppDispatch();

    const onFinish = (values: UserData) => {
        dispatch(login(values))
        console.log('Success:', values);
      };

    return (
        <Form 
            onFinish={onFinish}     
        >
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
