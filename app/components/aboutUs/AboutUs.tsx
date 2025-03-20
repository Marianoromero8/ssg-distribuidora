'use client'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import Image from "next/image"
import { motion } from "framer-motion";

export default function AboutUs() {
    return (
        <div id="aboutus" className="flex flex-col md:flex-row text-[#4166e0] px-5 sm:px-10 mb-8 mt-6 gap-12 p-6 w-full overflow-hidden">
            <div className="flex flex-col gap-5 w-full md:w-1/2">
                <motion.h2
                    className="flex justify-center text-4xl"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 2 }}
                    viewport={{ once: true }}
                >
                    Sobre Nosotros
                </motion.h2>
                <hr className="border border-[#4166e0]" />
                <motion.section
                    className="flex justify-center mt-8"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 2 }}
                    viewport={{ once: true }}
                >
                    <Carousel>
                        <CarouselContent className="flex items-center gap-4 mx-4">
                            <CarouselItem className="flex justify-center"><Image src="/Distribuidora-SSG_Logo-Blanco_2024.svg" width={600} height={300} alt="Logo" /></CarouselItem>
                            <CarouselItem className="flex justify-center"><Image src="/Distribuidora-SSG_Logo-Negro_2024.svg" width={600} height={300} alt="Logo" /></CarouselItem>
                            <CarouselItem className="flex justify-center"><Image src="/Distribuidora-SSG_Logo-Blanco_2024.svg" width={600} height={300} alt="Logo" /></CarouselItem>
                            <CarouselItem className="flex justify-center"><Image src="/Distribuidora-SSG_Logo-Negro_2024.svg" width={600} height={300} alt="Logo" /></CarouselItem>
                        </CarouselContent>
                    </Carousel>
                </motion.section>
            </div>
            <div className="flex flex-col pt-8 md:pt-24 gap-5 text-sm w-full md:w-1/2">
                <motion.p
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 2 }}
                    viewport={{ once: true }}
                >
                    En <b>SSG Distribuidora</b>, nos especializamos en ofrecer productos congelados y panificados de la más alta calidad para satisfacer las necesidades de nuestros clientes. Con años de experiencia en el sector, nos hemos consolidado como un referente en la distribución de alimentos, brindando soluciones eficientes y confiables a restaurantes, hoteles, tiendas y otros negocios del rubro gastronómico.
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 3 }}
                    viewport={{ once: true }}
                >
                    Nuestra misión es proporcionar productos congelados y panificados que no solo mantengan su frescura, sino que también ofrezcan un sabor auténtico y delicioso. Trabajamos con proveedores cuidadosamente seleccionados, comprometidos con los mismos altos estándares de calidad que nos definen, para garantizar que cada producto llegue a nuestros clientes en las mejores condiciones.
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 4 }}
                    viewport={{ once: true }}
                >
                    En SSG Distribuidora, entendemos que la calidad y el servicio son fundamentales, por lo que nos aseguramos de cumplir con los plazos de entrega, ofrecer un servicio personalizado y mantener una comunicación constante con nuestros clientes. Nuestro objetivo es que cada experiencia con nosotros sea satisfactoria, ayudando a nuestros clientes a crecer y a ofrecer lo mejor a sus consumidores.
                </motion.p>
            </div>
        </div>
    )
}