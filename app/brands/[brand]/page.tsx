'use client';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import ProductCard from '@/app/common/product-card';
import { Skeleton } from '@/components/ui/skeleton';

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
    const [loading, setLoading] = useState(true);


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
            } finally {
                setLoading(false);
            }
        };

        if (brand) {
            fetchProducts();
        }
    }, [brand]);
    // brandProducts.length > 0
    return (
        <div className='flex flex-col justify-center px-5 mt-44 md:mt-0 md:px-10 mb-8'>
            <div className='flex flex-row justify-center gap-60 text-3xl md:text-5xl font-bold text-[#4166e0] p-5'>
                <h1>Productos {brand}</h1>
            </div>
            <hr className="hidden md:block border border-[#4166e0] " />
            {loading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mx-20 gap-8 mt-8">
                    {Array.from({ length: 8 }).map((_, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <Skeleton className="w-40 h-40 rounded-lg" />
                            <Skeleton className="w-32 h-6 mt-3" />
                            <Skeleton className="w-24 h-4 mt-2" />
                        </div>
                    ))}
                </div>
            ) : brandProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mx-20 gap-8 mt-8">
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
                <p className='text-[#4166e0] text-2xl flex justify-center p-10'>No hay productos para esta marca.</p>
            )}
        </div>
    );
}
