import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
    return (
        <footer>
            <hr/>
            <Container>
                <Row>
                    <Col>Contact Us</Col>
                    <Col>Privacy Policy</Col>
                    <Col>Disclaimer</Col>
                    <Col>Terms of Service</Col>
                </Row>
                <Row>
                    <Col className='text-left py-3'>
                        &copy; Arkaios Fresh 2023. All rights reserved.
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer