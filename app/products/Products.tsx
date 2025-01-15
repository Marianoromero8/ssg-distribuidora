import ProductCard from "@/app/common/product-card"
import { useEffect, useState } from "react"
import { FilterBrands } from "./filtersBrands"
import Image from "next/image";
import Link from "next/link";

export interface Product {
    id: string | number;
    image: string;
    productName: string;
    presentation: string;
    brand: string;
}

export default function Products() {

    const [products, setProducts] = useState<Product[]>([])
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);


    useEffect(() => {
        fetch('/data/products.json')
            .then((response) => response.json())
            .then((data) => {
                setProducts(data)
                setFilteredProducts(data);
            })
    }, [])

    const handleFilterChange = (filtered: Product[]) => {
        setFilteredProducts(filtered);
    };

    return (
        <div className="px-5 sm:px-10" >
            <div className=" flex flex-row justify-start gap-60">
                <div>
                    <Link href="/">
                        <Image
                            src="/Distribuidora-SSG_Logo-Negro_2024.svg"
                            width={200}
                            height={150}
                            alt="Logo"
                            className="pt-3"
                        />
                    </Link>
                </div >
                <div className=" pt-5 text-5xl font-bold text-[#f17900ec]">
                    <h1>Productos</h1>
                </div>
            </div>
            <hr className="border border-[#f17900ec] " />
            <FilterBrands products={products} onFilterChange={handleFilterChange} />
            <div id="products" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ml-5 gap-8">
                {filteredProducts.map((product) => (
                    <ProductCard
                        key={product.id}
                        image={product.image}
                        productName={product.productName}
                        presentation={product.presentation}
                    />
                ))}
            </div>
        </div >
    )
}