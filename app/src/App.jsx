import { useState } from "react"
import Header from "./components/header"
import Navbar from "./components/navbar/index"


/**
 * Essse componente renderiza os principais componentes.
 * 
 * O estado OPEN é utilizando para abrir o menu para mobile e está em mais componentes, por isso decidi declara-lo no componente Pai.
 * 
 * Porem reconheço que não é uma boa prática {Prop Drilling}, mas, como é um botão simples que não oferece risco ao sistema e pela falta de tempo foi a melhor solução possivel.
 * 
 */
function App() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Header setOpen={setOpen} open={open} />
      <Navbar open={open} />
    </>
  )
}

export default App
