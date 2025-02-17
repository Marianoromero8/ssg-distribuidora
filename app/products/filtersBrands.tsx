'use client'
import React, { useState, ChangeEvent } from "react"

interface Product {
    id: string | number;
    image: string;
    productName: string;
    presentation: string;
}

interface Brand {
    id: number;
    src: string;
    height: number;
    width: number;
    brand: string;
    products: Product[];
}

interface FilterBrandsProps {
    brands: Brand[];
    onFilterChange: (filtered: Product[]) => void;
}

export function FilterBrands({ brands = [], onFilterChange }: FilterBrandsProps) {
    const [brand, setBrand] = useState<string>('Todas')

    const handleFilter = (event: ChangeEvent<HTMLSelectElement>) => {
        const selectedBrand = event.target.value;
        setBrand(selectedBrand);

        if (selectedBrand === 'Todas') {
            const allProducts = brands.flatMap((brand) => brand.products);
            onFilterChange(allProducts);
        } else {
            const filtered = brands
                .find((brand) => brand.brand === selectedBrand)?.products || []
            onFilterChange(filtered);
        }
    };

    const uniqueBrands = ['Todas', ...new Set(brands.map((brand) => brand.brand))];


    return (
        <div className="flex justify-start m-5 p-2 ">
            <select name="" id="" onChange={handleFilter} value={brand} className="text-[#4166e0] border border-[#4166e0] rounded-sm hover:bg-[#4166e0] hover:border-transparent hover:text-[#fff] transition-colors">
                {uniqueBrands.map((b) => (
                    <option key={b} value={b}>
                        {b}
                    </option>
                ))}
            </select>
        </div>
    )
}