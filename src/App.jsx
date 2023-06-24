import Board from "./components/Board"
import { useContext } from "react"
import { gameContext } from "./context/GameContext"
import { Toaster } from "react-hot-toast"
import Button from "./components/Button"

function App() {

  
  
  
  return (
    <>
      <Toaster />
       <Board />
       <Button />
    </>
  )
}

export default App
