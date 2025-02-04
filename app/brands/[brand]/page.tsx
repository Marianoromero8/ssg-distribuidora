'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import ProductCard from '@/app/common/product-card';

interface Product {
    id: string | number;
    image: string;
    productName: string;
    presentation: string;
}

interface Brand {
    id: number;
    src: string;
    height: number;
    width: number;
    brand: string;
    products: Product[];
}

export default function BrandPage() {
    const params = useParams();
    const brand = decodeURIComponent(params?.brand as string);
    const [brandProducts, setBrandProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('/data/products.json');
                const data: Brand[] = await response.json();

                const brandData = data.find(
                    (item: Brand) => item.brand.toLowerCase() === brand.toLowerCase()
                );

                setBrandProducts(brandData ? brandData.products : []);
            } catch (error) {
                console.error('Error al cargar los productos:', error);
                setBrandProducts([]);
            }
        };

        if (brand) {
            fetchProducts();
        }
    }, [brand]);

    return (
        <div>
            <h1 className='text-5xl text-[#f17900ec] flex justify-center p-5'>Productos {brand}</h1>
            <hr className="border border-[#f17900ec] " />
            {brandProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ml-5 gap-8 mt-5">
                    {brandProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            image={product.image || '/Distribuidora-SSG_Logo-Blanco_2024.svg'}
                            productName={product.productName}
                            presentation={product.presentation}
                            alt={product.productName}
                        />
                    ))}
                </div>
            ) : (
                <p className='text-[#f17900ec] text-2xl flex justify-center p-10'>No hay productos para esta marca.</p>
            )}
        </div>
    );
}
