import Header from './components/Header'
import Project from './components/Project'
import projectData from './assets/projectList'
import './App.css'

export default function App() {
  const myTest = projectData;
  return (
    <body>
      <Header />
      {myTest.map(item => <Project {...item} key={myTest.indexOf(item)} />)}
    </body>
  );
}
