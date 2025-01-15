import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

export default function AboutUs() {
    return (
        <div id="aboutus" className="flex flex-col md:flex-row text-[#f17900ec] gap-12 p-6 w-full overflow-auto">
            <div className="flex flex-col gap-5 w-full md:w-1/2">
                <h2 className="flex justify-center text-4xl">Sobre Nosotros</h2>
                <hr className="border border-[#f17900ec]" />
                <div className="flex justify-center mt-8 items-center">
                    <Carousel>
                        <CarouselContent className="flex items-center gap-4">
                            <CarouselItem ><Image src="/Distribuidora-SSG_Logo-Blanco_2024.svg" width={600} height={300} alt="Logo"></Image></CarouselItem>
                            <CarouselItem ><Image src="/Distribuidora-SSG_Logo-Negro_2024.svg" width={600} height={300} alt="Logo"></Image></CarouselItem>
                            <CarouselItem ><Image src="/Distribuidora-SSG_Logo-Blanco_2024.svg" width={600} height={300} alt="Logo"></Image></CarouselItem>
                            <CarouselItem ><Image src="/Distribuidora-SSG_Logo-Negro_2024.svg" width={600} height={300} alt="Logo"></Image></CarouselItem>
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
            </div>
            <div className="flex flex-col pt-8 md:pt-24 gap-5 text-sm w-full md:w-1/2">
                <p>
                    En <b>SSG Distribuidora</b>, nos especializamos en ofrecer productos congelados y panificados de la más alta calidad para satisfacer las necesidades de nuestros clientes. Con años de experiencia en el sector, nos hemos consolidado como un referente en la distribución de alimentos, brindando soluciones eficientes y confiables a restaurantes, hoteles, tiendas y otros negocios del rubro gastronómico.
                </p>
                <p>
                    Nuestra misión es proporcionar productos congelados y panificados que no solo mantengan su frescura, sino que también ofrezcan un sabor auténtico y delicioso. Trabajamos con proveedores cuidadosamente seleccionados, comprometidos con los mismos altos estándares de calidad que nos definen, para garantizar que cada producto llegue a nuestros clientes en las mejores condiciones.
                </p>
                <p>
                    En SSG Distribuidora, entendemos que la calidad y el servicio son fundamentales, por lo que nos aseguramos de cumplir con los plazos de entrega, ofrecer un servicio personalizado y mantener una comunicación constante con nuestros clientes. Nuestro objetivo es que cada experiencia con nosotros sea satisfactoria, ayudando a nuestros clientes a crecer y a ofrecer lo mejor a sus consumidores.
                </p>
            </div>
        </div>
    )
}