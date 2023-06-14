export interface FetchData {
    products: Product[];
    total: number;
    skip: number;
    limit: number;
}

export interface Product {
    brand: string;
    category: string;
    description: string;
    discountPercentage: number;
    id: number;
    images: string[];
    price: number;
    rating: number;
    stock: number;
    thumbnail: string;
    title: string;
}

export interface ProductsState {
    products: Product[];
    error: unknown;
    isLoading: boolean;
}
