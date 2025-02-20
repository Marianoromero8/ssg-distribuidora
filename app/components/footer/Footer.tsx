'use client'
import Image from "next/image";
import { FaFacebook, FaInstagram, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

export default function Footer() {

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        } else {
            console.error(`Element with id "${sectionId}" not found.`);
        }
    }

    return (
        <footer id="contacts" className="bg-[#4166e0] text-[#ffff] py-6">
            <div className="container mx-auto flex flex-row items-start gap-4 pl-8">
                <div className="mt-6">
                    <Image
                        src="/Distribuidora-SSG_Logo-Blanco_2024.svg"
                        width={400}
                        height={250}
                        alt="Logo"
                    />
                </div>
                <div className="flex flex-col gap-6 align-middle">
                    <h2 className="underline text-2xl">Contactos</h2>
                    <div className="flex flex-row gap-2">
                        <a href="https://www.facebook.com/DistribuidoraSSG/" target="_blank" rel="noopener noreferrer">
                            <FaFacebook className="text-2xl hover:text-gray-600 transition-colors" />
                        </a>
                        <a href="https://www.instagram.com/ssgdistribuciones/" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="text-2xl hover:text-gray-600 transition-colors" />
                        </a>
                    </div>
                    <div className="flex flex-col gap-2 justify-start">
                        <p className="flex flex-row items-center gap-2"><FaMapMarkerAlt /> <a href="https://www.google.com.ar/maps/place/Bouchard+1710,+B8000DMH+Bah%C3%ADa+Blanca,+Provincia+de+Buenos+Aires/@-38.722438,-62.2361202,17z/data=!3m1!4b1!4m6!3m5!1s0x95eda3140b379de5:0x2e214b89f4fe1926!8m2!3d-38.7224422!4d-62.2335453!16s%2Fg%2F11c2hd_zfz?entry=ttu&g_ep=EgoyMDI1MDIxOC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">Bouchard 1710, Bahía Blanca, Buenos Aires 8000</a></p>
                        <p className="flex flex-row items-center gap-2"> <FaPhone /> +54 2914387530</p>
                    </div>
                    <p className="text-sm font-semibold">© 2025 - Desarrollado por <a href="https://portfolio-peach-sigma.vercel.app/" className="hover:underline" target="_blank">Mariano Romero</a></p>
                </div>
                <div className="flex flex-col ml-52 gap-3">
                    <h2 className="underline text-2xl">Menu</h2>
                    <p className="cursor-pointer hover:underline" onClick={() => scrollToSection('aboutus')}>Sobre Nosotros</p>
                    <p className="cursor-pointer hover:underline" onClick={() => scrollToSection('brands')}>Marcas</p>
                    <p className="cursor-pointer hover:underline" onClick={() => scrollToSection('')}>Productos</p>
                    <p className="cursor-pointer hover:underline" onClick={() => scrollToSection('')}>Clientes</p>
                </div>
            </div>
        </footer>
    )
}