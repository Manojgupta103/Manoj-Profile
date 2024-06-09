
import './App.css'
import  Hero  from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Skills from './Components/Skills/Skills';
import WorkExperience from './Components/WorkExperience/WorkExperience';

function App() {
 

  return (
    <>
     <Navbar/>
     <div className='container'>
     <Hero/>
     <Skills/>
     <WorkExperience/>
     </div>
    </>
  )
}

export default App
