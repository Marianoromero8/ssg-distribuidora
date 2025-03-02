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
import { FaFacebook, FaInstagram } from "react-icons/fa";

//Le saque el focus a los DropdownMenuSubTrigger y DropdownMenuItem
export default function NavBar() {

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        } else {
            console.error(`Element with id "${sectionId}" not found.`);
        }
    }

    return (
        <div className="flex flex-row justify-center w-full gap-5 bg-[#4166e0]">   {/*Le cambie el w-screen a w-full para que desaparezca el scroll para moverse a los costados FUNCIONO! */}
            <div className="bg-white">
                <Link href='/'>
                    <Image
                        src="/Distribuidora-SSG_Logo-Negro_2024.svg"
                        width={200}
                        height={150}
                        alt="Logo"
                    />
                </Link>
            </div>

            <div className="flex flex-row justify-start items-center text-[#ffff] ps-14 gap-40 bg-[#4166e0] text-[#000] w-screen">
                {/* Sobre nosotros */}
                <DropdownMenu>
                    <DropdownMenuTrigger onClick={() => scrollToSection('aboutus')}>Sobre nosotros</DropdownMenuTrigger>
                </DropdownMenu>

                {/* Marcas */}
                <DropdownMenu>
                    <DropdownMenuTrigger>Marcas</DropdownMenuTrigger>
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
                        <DropdownMenuTrigger>Productos</DropdownMenuTrigger>
                    </Link>
                    <DropdownMenuContent className="text-[#ffff] bg-[#4166e0]">
                        <Link href={"/products"}>
                            <DropdownMenuItem>
                                Todos
                            </DropdownMenuItem>
                        </Link>
                        <DropdownMenuSub>
                            <DropdownMenuSubTrigger onClick={() => {
                                window.location.href = "/products/congelados"; // Redirige manualmente
                            }}>
                                Congelados
                            </DropdownMenuSubTrigger>
                            <DropdownMenuSubContent className="text-[#ffff] bg-[#4166e0]">
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
                                onClick={() => {
                                    window.location.href = "/products/refrigerados"; // Redirige manualmente
                                }}
                            >
                                Refrigerados
                            </DropdownMenuSubTrigger>
                            <DropdownMenuSubContent className="text-[#ffff] bg-[#4166e0]">
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
                            </DropdownMenuSubContent>
                        </DropdownMenuSub>
                        <DropdownMenuSub>
                            <DropdownMenuSubTrigger
                                onClick={() => {
                                    window.location.href = "/products/secos"; // Redirige manualmente
                                }}
                            >
                                Secos
                            </DropdownMenuSubTrigger>
                            <DropdownMenuSubContent className="text-[#ffff] bg-[#4166e0]">
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
                    <DropdownMenuTrigger>Clientes</DropdownMenuTrigger>
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
                    <DropdownMenuTrigger>Contacto</DropdownMenuTrigger>
                    <DropdownMenuContent className="text-[#ffff] bg-[#4166e0]">
                        <DropdownMenuItem>
                            <Link href="https://www.instagram.com/ssgdistribuciones/" target="_blank">
                                <div className="flex flex-row items-center gap-2">
                                    <FaInstagram />Instragram
                                </div>
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            <Link href="https://www.facebook.com/SSGDistribuidora?locale=es_LA" target="_blank">
                                <div className="flex flex-row items-center gap-2">
                                    <FaFacebook />Facebook
                                </div>
                            </Link>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    );
}
