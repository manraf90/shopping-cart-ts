import { Product } from '../../types/product.type';
import { addToCart } from '../../features/cart/cart.slice';
import { getAllProducts } from '../../features/products/products.slice';
import ButtonBase from '../ButtonBase/ButtonBase';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

import './ProductCard.scss';

type Props = {
    product: Product;
};

const ProductCard = ({ product }: Props) => {
    const dispatch = useAppDispatch();
    const data = useAppSelector(getAllProducts);

    console.log('data', data);

    const { thumbnail, title, price } = product;

    const renderProductImage = () => {
        return (
            <div className="product_card-figure_review">
                <figure className="product_card-figure">
                    <div className="product_card-picture">
                        <img className="image" src={thumbnail} alt={title} />
                    </div>
                </figure>
            </div>
        );
    };

    const renderProductInformation = () => {
        return (
            <div className="product_card-content">
                <p className="product_card-title">{title}</p>
                <div className="product_card-price">{price} zł</div>
                <p>Liczba sztuk: {product.stock}</p>
            </div>
        );
    };

    const handleAddToCart = () => {
        dispatch(addToCart(product));
    };

    const renderProductActions = () => {
        return <ButtonBase label="Do koszyka" onClick={handleAddToCart} />;
    };

    return (
        <div className="product_card-wrapper">
            {renderProductImage()}
            {renderProductInformation()}
            {renderProductActions()}
        </div>
    );
};

export default ProductCard;
