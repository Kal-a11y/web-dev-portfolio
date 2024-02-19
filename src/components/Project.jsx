import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import { Link, useLocation } from 'react-router-dom';
import '../assets/styles/Project.css'


function Project({ title, deployLink, repoLink, image }) {
  return (
    <Card className="bg-dark text-white col-12 col-lg-4 col-md-6 project-card">
      <Card.Img src={image} alt="Card image" className='project-image'/>
      <Card.ImgOverlay>
        <Card.Title ><Link to={deployLink} className='text-decoration-none fs-2 fw-bold text-black project-title'>{title}</Link></Card.Title>
        <Button href={repoLink} className='w-50 w-md-50'>

            <Card.Img src='https://cdn-icons-png.flaticon.com/512/25/25231.png' className='w-25'/>&#32; Repository 
        </Button>
      </Card.ImgOverlay>
    </Card>
  );
}

export default Project;