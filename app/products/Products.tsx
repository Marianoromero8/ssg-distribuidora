'use client'
import ProductCard from "@/app/common/product-card"
import { useEffect, useState } from "react"
import { BrandFilter } from "./BrandFilter"
import { Skeleton } from "@/components/ui/skeleton";

interface Brand {
    id: number;
    src: string;
    height: number;
    width: number;
    brand: string;
    products: Product[];
}
export interface Product {
    id: string | number;
    image: string;
    productName: string;
    presentation: string;
}

export default function Products() {

    const [brands, setBrands] = useState<Brand[]>([])
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        fetch('/data/products.json')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data: Brand[]) => {
                setBrands(data);
                setFilteredProducts(data?.flatMap((brand) => brand.products) || []);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            })
            .finally(() => {
                setLoading(false); // Asegurarse de que loading se actualice
            })
    }, [])

    const handleFilterChange = (filtered: Product[]) => {
        setFilteredProducts((prev) =>
            JSON.stringify(prev) !== JSON.stringify(filtered) ? filtered : prev
        );
    };

    return (
        <div className="flex flex-col justify-center px-2 pt-4 md:px-10 mb-8" >
            <div className="flex flex-row justify-center text-3xl md:text-5xl font-bold text-[#4166e0] p-5">
                <h1>Productos</h1>
            </div>
            <hr className="hidden md:block border border-[#4166e0] " />
            <BrandFilter brands={brands} onFilterChange={handleFilterChange} />
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
            ) : filteredProducts.length > 0 ? (
                <div id="products" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mx-20 gap-8">
                    {filteredProducts.map((product) => ( //Para que figuren de forma desordenada  {filteredProducts.sort(() => Math.random() - 0.5).map((product) => (
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
                <p className='text-[#4166e0] text-2xl flex justify-center p-10'>
                    No hay productos en esta subcategoría.
                </p>
            )
            }
        </div >
    )
}