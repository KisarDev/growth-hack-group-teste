import { data } from "./dados";
import { useState, useEffect } from 'react'
import { RenderSubcategories } from "./renderSub";


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
    <div className="bg-red-100 flex flex-col h-screen z-0 items-center">
      <div className="flex flex-col bg-black justify-center items-center w-full">
        <div className="flex w-[1200px] justify-between gap-12 uppercase text-white font-[Montserrat] text-[16px] h-[40px]">
          {data.props.categorias.map((categoria, index) => (
            <ul className="flex flex-col cursor-pointer justify-center" key={index}>
              <li className="relative hover:bg-red-700"
                id={`categoria-${index}`}
                onMouseEnter={(e) => handleCategoryMouseEnter(index)}
                onMouseLeave={(e) => handleCategoryMouseLeave(index)}
              >
                {categoria.nome}
                {selectedIndex === index && (
                  <RenderSubcategories
                    subcategories={categoria.subcategorias}
                    handleSubCategoriesMouseEnter={handleSubCategoriesMouseEnter}
                    handleSubCategoriesMouseLeave={handleSubCategoriesMouseLeave}
                    subSelectedIndex={subSelectedIndex}
                  />
                )}
              </li>
            </ul>
          ))
          }
        </div >
      </div >
    </div>
  );
}