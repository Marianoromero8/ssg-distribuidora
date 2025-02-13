'use client'
import Image from "next/image"
import React from "react"
import brands from "../../../public/data/products.json"
import Link from "next/link"



export default function Brands() {
    return (
        <div id="brands" className="text-[#f17900ec]">
            <div className="flex justify-center mt-5 mb-5 text-5xl">
                <h2>Proveedores</h2>
            </div>
            <hr className="border border-[#f17900ec] mx-10 sm:mx-32" />
            <div >
                <section className="flex flex-wrap justify-center mt-8 gap-12">
                    {brands.map((img) => (
                        <div key={img.id}>
                            <Link href={`${img.website}`}>
                                <Image src={img.src} alt={img.brand} width={img.width} height={img.height} className="w-40 h-40 border rounded-full overflow-hidden" />
                            </Link>
                        </div>
                    ))}
                </section>
            </div>
        </div>
    )
}