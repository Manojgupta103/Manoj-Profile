
import './App.css'
import  Hero  from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Skills from './Components/Skills/Skills';

function App() {
 

  return (
    <>
     <Navbar/>
     <div className='container'>
     <Hero/>
     <Skills/>
     </div>
    </>
  )
}

export default App
