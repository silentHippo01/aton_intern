import { Button, Form, Input, Modal } from "antd";
import { useState } from "react";
import { useAppDispatch } from "../../../shared/lib/hooks/useAppDispatch/useAppDispatch";
import { IProduct } from "../../../entities/Product/model/types/CatalogSchema";
import { useSelector } from "react-redux";
import { catalogAction } from "../../../entities/Product/model/productSlice";
import { getCatalog } from "../../../entities/Product/selectors/getCatatlog";
import { ProductCard } from "../../../entities/Product";
import { getIsAuth } from "../../../features/LoginForm";
import cls from './CatalogPage.module.scss';

export const CatalogPage = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [form] = Form.useForm();

    const dispatch = useAppDispatch();
    const catalog = useSelector(getCatalog);
    const isAuth = useSelector(getIsAuth);

    const onFinish = (product: IProduct) => {
        function generateId() {
            return Math.random().toString(36).substr(2, 9);
        }
        const newProduct = { ...product, id: generateId() };
        setModalIsOpen(false);
        form.resetFields();

        dispatch(catalogAction.addProduct(newProduct))
    }

    return (
        <>
            <div className={cls.catalog}>
                <Modal
                    title={'Создать объект'}
                    centered
                    open={modalIsOpen}
                    onCancel={() => setModalIsOpen(false)}
                    width={500}
                    footer={null}
                >
                    <Form
                        form={form}
                        onFinish={onFinish}
                    >
                        <Form.Item
                            label="Название"
                            name="title"
                            rules={[{
                                required: true,
                                message: 'Обязательное поле'
                            }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Категория"
                            name="category"
                            rules={[{
                                required: true,
                                message: 'Обязательное поле'
                            }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Цена"
                            name="cost"
                            rules={[{
                                required: true,
                                message: 'Обязательное поле'
                            }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item>
                            <Button type={"primary"} htmlType="submit">
                                Создать объект
                            </Button>
                        </Form.Item>
                    </Form>
                </Modal>

                <div className={cls.catalog__buttons}>
                    <Button
                        type="primary"
                        disabled={!isAuth ? true : false}
                        onClick={() => setModalIsOpen(true)}
                    >
                        Добавить
                    </Button>
                </div>

                <div className={cls.catalog__content}>
                    {
                        catalog.length === 0 ? 'Авторизуйтесь и добавьте объекты' : catalog.map((item, index) => (<ProductCard dataCard={item} key={index} />))
                    }
                </div>

            </div>
        </>
    );
};