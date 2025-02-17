import ProductCard from "@/app/common/product-card"
import { useEffect, useState } from "react"
import { FilterBrands } from "./filtersBrands"

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
            });
    }, [])

    // const handleFilterChange = (filtered: Product[]) => {
    //     setFilteredProducts(filtered);
    // };

    const handleFilterChange = (filtered: Product[]) => {
        setFilteredProducts((prev) =>
            JSON.stringify(prev) !== JSON.stringify(filtered) ? filtered : prev
        );
    };

    return (
        <div className="px-5 sm:px-10" >
            <div className=" flex flex-row justify-center gap-60">
                <div className=" pt-5 text-5xl font-bold text-[#4166e0]">
                    <h1>Productos</h1>
                </div>
            </div>
            <hr className="border border-[#4166e0] " />
            <FilterBrands brands={brands} onFilterChange={handleFilterChange} />
            <div id="products" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ml-5 gap-8">
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
        </div >
    )
}