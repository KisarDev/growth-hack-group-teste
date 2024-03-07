import { data } from "./dados";
import { useState } from 'react'
import { RenderSubcategories } from "./renderSub";
import MobileMenu from "../mobilemenu/mobile";
import RecursiveCategories from "../mobilemenu/recursiveCategories";

export default function Navbar({ open }) {
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
    <>
      <div className="bg-gray-100 flex flex-col h-screen z-0 md:items-center max-md:justify-start max-md:hidden">
        <div className="flex bg-black justify-center items-center md:w-full">
          <div className="flex max-md:flex-col w-full max-w-[1200px] justify-between uppercase text-white font-[Montserrat] text-[16px] h-[40px]">
            {data.props.categorias.map((categoria, index) => (
              <ul className="flex flex-col cursor-pointer justify-center max-md:bg-black" key={index}>
                <li className="relative hover:bg-red-700 p-2 px-8"
                  id={`categoria-${index}`}
                  onMouseEnter={(e) => handleCategoryMouseEnter(index)}
                  onMouseLeave={(e) => handleCategoryMouseLeave(index)}
                >
                  <span className="font-bold">{categoria.nome}</span>
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

      <div className={"bg-red-700 w-[228px] md:hidden min-h-screen justify-between flex flex-col" + (open ? "" : " hidden")} id="mobile">
        <div className="flex flex-col">
          <MobileMenu />
          <RecursiveCategories categorias={data.props.categorias} isChild={false} />
        </div>
        <div className="flex flex-col bg-black text-white">
          <p>Case de teste de habilidade.</p>
          <p>Desenvolvido por:</p>
          <p className="font-bold">@Cesar Augusto.</p>
        </div>
      </div>
    </>
  );
}