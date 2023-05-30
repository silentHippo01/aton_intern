import { FC, useState } from "react";
import { IProduct } from "../model/types/CatalogSchema";
import cls from './Product.module.scss';
import { Button, Form, Input, Modal } from "antd";
import { useAppDispatch } from "../../../shared/lib/hooks/useAppDispatch/useAppDispatch";
import { catalogAction } from "../model/productSlice";
import { useSelector } from "react-redux";
import { getIsAuth } from "../../../features/LoginForm";

interface ProductCardProps {
    dataCard: IProduct;
}

export const ProductCard: FC<ProductCardProps> = (props) => {

    const {
        dataCard
    } = props;

    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [form] = Form.useForm();

    const dispatch = useAppDispatch();
    const isAuth = useSelector(getIsAuth);

    const editHandler = (value: IProduct) => {
        dispatch(catalogAction.editProduct({ ...value, id: dataCard.id }))
    }

    const deleteHandler = () => {
        dispatch(catalogAction.deleteProduct(dataCard.id));
    }

    return (
        <div className={cls.product}>
            <Modal
                title={'Редактировать объект'}
                centered
                open={modalIsOpen}
                onCancel={() => setModalIsOpen(false)}
                width={500}
                footer={null}
            >
                <Form
                    form={form}
                    onFinish={editHandler}
                >
                    <Form.Item
                        label="Название"
                        name="title"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Категория"
                        name="category"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Цена"
                        name="cost"
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item>
                        <Button type={"primary"} htmlType="submit">
                            Редактировать объект
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
            <div className={cls.product__content}>
                <h3 className={cls.product__title}>Название: {dataCard.title}</h3>
                <p className={cls.product__desc}>Категория: {dataCard.category}</p>
                <p className={cls.product__cost}>Цена: {dataCard.cost} руб</p>
            </div>

            <div className={cls.product__buttons}>
                <Button
                    type="primary"
                    onClick={() => setModalIsOpen(true)}
                    disabled={!isAuth ? true : false}
                >
                    Редактировать
                </Button>

                <Button
                    onClick={deleteHandler}
                    disabled={!isAuth ? true : false}
                    danger
                >
                    Удалить
                </Button>
            </div>
        </div>
    );
};
