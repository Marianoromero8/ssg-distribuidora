'use client'
import Image from "next/image"
import React from "react"



export default function Brands() {
    return (
        <div id="brands" className="text-[#f17900ec]">
            <div className="flex justify-center mt-5 mb-5 text-5xl">
                <h2>Proveedores</h2>
            </div>
            <hr className="border border-[#f17900ec] mx-10 sm:mx-32" />
            <div >
                <section className="flex flex-wrap justify-center mt-8 gap-12">
                    <Image src="/tonadita.jpeg" height={150} width={150} alt="logo" className="w-40 h-40 rounded-full overflow-hidden"></Image>
                    <Image src="/milkaut.jpeg" height={150} width={150} alt="logo" className="w-40 h-40 rounded-full overflow-hidden"></Image>
                    <Image src="/seda.jpeg" height={150} width={150} alt="logo" className="w-40 h-40 rounded-full overflow-hidden"></Image>
                    <Image src="/conosud.jpeg" height={150} width={150} alt="logo" className="w-40 h-40 rounded-full overflow-hidden"></Image>
                    <Image src="/boogys.jpeg" height={150} width={150} alt="logo" className="w-40 h-40 rounded-full overflow-hidden"></Image>
                    <Image src="/lacomarca.jpeg" height={150} width={150} alt="logo" className="w-40 h-40 rounded-full overflow-hidden"></Image>
                    <Image src="/ranchoalto.jpeg" height={150} width={150} alt="logo" className="w-40 h-40 rounded-full overflow-hidden"></Image>
                    <Image src="/tiernis.jpeg" height={150} width={150} alt="logo" className="w-40 h-40 rounded-full overflow-hidden"></Image>
                    <Image src="/granjatresarroyos.jpeg" height={150} width={150} alt="logo" className="w-40 h-40 rounded-full overflow-hidden"></Image>
                    <Image src="/benidorm.jpeg" height={150} width={150} alt="logo" className="w-40 h-40 rounded-full overflow-hidden"></Image>
                    <Image src="/mccain.jpeg" height={150} width={150} alt="logo" className="w-40 h-40 rounded-full overflow-hidden"></Image>
                    <Image src="/donbasilio.jpeg" height={150} width={150} alt="logo" className="w-40 h-40 rounded-full overflow-hidden"></Image>
                    <Image src="/barraza.jpeg" height={150} width={150} alt="logo" className="w-40 h-40 rounded-full overflow-hidden"></Image>
                    <Image src="/notco.jpeg" height={150} width={150} alt="logo" className="w-40 h-40 rounded-full overflow-hidden"></Image>
                    <Image src="/g.jpeg" height={150} width={150} alt="logo" className="w-40 h-40 rounded-full overflow-hidden"></Image>
                    <Image src="/simplot.jpeg" height={150} width={150} alt="logo" className="w-40 h-40 rounded-full overflow-hidden"></Image>
                    <Image src="/s.jpeg" height={150} width={150} alt="logo" className="w-40 h-40 rounded-full overflow-hidden"></Image>
                </section>
            </div>
        </div>
    )
}