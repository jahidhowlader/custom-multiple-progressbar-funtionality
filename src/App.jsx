import { Progress } from "@chakra-ui/react"
import Progressbar from "./components/Progressbar"

function App() {

  return (
    <>
      <Progressbar milestones={[10, 20, 30, 50, 50000]}/>
    </>
  )
}

export default App
