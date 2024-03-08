
/**
 * ✔ Componente recursivo específico para o mobile.
 * 
 * ✔ Optei por fazer um separado por ser muito distinto do desktop e evitar gambiarras.
 * @param {categorias} categorias Categorias de produtos da loja.
 * @param {isChild} isChild Uma condicional para verificar se o componente que vai ser renderizado é filho ou pai, para fins de lógica e identação.
 * @return ✔ Retorna um nome de uma categoria com suas subCategorias se tiver, e retorna a si mesmo se tiver mais subCategoria filha da subCategoria pai, ou apenas o nome da categoria.
 */
export default function RecursiveCategories({ categorias, isChild }) {
    return (
        <ul className={`flex flex-col text-white font-bold font-[Montserrat] uppercase ${isChild ? "ml-4" : ""}`}>
            {categorias.map((categoria, index) => (
                <li key={index}>
                    {categoria.subcategorias && categoria.subcategorias.length > 0 ? (
                        <details className="ml-4">
                            <summary className="cursor-pointer font-bold">{categoria.nome}</summary>
                            <ul className="flex flex-col gap-4 border-l">
                                <RecursiveCategories categorias={categoria.subcategorias} isChild={true} />
                            </ul>
                        </details>
                    ) : (
                        // Se não tiver subcategoria.
                        <span>{categoria.nome}</span>
                    )}
                </li>
            ))}
        </ul>
    );
}
