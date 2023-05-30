import { Button, Form, Input } from "antd";
import { useCallback } from "react";
import { UserData } from "../../LoginForm/model/types/UserData";
import { useAppDispatch } from "../../../shared/lib/hooks/useAppDispatch/useAppDispatch";
import { loginActions } from "../../LoginForm/model/slice/loginSlice";
import { getIsLoading, signUp } from "../../LoginForm";
import { useSelector } from "react-redux";

export const SignUpForm = () => {

    const dispatch = useAppDispatch();
    const [form] = Form.useForm();
    const isLoading = useSelector(getIsLoading);

    const onFinish = useCallback((values: UserData) => {
        dispatch(signUp(values))
        form.resetFields();
    }, []);


    return (
        <>
            <Form 
                onFinish={onFinish}
            >
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
                <Button 
                    type={"primary"} 
                    htmlType="submit"
                    disabled={isLoading ? true : false}
                >
                    Зарегистрироваться
                </Button>
            </Form.Item>
        </Form>
        </>
    );
};

