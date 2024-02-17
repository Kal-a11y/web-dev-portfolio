import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import { Link, useLocation } from 'react-router-dom';


function Project({ title, deployLink, repoLink, image }) {
  return (
    <Card className="bg-dark text-white">
      <Card.Img src={image} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title><a href={deployLink}>{title}</a></Card.Title>
        <Button href={repoLink}>

            <Card.Img src='https://cdn-icons-png.flaticon.com/512/25/25231.png' style={{ width: '5%' }} />
          Repository 
        </Button>
      </Card.ImgOverlay>
    </Card>
  );
}

export default Project;