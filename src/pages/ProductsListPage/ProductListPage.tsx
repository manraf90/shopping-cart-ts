import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
    getAllProducts,
    fetchProducts,
    getProductsError,
    isLoadingProducts
} from '../../features/products/products.slice';

import { toast } from 'react-toastify';
import Loader from '../../components/Loader/Loader';
import { Product } from '../../types/product.type';

const ProductListPage = () => {
    const dispatch = useAppDispatch();
    const data = useAppSelector(getAllProducts);
    const isLoading = useAppSelector(isLoadingProducts);
    const error = useAppSelector(getProductsError);

    useEffect(() => {
        console.log('useEffect', error);

        if (error) {
            toast.error(error);
            return;
        }

        if (data?.products?.length > 0) {
            return;
        }

        dispatch(fetchProducts());
    }, []);

    // let content;

    // switch (status) {
    //     case 'loading':
    //         content = <p>Loading...</p>;
    //         break;
    //     case 'succeeded':
    //         content = data.data.products
    //             .map((product: Product) => product.title)
    //             ?.slice(0, 3);
    //         break;
    //     case 'failed':
    //         content = error;
    //         break;
    //     default:
    //         break;
    // }
    console.log('data', data);
    return (
        <div>
            <Loader loading={isLoading} />

            {data?.map((product: Product) => product.title).slice(0, 10)}
        </div>
    );
};

export default ProductListPage;
