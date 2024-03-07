function RenderSubcategories({ isChild, subcategories, handleSubCategoriesMouseEnter, handleSubCategoriesMouseLeave, subSelectedIndex }) {

    return (
        
            <div className={`bg-white text-black flex flex-col gap-2 bg-red-400 pl-2 absolute w-[200px]  ${isChild ? "left-full" : "left-0"}`}>
                {subcategories.map((subcategoria, index) => (
                    <div key={index} onMouseEnter={() => handleSubCategoriesMouseEnter(index)} onMouseLeave={handleSubCategoriesMouseLeave}>
                        {subcategoria.nome}
                        {subcategoria.subcategorias && (
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