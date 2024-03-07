import data from "./dados"
export default function Categories() {
    return (
        <div className="flex flex-col bg-red-500 border">
            <h1>aaaa</h1>

            {data && data.props.categorias.map((subcategoria, index) => (
                <div className="flex flex-col text-black font-bold" key={index}>
                    <div>{subcategoria && subcategoria.nome} (
                        {subcategoria.nome}

                        )
                    </div>
                </div>
            ))}
        </div>
    )
}