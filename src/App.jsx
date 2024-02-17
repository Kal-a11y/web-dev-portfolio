import Header from './components/Header'
import Project from './components/Project'
import Footer from './components/Footer'
import projectData from './assets/projectList'
import './App.css'

export default function App() {
  const myTest = projectData;
  return (
    <div>
      <Header />
      {myTest.map(item => <Project {...item} key={myTest.indexOf(item)} />)}
      <Footer />
    </div>
  );
}
