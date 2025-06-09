import Navbar from "./components/Navbar"
import Fondo from "./assets/Fondo.png"
import Hero from "./components/Hero/Hero"

function App() {

  const bgImage = {
    backgroundImage: `url(${Fondo})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom",
    backgroundSize: "cover",
    position: "relative",
  }

  return (
    <div style={bgImage} className="overflow-hidden min-h-screen">
    <Navbar/>
    <Hero/>
    </div>
  )
}

export default App
