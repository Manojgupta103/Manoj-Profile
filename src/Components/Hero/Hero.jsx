
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
            </div>
            <div>
                <div className="tech-icon">
                <img src="./html.png" alt="html"/>
                </div>
                <div className="tech-icon">
                <img src="./css.png" alt="Css"/>
                </div>
                <div className="tech-icon">
                <img src="./java-script.png" alt="Js"/>
                </div>
                <div className="tech-icon">
                    <img src="./react.svg" alt="react" />
                </div>
                <div className="tech-icon">
                <img src="./nodejs.png" alt="Node"/>
                </div>

            </div>
        </div>

    </section>
  )
}

export default Hero