// import { useEffect, useCallback } from 'react';
// import { useAppDispatch, useAppSelector } from '../app/hooks';
// import {
//     fetchProducts,
//     getProductsError
// } from '../features/products/products.slice';
// import { toast } from 'react-toastify';

// const useFetchProducts = () => {
//     const error = useAppSelector(getProductsError);

//     const dispatch = useAppDispatch();

//     const fetchData = useCallback(() => {
//         dispatch(fetchProducts());
//     }, [dispatch]);

//     useEffect(() => {
//         if (error) {
//             toast.error(error);
//             return;
//         }

//         fetchData();
//     }, [fetchData]);
// };

// export default useFetchProducts;
