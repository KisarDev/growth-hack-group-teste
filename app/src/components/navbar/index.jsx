import { data } from "./dados";
import { useState, useEffect } from 'react'

export default function Navbar() {
    const [hover, setHover] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [subSelectedIndex, setSubSelectedIndex] = useState(null);

    function handleCategoryMouseEnter(index) {
        setHover(true);
        setSelectedIndex(index);
        setSubSelectedIndex(null);
    }

    function handleCategoryMouseLeave(index) {
        setHover(false);
        setSelectedIndex(null);
        setSubSelectedIndex(null);
    }

    function handleSubCategoriesMouseEnter(index) {
        setSubSelectedIndex(index);
    }

    function handleSubCategoriesMouseLeave() {
        setSubSelectedIndex(null);
    }

    return (
        <div className="flex flex-col bg-black justify-center items-center">
            <div className="flex w-[1200px] justify-between gap-12 uppercase text-white font-[Montserrat] text-[16px]">
                {data.props.categorias.map((categoria, index) => (
                    <ul key={index}>
                        <li className="hover:bg-red-600"
                            id={`categoria-${index}`}
                            onMouseEnter={(e) => handleCategoryMouseEnter(index)}
                            onMouseLeave={(e) => handleCategoryMouseLeave(index)}
                        >
                            {categoria.nome}
                            {selectedIndex === index && (
                                <ul className="absolute bg-white text-black border border-gray-300 rounded shadow-md"
                                    onMouseEnter={(e) => handleSubCategoriesMouseEnter(null)}
                                    onMouseLeave={handleSubCategoriesMouseLeave}
                                >
                                    <div className="flex flex-col border">
                                        {categoria.subcategorias.map((subcategoria, subIndex) => (
                                            subcategoria && (
                                                <ul className="border" key={subIndex}>
                                                    <li>
                                                        {subcategoria.nome}
                                                    </li>
                                                    {subcategoria.subcategorias.map((subDaSub, index) => (
                                                        subDaSub && (
                                                            <li key={index}>
                                                                {subDaSub.nome}
                                                            </li>
                                                        )
                                                    ))}

                                                </ul>
                                            )
                                        ))}
                                    </div>
                                </ul>
                            )}
                        </li>
                    </ul>
                ))
                }
            </div >
        </div >
    );
}