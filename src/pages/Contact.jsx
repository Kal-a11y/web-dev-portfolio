import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Contact() {

    const handleBlankInput = (e) => {
        const { value, nextSibling } = e.target
        if (!value) {
            nextSibling.className = 'text-danger'
            nextSibling.textContent = '* Field required'
        }
    }
    const handleValidInput = (e) => {
        const { value, nextSibling, id } = e.target
        if (value) {
            if (id === 'contactFormEmail') {
                const regex = /^([a-z0-9A-Z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;

                if (!value.match(regex)) {
                    nextSibling.className = 'text-danger'
                    nextSibling.textContent = '* Please use valid email'
                    console.log('not email')
                }else{
                    nextSibling.className = 'text-danger visually-hidden'
                }
            }else{

                nextSibling.className = 'text-danger visually-hidden'
            }
        }
    }
    const handleEmailValidation = (e) => {
        const regex = '/\w+@w+\.[com|edu|gov]'
        const { value, nextSibling } = e.target


    }

    return (
        <Form>
            <Form.Group className="mb-3" controlId="contactFormName">
                <Form.Label>Name</Form.Label>
                <Form.Control required type="text" placeholder="Mary Sue..." onBlur={handleBlankInput} onChange={handleValidInput} />
                <p className='text-danger visually-hidden'>* Field required</p>
            </Form.Group>
            <Form.Group className="mb-3" controlId="contactFormEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control required type="email" placeholder="name@example.com..." onBlur={handleBlankInput} onChange={handleValidInput} />
                <p className='text-danger visually-hidden'>* Field required</p>
            </Form.Group>
            <Form.Group className="mb-3" controlId="contactFormMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control required as="textarea" rows={3} placeholder="We would love to hire you..." onBlur={handleBlankInput} onChange={handleValidInput} />
                <p className='text-danger visually-hidden'>* Field required</p>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}