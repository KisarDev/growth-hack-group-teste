function RenderSubcategories({ subcategories, handleSubCategoriesMouseEnter, handleSubCategoriesMouseLeave, subSelectedIndex }) {
    return (
        <ul className="bg-white text-black flex flex-col gap-2">
            {subcategories.map((subcategoria, index) => (
                <li key={index} onMouseEnter={() => handleSubCategoriesMouseEnter(index)} onMouseLeave={handleSubCategoriesMouseLeave}>
                    {subcategoria.nome}
                    {subcategoria.subcategorias && (
                        <RenderSubcategories
                            subcategories={subcategoria.subcategorias}
                            handleSubCategoriesMouseEnter={handleSubCategoriesMouseEnter}
                            handleSubCategoriesMouseLeave={handleSubCategoriesMouseLeave}
                            subSelectedIndex={subSelectedIndex}
                        />
                    )}
                </li>
            ))}
        </ul>
    );
}

export { RenderSubcategories };