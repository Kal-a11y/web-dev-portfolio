import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import '../assets/styles/About.css'

export default function About() {
    return (
        <Container className='m-4'>
            <Image src='https://media.licdn.com/dms/image/D5603AQECq_SkbQzCUw/profile-displayphoto-shrink_800_800/0/1694642158732?e=1714003200&v=beta&t=HuefqxL3N5M84HWgpGeCBZYl5iPIAypbiJK162QuJ2U'/>
            <h1 className='my-4'>About Me</h1>
            <p>I am a passionate and dedicated individual with a foundation in basic web development acquired during my high school years, and I am currently expanding my skill set through a rigorous full-stack web development course offered by UC Berkeley Coding Bootcamp. This comprehensive program will equip me with a certificate and practical expertise in important front-end and backend technologies such as Html, CSS, REST APIs, Express.js, React, NoSQL databases and more.</p>

        </Container>
    )
}