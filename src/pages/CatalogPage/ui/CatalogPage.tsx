import { Button, Form, Input, Modal } from "antd";
import { useState } from "react";
import { useAppDispatch } from "../../../shared/lib/hooks/useAppDispatch/useAppDispatch";
import { IProduct } from "../../../entities/Product/model/types/CatalogSchema";
import { useSelector } from "react-redux";
import { catalogAction } from "../../../entities/Product/model/productSlice";
import { getCatatlog } from "../../../entities/Product/selectors/getCatatlog";
import { ProductCard } from "../../../entities/Product";

class Product {
    title: string;
    category: string;
    cost: string;

    constructor(title: string, category: string, cost: string) {
        this.title = title;
        this.category = category;
        this.cost = cost;
    }

    edit(newTitle?: string, newCategory?: string, newCost?: string) {
        this.title = newTitle;
        this.category = newCategory;
        this.cost = newCost;
    }
}

export const CatalogPage = () => {

    // const [catalogDATA, setCatalogData] = useState<Product[]>([])
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [form] = Form.useForm();

    const dispatch = useAppDispatch();
    const catalog = useSelector(getCatatlog);
    console.log(catalog);


    const onFinish = (product: IProduct) => {
        console.log(product);
        setModalIsOpen(false);
        form.resetFields();

        // setCatalogData([...catalogDATA, {...value}]);

        dispatch(catalogAction.addProduct(product))
    }

    // const createProduct = (title: string, category: string, cost: string) => {
    //     let newProduct = new Product(title, category, cost);
    //     setCatalogData([...catalogDATA, newProduct]);
    //     console.log(catalogDATA);
    // }

    return (
        <>
            <div>
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
                            name="Cost"
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

                <Button
                    type="primary"
                    disabled={false}
                    onClick={() => setModalIsOpen(true)}
                >
                    Добавить
                </Button>

                {/* {
                    catalog.map(item => item.title)
                } */}
            </div>
        </>
    );
};