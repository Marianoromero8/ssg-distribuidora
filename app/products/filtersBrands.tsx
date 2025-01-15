'use client'
import React, { useEffect, useState, ChangeEvent } from "react"

interface FilterBrandsProps {
    products: any[];
    onFilterChange: (filtered: any[]) => void;
}

export function FilterBrands({ products, onFilterChange }: FilterBrandsProps) {
    const [brand, setBrand] = useState<string>('Todas')

    const handleFilter = (event: ChangeEvent<HTMLSelectElement>) => {
        const selectedBrand = event.target.value;
        setBrand(selectedBrand);

        if (selectedBrand === 'Todas') {
            onFilterChange(products);
        } else {
            const filtered = products.filter((product) => product.brand === selectedBrand);
            onFilterChange(filtered);
        }
    };

    const uniqueBrands = [...new Set(products.map((product) => product.brand))];


    return (
        <div className="flex justify-start m-5 p-2 ">
            <select name="" id="" onChange={handleFilter} value={brand} className="text-[#f17900ec] border border-[#f17900ec] rounded-sm hover:bg-[#f17900ec] hover:border-transparent hover:text-[#fff] transition-colors">
                <option value="Todas">Marcas</option>
                {uniqueBrands.map((b) => (
                    <option key={b} value={b}>
                        {b}
                    </option>
                ))}
            </select>
        </div>
    )
}

{/* <option value="Tonadita">Tonadita</option>
                <option value="Milkaut">Milkaut</option>
                <option value="Seda">Seda</option>
                <option value="ConoSud">ConoSud</option>
                <option value="Boogys">Boogys</option>
                <option value="La Comarca">La Comarca</option>
                <option value="Rancho Alto">Rancho Alto</option>
                <option value="Tiernis">Tiernis</option>
                <option value="GTA">Granja Tres Arroyos</option>
                <option value="Benidorm">Benidorm</option>
                <option value="McCain">McCain</option>
                <option value="Don Basilio">Don Basilio</option>
                <option value="Barraza">Barraza</option>
                <option value="NotCo">NotCo</option>
                <option value="G">G</option>
                <option value="Simplot">Simplot</option>
                <option value="S">S</option> */}