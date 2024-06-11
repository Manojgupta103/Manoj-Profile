import './Projects.css'
import Slider from 'react-slick';
import { useRef } from 'react';
import { PROJECTS } from '../../Utils/data';
import ProjectCard from './ProjectCard/ProjectCard';

const Projects = () => {
    const sliderRef =useRef();
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        Response: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
        },
    ],
    };
    const slideRight = () => {
        sliderRef.current.slickNext();
    };

    const slideLeft = () => {
        sliderRef.current.slickPrev();
    };
  return (
    <section className="projects-container">
        <h5>Projects</h5>

        <div className='projects-content'>

        <div className='arrow-right' onClick={slideRight}>
            <span class="material-symbols-outlined">&raquo;</span>            
            </div>

            <div className='arrow-left' onClick={slideLeft}>
            <span class="material-symbols-outlined">&laquo;</span>
            </div>

            <Slider ref={sliderRef} {...settings}>
                {PROJECTS.map((item) => (
                    <ProjectCard key={item.title} details= {item}/>
                    // <div className="project-card" key={item.title}>
                    //     <img src={item.image} alt={item.title} />
                    //     <h4>{item.title}</h4>
                    //     <p>{item.description}</p>
                    // </div>
                            ))}
            </Slider>
        </div>

        </section>
  )
}

export default Projects