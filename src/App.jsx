import Project from './components/Project'
import projectData from './assets/projectList'

export default function App() {
  const myTest = projectData;

  return (
      <div>
        {myTest.map(item => <Project {...item} key={myTest.indexOf(item)}/>)}
        
      </div>
    
  )
}
