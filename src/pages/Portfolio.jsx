import Project from '../components/Project';
import projectData from '../assets/projectList';
export default function Portfolio() {
    return (
        <div>
            <h1>Portfolio</h1>
            <div className='row g-4'>

                {projectData.map(item => <Project {...item} key={projectData.indexOf(item)} />)}
            </div>
        </div>
    )
}