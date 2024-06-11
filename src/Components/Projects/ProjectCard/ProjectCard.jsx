import './ProjectCard.css'
const ProjectCard = ({details}) => {
  return (
    <div className="projects-card">
      <h5>{details.title}</h5>

      <div className='projects-technology'>{details.technologies}</div>
      
      <div className='projects-description'>
      <ul>
      {details.description}
      </ul>
      <br></br>
      </div>

      <div className='projects-responsiblities'>
      <ul>
        {details.responsibilities.map((item) => (
            <li key={item}>{item}</li>
        ))}
        </ul>
        </div>
    </div>
  )
}


export default ProjectCard