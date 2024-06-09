
import "./Hero.css"
const Hero = () => {
  return (
    <section className="hero-container">
        <div className="hero-content">
            <h1>Hi, I'm Manoj Gupta</h1>
            <h3>Full Stack Developer</h3>
            <p>Passionate Frontend Developer | Transforming Ideas into Seamless and Visually Stunning Web Solutions</p>
        </div>
        <div className="hero-img">
            <div>
                <img src="./hero.png" alt="html"/>
                <img src="src\assets\images\hero.png" alt="hero"/>
            </div>
            <div>
                <div className="tech-icon">
                    <img src="src\assets\images\react.svg" alt="react" />
                </div>
                <div className="tech-icon">
                <img src="src\assets\images\html.png" alt="html"/>
                </div>
                <div className="tech-icon">
                <img src="src\assets\images\css.png" alt="html"/>
                </div>
                <div className="tech-icon">
                <img src="src\assets\images\java-script.png" alt="html"/>
                </div>

            </div>
        </div>

    </section>
  )
}

export default Hero