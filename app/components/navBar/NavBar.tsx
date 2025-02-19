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
    return (
        <div className="flex flex-row justify-center w-full gap-5 bg-[#4166e0]">   {/*Le cambie el w-screen a w-full para que desaparezca el scroll para moverse a los costados FUNCIONO! */}
            <div className="border rounded-full bg-white">
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
                    <DropdownMenuTrigger>Sobre nosotros</DropdownMenuTrigger>
                </DropdownMenu>

                {/* Marcas */}
                <DropdownMenu>
                    <DropdownMenuTrigger>Marcas</DropdownMenuTrigger>
                    <DropdownMenuContent className="text-[#ffff] bg-[#4166e0] max-h-48 overflow-y-auto">
                        <DropdownMenuSub>
                            {brands.map((options) => (
                                <DropdownMenuItem key={options.id}>
                                    <Link href={`/brands/${options.brand}`}>
                                        {options.brand}
                                    </Link>
                                </DropdownMenuItem>
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
                        <DropdownMenuItem>
                            <Link href={"/products"}>
                                Todos
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuSub>
                            <DropdownMenuSubTrigger>
                                <Link href="/products/congelados">
                                    Congelados
                                </Link>
                            </DropdownMenuSubTrigger>
                            <DropdownMenuSubContent className="text-[#ffff] bg-[#4166e0]">
                                <DropdownMenuItem>Papas congeladas</DropdownMenuItem>
                                <DropdownMenuItem>Hamburguesas</DropdownMenuItem>
                                <DropdownMenuItem>Frutas y Verduras</DropdownMenuItem>
                            </DropdownMenuSubContent>
                        </DropdownMenuSub>
                        <DropdownMenuSub>
                            <DropdownMenuSubTrigger>
                                <Link href="/products/refrigerados">
                                    Refrigerados
                                </Link>
                            </DropdownMenuSubTrigger>
                            <DropdownMenuSubContent className="text-[#ffff] bg-[#4166e0]">
                                <DropdownMenuItem>Aderezos</DropdownMenuItem>
                                <DropdownMenuItem>Lacteos</DropdownMenuItem>
                            </DropdownMenuSubContent>
                        </DropdownMenuSub>
                        <DropdownMenuSub>
                            <DropdownMenuSubTrigger>
                                <Link href="/products/secos">
                                    Secos
                                </Link>
                            </DropdownMenuSubTrigger>
                            <DropdownMenuSubContent className="text-[#ffff] bg-[#4166e0]">
                                <DropdownMenuItem>Yerba Mate</DropdownMenuItem>
                                <DropdownMenuItem>Panes</DropdownMenuItem>
                                <DropdownMenuItem>Food Service</DropdownMenuItem>
                            </DropdownMenuSubContent>
                        </DropdownMenuSub>
                    </DropdownMenuContent>
                </DropdownMenu>

                {/* Clientes */}
                <DropdownMenu>
                    <DropdownMenuTrigger>Clientes</DropdownMenuTrigger>
                    <DropdownMenuContent className="text-[#ffff] bg-[#4166e0]">
                        <DropdownMenuItem>
                            <Link href="https://www.instagram.com/madd.burgers/" target="_blank">
                                Madd
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            <Link href="https://www.instagram.com/reina.burguesa/" target="_blank">
                                Reina
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            <Link href="https://www.instagram.com/salvaje.burger/" target="_blank">
                                Fogón Salvaje
                            </Link>
                        </DropdownMenuItem>
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


{/* <DropdownMenuSub>
                                <DropdownMenuSubTrigger>Milkaut</DropdownMenuSubTrigger>
                                <DropdownMenuSubContent className="text-[#ffff] bg-[#4166e0]">
                                    <DropdownMenuItem>Quesos</DropdownMenuItem>
                                    <DropdownMenuItem>Manteca</DropdownMenuItem>
                                </DropdownMenuSubContent>
                            </DropdownMenuSub>
                            <DropdownMenuSub>
                                <DropdownMenuSubTrigger>NotCo</DropdownMenuSubTrigger>
                                <DropdownMenuSubContent className="text-[#ffff] bg-[#4166e0]">
                                    <DropdownMenuItem>Leche vegetal</DropdownMenuItem>
                                    <DropdownMenuItem>Hamburguesas veganas</DropdownMenuItem>
                                </DropdownMenuSubContent>
                            </DropdownMenuSub> */}