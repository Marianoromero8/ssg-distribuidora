"use client";
import Image from "next/image";
import React, { useState } from "react";
import brands from "../../../public/data/products.json";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Providers() {
    const [visible, setVisible] = useState(6); // Inicialmente muestra 6 elementos

    const handleShow = () => {
        setVisible((prevVisible) => {
            const newVisible = prevVisible === brands.length ? 6 : brands.length;
            // Desplazar hacia el principio de la sección
            window.scrollTo({ top: document.getElementById("brands")?.offsetTop, behavior: "smooth" });
            return newVisible;
        });
    };

    return (
        <div id="brands" className="text-[#4166e0]">
            <motion.div
                className="flex justify-center mt-8 mb-6 text-5xl"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 2 }}
                viewport={{ once: true }}
            >
                <h2>Proveedores</h2>
            </motion.div>
            <hr className="border border-[#4166e0] mx-10 sm:mx-32" />

            {/* Contenedor con animación */}
            <motion.section
                className="flex flex-wrap justify-center mt-8 gap-12"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 2 }}
                viewport={{ once: true }}
            >
                <AnimatePresence>
                    {brands.slice(0, visible).map((img) => (
                        <motion.div
                            key={img.id}
                            layout
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
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
            </motion.section>

            {/* Botón animado */}
            <motion.div
                className="flex justify-center mt-8"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 3 }}
                viewport={{ once: true }}
            >
                <motion.button
                    onClick={handleShow}
                    className=""
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    {visible < brands.length ? "Ver más" : "Mostrar menos"}
                </motion.button>
            </motion.div>
        </div>
    );
}
