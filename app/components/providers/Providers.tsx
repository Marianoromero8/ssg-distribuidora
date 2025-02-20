// 'use client'
// import Image from "next/image"
// import React, { useState } from "react"
// import brands from "../../../public/data/products.json"
// import Link from "next/link"



// export default function Brands() {

//     const [visible, setVisible] = useState(7)

//     const handleShow = () => {
//         if (visible === brands.length) {
//             setVisible(7)
//         } else {
//             setVisible(brands.length)
//         }

//     }

//     return (
//         <div id="brands" className="text-[#4166e0]">
//             <div className="flex justify-center mt-5 mb-5 text-5xl">
//                 <h2>Proveedores</h2>
//             </div>
//             <hr className="border border-[#4166e0] mx-10 sm:mx-32" />
//             <div >
//                 <section className="flex flex-wrap justify-center mt-8 gap-12">
//                     {brands.slice(0, visible).map((img) => (
//                         <div key={img.id}>
//                             <Link href={`/brands/${img.brand}`}>
//                                 <Image src={img.src} alt={img.brand} width={img.width} height={img.height} className="w-40 h-40 border border-[#4166e0] rounded-full overflow-hidden" />
//                             </Link>
//                         </div>
//                     ))}
//                     <div className="flex justify-center">
//                         <button
//                             onClick={handleShow}
//                             className="px-2 text-xl"
//                         >
//                             {visible < brands.length ? "Ver más" : "Mostrar menos"}
//                         </button>
//                     </div>
//                 </section>


//             </div>
//         </div>
//     )
// }

"use client";
import Image from "next/image";
import React, { useState } from "react";
import brands from "../../../public/data/products.json";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Brands() {
    const [visible, setVisible] = useState(7); // Inicialmente muestra 6 elementos

    const handleShow = () => {
        setVisible((prevVisible) => {
            const newVisible = prevVisible === brands.length ? 7 : brands.length;
            // Desplazar hacia el principio de la sección
            window.scrollTo({ top: document.getElementById("brands")?.offsetTop, behavior: "smooth" });
            return newVisible;
        });
    };

    return (
        <div id="brands" className="text-[#4166e0]">
            <div className="flex justify-center mt-5 mb-5 text-5xl">
                <h2>Proveedores</h2>
            </div>
            <hr className="border border-[#4166e0] mx-10 sm:mx-32" />

            {/* Contenedor con animación */}
            <section className="flex flex-wrap justify-center mt-8 gap-12">
                <AnimatePresence>
                    {brands.slice(0, visible).map((img) => (
                        <motion.div
                            key={img.id}
                            layout
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Link href={`/brands/${img.brand}`}>
                                <Image
                                    src={img.src}
                                    alt={img.brand}
                                    width={img.width}
                                    height={img.height}
                                    className="w-40 h-40 border border-[#4166e0] rounded-full overflow-hidden"
                                />
                            </Link>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </section>

            {/* Botón animado */}
            <div className="flex justify-center mt-8">
                <motion.button
                    onClick={handleShow}
                    className=""
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    {visible < brands.length ? "Ver más" : "Mostrar menos"}
                </motion.button>
            </div>
        </div>
    );
}
