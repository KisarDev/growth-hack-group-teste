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
