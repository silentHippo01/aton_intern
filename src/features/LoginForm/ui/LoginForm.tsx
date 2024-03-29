import { Button, Form, Input } from "antd";
import { UserData } from "../model/types/UserData";
import { useAppDispatch } from "../../../shared/lib/hooks/useAppDispatch/useAppDispatch";
import { login } from "../model/services/login";
import { useCallback } from "react";
import { useSelector } from "react-redux";
import { getIsLoading } from "../model/selectors/getIsLoading/getIsLoading";

export const LoginForm = () => {

    const [form] = Form.useForm();
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getIsLoading);

    const onFinish = useCallback((values: UserData) => {
        dispatch(login(values))
        form.resetFields();
    }, []);

    return (
        <Form 
            onFinish={onFinish}     
        >
            <Form.Item
                label="Ник"
                name="username"
                rules={[{
                    required: true,
                    message: 'Введите имя'
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
                <Button 
                    type={"primary"}
                    htmlType="submit"
                    disabled={isLoading ? true : false}
                >
                    Войти
                </Button>
            </Form.Item>
        </Form>
    );
};
