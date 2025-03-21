'use client';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
    DropdownMenuSub,
    DropdownMenuSubTrigger,
    DropdownMenuSubContent,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import Link from "next/link";
import brands from "../../../public/data/products.json"
import { usePathname, useRouter } from "next/navigation";
import { motion } from 'framer-motion'
import { useState } from "react";
import { Menu, X } from "lucide-react"; // Íconos para el menú


//Le saque el focus a los DropdownMenuSubTrigger y DropdownMenuItem
export default function NavBar() {
    const router = useRouter();
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);


    const scrollToSection = (sectionId: string) => {
        setTimeout(() => {

            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            } else {
                console.error(`Element with id "${sectionId}" not found.`);
            }
        }, 200);
    }

    const handleAboutUsClick = () => {
        if (pathname === "/") {
            scrollToSection("aboutus");
        } else {
            router.push("/#aboutus"); // Redirige y luego hace scroll
        }
        setMenuOpen(false);
    };

    return (
        <div className="flex flex-row justify-center w-full gap-5">   {/*Le cambie el w-screen a w-full para que desaparezca el scroll para moverse a los costados FUNCIONO! */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >
                <Link href='/'>
                    <Image
                        src="/Distribuidora-SSG_Logo-Negro_2024.svg"
                        width={200}
                        height={150}
                        alt="Logo"
                    />
                </Link>
            </motion.div>

            <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <X size={28} className="text-[#4166e0]" /> : <Menu size={28} className="text-[#4166e0]" />}
            </button>

            {/*Menu escritorio */}
            <div className="hidden sm:flex flex-row justify-start items-center text-[#4166e0] ps-14 gap-40 w-screen">
                {/* Sobre nosotros */}
                <DropdownMenu>
                    <DropdownMenuTrigger onClick={handleAboutUsClick} className="transition-transform duration-300 ease-in-out transform hover:scale-105">
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                        >
                            Sobre nosotros
                        </motion.p>
                    </DropdownMenuTrigger>
                </DropdownMenu>

                {/* Marcas */}
                <DropdownMenu>
                    <DropdownMenuTrigger className="transition-transform duration-300 ease-in-out transform hover:scale-105">
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1.5 }}
                            viewport={{ once: true }}
                        >
                            Marcas
                        </motion.p>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="text-[#ffff] bg-[#4166e0] max-h-48 overflow-y-auto">
                        <DropdownMenuSub>
                            {brands.map((options) => (
                                <Link href={`/brands/${options.brand}`} key={options.id}>
                                    <DropdownMenuItem>
                                        {options.brand}
                                    </DropdownMenuItem>
                                </Link>
                            ))}
                        </DropdownMenuSub>
                    </DropdownMenuContent>
                </DropdownMenu>

                {/* Productos */}
                <DropdownMenu>
                    <Link href={"/products"}>
                        <DropdownMenuTrigger className="transition-transform duration-300 ease-in-out transform hover:scale-105">
                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 2 }}
                                viewport={{ once: true }}
                            >
                                Productos
                            </motion.p>
                        </DropdownMenuTrigger>
                    </Link>
                    <DropdownMenuContent className="text-[#ffff] bg-[#4166e0]">
                        <Link href={"/products"}>
                            <DropdownMenuItem>
                                Todos
                            </DropdownMenuItem>
                        </Link>
                        <DropdownMenuSub>
                            <DropdownMenuSubTrigger >
                                Congelados
                            </DropdownMenuSubTrigger>
                            <DropdownMenuSubContent className="text-[#ffff] bg-[#4166e0]">
                                <Link href="/products/congelados">
                                    <DropdownMenuItem>
                                        Todos
                                    </DropdownMenuItem>
                                </Link>
                                <Link href="/products/congelados/papas%20fritas">
                                    <DropdownMenuItem>
                                        Papas Fritas
                                    </DropdownMenuItem>
                                </Link>
                                <Link href="/products/congelados/hamburguesas">
                                    <DropdownMenuItem>
                                        Hamburguesas
                                    </DropdownMenuItem>
                                </Link>
                                <Link href="/products/congelados/frutas">
                                    <DropdownMenuItem>
                                        Frutas
                                    </DropdownMenuItem>
                                </Link>
                                <Link href="/products/congelados/verduras">
                                    <DropdownMenuItem>
                                        Verduras
                                    </DropdownMenuItem>
                                </Link>
                            </DropdownMenuSubContent>
                        </DropdownMenuSub>
                        <DropdownMenuSub>
                            <DropdownMenuSubTrigger
                            >
                                Refrigerados
                            </DropdownMenuSubTrigger>
                            <DropdownMenuSubContent className="text-[#ffff] bg-[#4166e0]">
                                <Link href="/products/refrigerados">
                                    <DropdownMenuItem>
                                        Todos
                                    </DropdownMenuItem>
                                </Link>
                                <Link href="/products/refrigerados/aderezos">
                                    <DropdownMenuItem>
                                        Aderezos
                                    </DropdownMenuItem>
                                </Link>
                                <Link href="/products/refrigerados/lacteos">
                                    <DropdownMenuItem>
                                        Lacteos
                                    </DropdownMenuItem>
                                </Link>
                                <Link href="/products/refrigerados/quesos">
                                    <DropdownMenuItem>
                                        Quesos
                                    </DropdownMenuItem>
                                </Link>
                                <Link href="/products/refrigerados/fiambres">
                                    <DropdownMenuItem>
                                        Fiambres
                                    </DropdownMenuItem>
                                </Link>
                                <Link href="/products/refrigerados/salchichas">
                                    <DropdownMenuItem>
                                        Salchichas
                                    </DropdownMenuItem>
                                </Link>
                            </DropdownMenuSubContent>
                        </DropdownMenuSub>
                        <DropdownMenuSub>
                            <DropdownMenuSubTrigger>
                                Secos
                            </DropdownMenuSubTrigger>
                            <DropdownMenuSubContent className="text-[#ffff] bg-[#4166e0]">
                                <Link href="/products/secos">
                                    <DropdownMenuItem>
                                        Todos
                                    </DropdownMenuItem>
                                </Link>
                                <Link href="/products/secos/yerba%20mate">
                                    <DropdownMenuItem>
                                        Yerba Mate
                                    </DropdownMenuItem>
                                </Link>
                                <Link href="/products/secos/panes">
                                    <DropdownMenuItem>
                                        Panes
                                    </DropdownMenuItem>
                                </Link>
                                <Link href="/products/secos/food%20service">
                                    <DropdownMenuItem>
                                        Food Service
                                    </DropdownMenuItem>
                                </Link>
                            </DropdownMenuSubContent>
                        </DropdownMenuSub>
                    </DropdownMenuContent>
                </DropdownMenu>

                {/* Clientes */}
                <DropdownMenu>
                    <DropdownMenuTrigger className="transition-transform duration-300 ease-in-out transform hover:scale-105">
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 2.5 }}
                            viewport={{ once: true }}
                        >
                            Clientes
                        </motion.p>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="text-[#ffff] bg-[#4166e0]">
                        <Link href="https://www.instagram.com/reina.burguesa/" target="_blank">
                            <DropdownMenuItem className="cursor-pointer">
                                Reina
                            </DropdownMenuItem>
                        </Link>
                        <DropdownMenuSeparator />
                        <Link href="https://www.instagram.com/madd.burgers/" target="_blank">
                            <DropdownMenuItem className="cursor-pointer">
                                Madd
                            </DropdownMenuItem>
                        </Link>
                        <DropdownMenuSeparator />
                        <Link href="https://www.instagram.com/salvaje.burger/" target="_blank">
                            <DropdownMenuItem className="cursor-pointer">
                                Fogón Salvaje
                            </DropdownMenuItem>
                        </Link>
                    </DropdownMenuContent>
                </DropdownMenu>

                {/*Contacto */}
                <DropdownMenu>
                    <DropdownMenuTrigger onClick={() => scrollToSection('contacts')} className="transition-transform duration-300 ease-in-out transform hover:scale-105">
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 3 }}
                            viewport={{ once: true }}
                        >
                            Contacto
                        </motion.p>
                    </DropdownMenuTrigger>
                </DropdownMenu>
            </div>


            {/* Menú en móviles */}
            {menuOpen && (
                <div className="sm:hidden absolute top-14 left-0 w-full shadow-lg flex flex-col items-center space-y-4 p-4 text-[#4166e0] z-40">
                    <DropdownMenu>
                        <DropdownMenuTrigger onClick={handleAboutUsClick} className="transition-transform duration-300 ease-in-out transform hover:scale-105">
                            Sobre nosotros
                        </DropdownMenuTrigger>
                    </DropdownMenu>
                    <DropdownMenu>
                        <DropdownMenuTrigger className="transition-transform duration-300 ease-in-out transform hover:scale-105">
                            Marcas
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="text-[#ffff] bg-[#4166e0] max-h-48 overflow-y-auto">
                            <DropdownMenuSub>
                                {brands.map((options) => (
                                    <Link href={`/brands/${options.brand}`} key={options.id}>
                                        <DropdownMenuItem>
                                            {options.brand}
                                        </DropdownMenuItem>
                                    </Link>
                                ))}
                            </DropdownMenuSub>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <DropdownMenu>
                        <Link href={"/products"}>
                            <DropdownMenuTrigger className="transition-transform duration-300 ease-in-out transform hover:scale-105">
                                Productos
                            </DropdownMenuTrigger>
                        </Link>
                        <DropdownMenuContent className="text-[#ffff] bg-[#4166e0]">
                            <Link href={"/products"}>
                                <DropdownMenuItem>
                                    Todos
                                </DropdownMenuItem>
                            </Link>
                            <DropdownMenuSub>
                                <DropdownMenuSubTrigger>
                                    Congelados
                                </DropdownMenuSubTrigger>
                                <DropdownMenuSubContent className="text-[#ffff] bg-[#4166e0]">
                                    <Link href="/products/congelados">
                                        <DropdownMenuItem>
                                            Todos
                                        </DropdownMenuItem>
                                    </Link>
                                    <Link href="/products/congelados/papas%20fritas">
                                        <DropdownMenuItem>
                                            Papas Fritas
                                        </DropdownMenuItem>
                                    </Link>
                                    <Link href="/products/congelados/hamburguesas">
                                        <DropdownMenuItem>
                                            Hamburguesas
                                        </DropdownMenuItem>
                                    </Link>
                                    <Link href="/products/congelados/frutas">
                                        <DropdownMenuItem>
                                            Frutas
                                        </DropdownMenuItem>
                                    </Link>
                                    <Link href="/products/congelados/verduras">
                                        <DropdownMenuItem>
                                            Verduras
                                        </DropdownMenuItem>
                                    </Link>
                                </DropdownMenuSubContent>
                            </DropdownMenuSub>
                            <DropdownMenuSub>
                                <DropdownMenuSubTrigger>
                                    Refrigerados
                                </DropdownMenuSubTrigger>
                                <DropdownMenuSubContent className="text-[#ffff] bg-[#4166e0]">
                                    <Link href="/products/refrigerados">
                                        <DropdownMenuItem>
                                            Todos
                                        </DropdownMenuItem>
                                    </Link>
                                    <Link href="/products/refrigerados/aderezos">
                                        <DropdownMenuItem>
                                            Aderezos
                                        </DropdownMenuItem>
                                    </Link>
                                    <Link href="/products/refrigerados/lacteos">
                                        <DropdownMenuItem>
                                            Lacteos
                                        </DropdownMenuItem>
                                    </Link>
                                    <Link href="/products/refrigerados/quesos">
                                        <DropdownMenuItem>
                                            Quesos
                                        </DropdownMenuItem>
                                    </Link>
                                    <Link href="/products/refrigerados/fiambres">
                                        <DropdownMenuItem>
                                            Fiambres
                                        </DropdownMenuItem>
                                    </Link>
                                    <Link href="/products/refrigerados/salchichas">
                                        <DropdownMenuItem>
                                            Salchichas
                                        </DropdownMenuItem>
                                    </Link>
                                </DropdownMenuSubContent>
                            </DropdownMenuSub>
                            <DropdownMenuSub>
                                <DropdownMenuSubTrigger>
                                    Secos
                                </DropdownMenuSubTrigger>
                                <DropdownMenuSubContent className="text-[#ffff] bg-[#4166e0]">
                                    <Link href="/products/secos">
                                        <DropdownMenuItem>
                                            Todos
                                        </DropdownMenuItem>
                                    </Link>
                                    <Link href="/products/secos/yerba%20mate">
                                        <DropdownMenuItem>
                                            Yerba Mate
                                        </DropdownMenuItem>
                                    </Link>
                                    <Link href="/products/secos/panes">
                                        <DropdownMenuItem>
                                            Panes
                                        </DropdownMenuItem>
                                    </Link>
                                    <Link href="/products/secos/food%20service">
                                        <DropdownMenuItem>
                                            Food Service
                                        </DropdownMenuItem>
                                    </Link>
                                </DropdownMenuSubContent>
                            </DropdownMenuSub>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <DropdownMenu>
                        <DropdownMenuTrigger className="transition-transform duration-300 ease-in-out transform hover:scale-105">
                            Clientes
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="text-[#ffff] bg-[#4166e0]">
                            <Link href="https://www.instagram.com/reina.burguesa/" target="_blank">
                                <DropdownMenuItem className="cursor-pointer">
                                    Reina
                                </DropdownMenuItem>
                            </Link>
                            <DropdownMenuSeparator />
                            <Link href="https://www.instagram.com/madd.burgers/" target="_blank">
                                <DropdownMenuItem className="cursor-pointer">
                                    Madd
                                </DropdownMenuItem>
                            </Link>
                            <DropdownMenuSeparator />
                            <Link href="https://www.instagram.com/salvaje.burger/" target="_blank">
                                <DropdownMenuItem className="cursor-pointer">
                                    Fogón Salvaje
                                </DropdownMenuItem>
                            </Link>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <DropdownMenu>
                        <DropdownMenuTrigger onClick={() => scrollToSection('contacts')} className="transition-transform duration-300 ease-in-out transform hover:scale-105">
                            Contacto
                        </DropdownMenuTrigger>
                    </DropdownMenu>
                </div>
            )}
        </div>
    );
}
