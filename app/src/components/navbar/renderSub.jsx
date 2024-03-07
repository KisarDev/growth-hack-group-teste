import { useState } from "react";

function RenderSubcategories({ isChild, subcategories, handleSubCategoriesMouseEnter, handleSubCategoriesMouseLeave, subSelectedIndex }) {
    const [hover, setHover] = useState(-1);

    return (
        
            <div className={`bg-white shadow  text-black flex flex-col gap-2 pl-2 absolute w-[200px]  ${isChild ? "left-[70%] z-10 top-[90%]" : "left-0 "} `}>
                {subcategories.map((subcategoria, index) => (
                    <div className="relative hover:text-red-700 p-2" key={index} onMouseEnter={() => setHover(index)} onMouseLeave={() => setHover(-1)}>
                        {subcategoria.nome}
                        {hover !== -1 && hover==index && subcategoria.subcategorias && (
                            <RenderSubcategories isChild
                                subcategories={subcategoria.subcategorias}
                                handleSubCategoriesMouseEnter={handleSubCategoriesMouseEnter}
                                handleSubCategoriesMouseLeave={handleSubCategoriesMouseLeave}
                                subSelectedIndex={subSelectedIndex}
                            />
                        )}
                    </div>
                ))}
            </div>
        
    );
}

export { RenderSubcategories };