import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        
        <Container>
            <a href='https://github.com/Kal-a11y'>
                <Image src='https://cdn-icons-png.flaticon.com/512/25/25231.png' style={{ width: '75px' }} />
            </a>
            <a href='https://www.codewars.com/users/Kal-a11y'>
                <Image src='https://camo.githubusercontent.com/dfb7129b176d0f6559d3c67365d99ad2a510d2eab5afdd28612e163344f35f79/68747470733a2f2f646f63732e636f6465776172732e636f6d2f6c6f676f2e737667' style={{ width: '75px' }}/>
            </a>
            <a href='https://www.linkedin.com/in/kaila-anderson-346b021ab/'>
                <Image src='https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png' style={{ width: '75px' }} />
            </a>
        </Container>
    )
}