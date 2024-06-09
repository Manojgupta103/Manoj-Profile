import './WorkExperience.css'
import { WORK_EXPERIENCE } from "../../Utils/data";
import ExperienceCard from "./ExperienceCard/ExperienceCard";
import { useRef } from 'react';
import Slider from 'react-slick';
import { MaterialSymbol } from 'react-material-symbols';

const WorkExperience = () => {
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
    <section className="experience-container">
        <h5>Work Experience</h5>

        <div className="experience-content">

            <div className='arrow-right' onClick={slideRight}>
            <span class="material-symbols-outlined">&raquo;</span>            
            </div>

            <div className='arrow-left' onClick={slideLeft}>
            <span class="material-symbols-outlined">&laquo;</span>
            </div>
            <Slider ref={sliderRef} {...settings}>
            {WORK_EXPERIENCE.map ((item) => (
                <ExperienceCard key={item.title} details={item}/>
            ))}
            </Slider>
        </div>

    </section>
  )
}

export default WorkExperience