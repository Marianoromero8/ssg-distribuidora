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
                            <DropdownMenuSubTrigger>Congelados</DropdownMenuSubTrigger>
                            <DropdownMenuSubContent className="text-[#ffff] bg-[#4166e0]">
                                <DropdownMenuItem>Papas congeladas</DropdownMenuItem>
                                <DropdownMenuItem>Hamburguesas</DropdownMenuItem>
                            </DropdownMenuSubContent>
                        </DropdownMenuSub>
                        <DropdownMenuSub>
                            <DropdownMenuSubTrigger>Frescos</DropdownMenuSubTrigger>
                            <DropdownMenuSubContent className="text-[#ffff] bg-[#4166e0]">
                                <DropdownMenuItem>Verduras</DropdownMenuItem>
                                <DropdownMenuItem>Nuggets</DropdownMenuItem>
                            </DropdownMenuSubContent>
                        </DropdownMenuSub>
                    </DropdownMenuContent>
                </DropdownMenu>

                {/* Clientes */}
                <DropdownMenu>
                    <DropdownMenuTrigger>Clientes</DropdownMenuTrigger>
                    <DropdownMenuContent className="text-[#ffff] bg-[#4166e0]">
                        <DropdownMenuItem>Madd</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Reina</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>McDonald</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Fogón Salvaje</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

                {/*Contacto */}
                <DropdownMenu>
                    <DropdownMenuTrigger>Contacto</DropdownMenuTrigger>
                    <DropdownMenuContent className="text-[#ffff] bg-[#4166e0]">
                        <DropdownMenuItem>Whatsapp</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Instragram</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Facebook</DropdownMenuItem>
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