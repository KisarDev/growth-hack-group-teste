import { data } from "./dados";
import { useState } from 'react'
import { RenderSubcategories } from "./renderSub";
import MobileMenu from "../mobilemenu/mobile";
import RecursiveCategories from "../mobilemenu/recursiveCategories";

/**
 * @function Navbar - Administra os estados para saber se o mouse está em cima de uma categoria, menu ou subMenu, tive que criar 4 funções para solucionar alguns problemas da navbar, se eu trabalhase apenas com o hover, eu iria passar o mouse em uma categoria e todas seriam abertas, isso se aplicária para submenus também.
 * 
 * A solução foi criar 4 funções, duas para categorias e duas para as subcategorias que controlam a entrada e a saída do mouse, e também o array para renderizar o menu correto de subcategorias e categorias. 
 * @param {open} open Estado para abrir e fechar o menu com um ternário.
 * @returns ✔ Retorna Uma NavBar estética, responsíva e dinâmica.
 */
export default function Navbar({ open }) {
  const [hover, setHover] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [subSelectedIndex, setSubSelectedIndex] = useState(null);

  /**
   * Verifica se o mouse entrou em algum menu apenas de categorias e muda o estado hover para true.
   * @param {index} index Posição atual do array.
   */
  function handleCategoryMouseEnter(index) {
    setHover(true);
    setSelectedIndex(index);
    setSubSelectedIndex(null);
  }

  /**
   * Verifica se o mouse saiu de algum menu apenas de categorias e muda o estado hover para false.
   * Seta as outras funções para null para fechar todos os menus caso ele saia da categoria pai.
   */
  function handleCategoryMouseLeave() {
    setHover(false);
    setSelectedIndex(null);
    setSubSelectedIndex(null);
  }

  /**
   * Verifica se o mouse entrou em algum menu apenas de subCategorias para abrir o menu específico do index.
   */
  function handleSubCategoriesMouseEnter(index) {
    setSubSelectedIndex(index);
  }

  /**
   * Verifica se o mouse saiu de algum menu apenas de subCategorias e fecha o menu apenas daquele que está aberto setando o valor dele para null.
   */
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
      {/* Aplica uma transição leve e ativa ou desativa o menu mobile*/}
      <div className={"bg-red-700 w-[228px] md:hidden min-h-screen justify-between flex flex-col transition-opacity " + (open ? "" : " hidden ")} id="mobile">
        <div className="flex flex-col transition-opacity">
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