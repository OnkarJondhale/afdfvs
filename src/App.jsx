import { useState } from 'react'
import './App.css'
import Header from "./Components/Header.jsx"
import Hero from "./Components/Hero.jsx"
import About from "./Components/About.jsx"
import Events from "./Components/Events.jsx"
import Cell from "./Components/Cell.jsx"
import Team from "./Components/Team.jsx"

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
     <div className="min-h-screen w-full p-4 animate-bgChange">
      <Header />
      <Hero />
      <About />
      <Events />
      <Cell />
      <Team />
     </div>
    </>
  )
}

export default App;
