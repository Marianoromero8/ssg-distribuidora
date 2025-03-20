'use client'
import ProductCard from "@/app/common/product-card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

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
        <div id="products" className="flex flex-col justify-center mt-8 mb-6 text-[#4166e0]">
            <motion.div
                className="flex justify-center mt-5 mb-5 text-5xl"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 2 }}
                viewport={{ once: true }}
            >
                <h2>Productos</h2>
            </motion.div>
            <hr className="border border-[#4166e0] mx-10 sm:mx-32" />
            <motion.section
                className="flex flex-col justify-center mt-8 p-4 mx-32"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 2 }}
                viewport={{ once: true }}
            >
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
            </motion.section>
            <Link href="/products" className="flex justify-center hover:underline">
                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2 }}
                    viewport={{ once: true }}
                >Ver más</motion.p>
            </Link>
        </div>
    )
}