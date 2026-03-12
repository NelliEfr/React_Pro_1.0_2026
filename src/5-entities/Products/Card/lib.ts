import type { Product } from './model';

export const generateProducts = (productsCount: number): Product[] => {
    return Array.from({ length: productsCount }, (_, index) => ({
        id: String(index),
        name: `Product ${index + 1}`,
        price: Math.ceil(1e3 + Math.random() * 1e3),
        pictures: '/glasses.jpg',
    }));
};
