/**
 * ✔ Esse componente renderiza o Header do Menu Mobile.
 * ✔ Simula uma search bar para fins de estética.
 */

export default function MobileMenuHeader() {
    return (
        <div className="flex flex-col w-full bg-red-50">
            <div className="w-[228px] flex flex-col ">
                <div className="bg-black h-[48px] text-white items-center flex justify-between text-lg font-bold ">
                    <input className="text-black placeholder:p-2 w-[65%] border-red-700 border ml-1 rounded-full rounded-r-none placeholder:text-[7pt]" type="text" placeholder="Busque por um produto ..." />
                    <p className="w-[35%] border border-red-700 text-center font-bold rounded-full rounded-l-none mr-1">Buscar</p>
                </div>
                <div className="flex flex-col bg-white">
                </div>
            </div>
        </div>
    )
}