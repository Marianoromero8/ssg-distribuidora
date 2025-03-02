'use client'
import ProductCard from "@/app/common/product-card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useEffect, useState } from "react";

export interface Product {
    id: string | number;
    image: string;
    productName: string;
    presentation: string;
    category: string;
    subcategory: string;
}

export interface Brand {
    id: string | number;
    src: string;
    height: number;
    width: number;
    website: string;
    brand: string;
    products: Product[];
}

export default function Commodity() {

    const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {
        fetch('/data/products.json')
            .then((response) => response.json())
            .then((data: Brand[]) => {
                const allProducts = data.flatMap((brand) => brand.products)
                setProducts(allProducts)
            })
            .catch((error) => console.error("Error al cargar los productos:", error));

    }, [])

    return (
        <div id="products" className="flex flex-col justify-center text-[#4166e0]">
            <div className="flex justify-center mt-5 mb-5 text-5xl">
                <h2>Productos</h2>
            </div>
            <hr className="border border-[#4166e0] mx-10 sm:mx-32" />
            <section className="flex flex-col justify-center mt-8 p-4 mx-32">
                <Carousel>
                    <CarouselContent className="flex flex-row items-center md:-ml-4 p-4">
                        {products.sort(() => Math.random() - 0.5).slice(0, 9).map((pro) => (
                            <CarouselItem key={pro.id} className="flex justify-center items-center w-fit h-fit md:basis-1/2 lg:basis-1/3">
                                <ProductCard
                                    image={pro.image || '/Distribuidora-SSG_Logo-Blanco_2024.svg'}
                                    productName={pro.productName}
                                    presentation={pro.presentation}
                                    alt={pro.productName}
                                />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </section>
            <a href="/products" className="flex justify-center hover:underline">
                <p>
                    Ver más
                </p>
            </a>
        </div>
    )
}