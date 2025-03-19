import Image from 'next/image'
import React from 'react'

export default function Clients() {
    return (
        <div id='clients' className='text-[#4166e0]'>
            <div className="flex justify-center mt-5 mb-5 text-5xl">
                <h2>Clientes</h2>
            </div>
            <hr className="border border-[#4166e0] mx-10 sm:mx-32" />

            <div className='grid grid-cols-3 ms:grid-cols-1 gap-4 p-4 mx-20'>
                <div className="flex flex-col justify-center items-center border border-[#4166e0] w-25  h-20">
                    <h2>Reina</h2>
                    <p>Hamburgueseria</p>
                    <p>Local: Fuerte Argentino 21</p>
                </div>
                <div className="flex flex-col justify-center items-center border border-[#4166e0] w-25  h-20">
                    <h2>Fogon Salvaje</h2>
                    <p>Hamburgueseria</p>
                    <p>Local: Gorriti 71</p>
                </div>
                <div className="flex flex-col justify-center items-center border border-[#4166e0] w-25  h-20">
                    <h2>Madd</h2>
                    <p>Hamburgueseria</p>
                    <p>Local: Yrigoyen 451</p>
                </div>
                <div className="flex flex-col justify-center items-center border border-[#4166e0] w-25  h-20">
                    <h2>Tony's Burguer</h2>
                    <p>Hamburgueseria</p>
                    <p>Local: Sarmiento 200</p>
                </div>
            </div>
        </div>
    )
}
