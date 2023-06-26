import { useAppSelector } from '../../app/hooks';
import {
    getAllProducts,
    isLoadingProducts
} from '../../features/products/products.slice';

import Loader from '../../components/Loader/Loader';
import { Product } from '../../types/product.type';
import useFetchProducts from '../../hooks/useFetchProducts';

import './ProductListPage.scss';
import ProductCard from '../../components/ProductCard/ProductCard';

function ProductListPage() {
    const data = useAppSelector(getAllProducts);
    const isLoading = useAppSelector(isLoadingProducts);
    useFetchProducts();

    const showNumberProductsPerPage = 15;

    const productsCount =
        data?.length > showNumberProductsPerPage
            ? showNumberProductsPerPage
            : data?.length - showNumberProductsPerPage;

    const countProductTitle = isLoading
        ? 'Produkty są ładowane...'
        : `Liczba produktów: ${productsCount}`;

    return (
        <>
            <h3 className="product_list_page-product_count">
                {countProductTitle}
            </h3>
            <div className="product_list_page-container">
                <Loader loading={isLoading} />
                {!isLoading &&
                    data
                        ?.map((product: Product) => (
                            <ProductCard product={product} key={product.id} />
                        ))
                        .slice(0, 15)}
            </div>
        </>
    );
}

export default ProductListPage;
