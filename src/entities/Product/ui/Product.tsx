import { FC } from "react";
import { IProduct } from "../model/types/CatalogSchema";
import cls from './Product.module.scss';

interface ProductCardProps {
    data: IProduct;
}

export const ProductCard: FC<ProductCardProps> = (props) => {

    const {
        data
    } = props;

    return (
        <div className={cls.Product}>
            <h3 className={cls.product__title}>{data.title}</h3>
            <p className={cls.product__desc}>{data.category}</p>
            <p>{data.cost}</p>
        </div>
    );
};
