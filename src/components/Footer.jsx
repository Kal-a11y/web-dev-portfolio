import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
import '../assets/styles/Footer.css'

export default function Footer() {
    return (
        
        <Container className='mt-4 p-13 text-center'>
            <Link to='https://github.com/Kal-a11y' className='p-2'>
                <Image src='https://cdn-icons-png.flaticon.com/512/25/25231.png' style={{ width: '75px' }} />
            </Link>
            <Link to='https://www.codewars.com/users/Kal-a11y'  className='p-2'>
                <Image src='https://camo.githubusercontent.com/dfb7129b176d0f6559d3c67365d99ad2a510d2eab5afdd28612e163344f35f79/68747470733a2f2f646f63732e636f6465776172732e636f6d2f6c6f676f2e737667' style={{ width: '75px' }}/>
            </Link>
            <Link to='https://www.linkedin.com/in/kaila-anderson-346b021ab/'  className='p-2'>
                <Image src='https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png' style={{ width: '75px' }} />
            </Link>
        </Container>
    )
}