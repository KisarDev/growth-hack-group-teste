import { useState } from "react"
import Header from "./components/header"
import Navbar from "./components/navbar/index"

function App() {
  //
  const [open, setOpen] = useState(false)

  return (
    <>

      <Header setOpen={setOpen} open={open} />
      <Navbar open={open} />

    </>
  )
}

export default App
