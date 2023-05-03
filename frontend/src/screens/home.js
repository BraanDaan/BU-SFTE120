import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
const HomeScreen = () => {
    return (
        <>
            <h1>Ingredient Sourcing Made Easy</h1>
            <p>Arkaidos - "A new direction"</p>
            <Container>
                <Row>
                    <Col>
                        <img src="/images/Grape_Red.png" alt='Grape Illustration' width='30%'></img>
                        <h3>1. Find what you need</h3>
                        <p>It's easy! Just use the search bar above to find and add the ingredients you need to a quote.</p>
                    </Col>
                    <Col>
                        <img src="/images/Watermelon.png" alt='Watermelon Illustration' width='47%'></img>
                        <h3>2. Sit back and relax</h3>
                        <p>We take your list of ingredients and contact the best potential suppliers based on your perameters.</p>
                    </Col>
                    <Col>
                        <img src="/images/Pineapple.png" alt='Pineapple Illustration' width='25%'></img>
                        <h3>3. Pick the best for you</h3>
                        <p>The compiled supplier data is sent to you for review. You select the supplier you want to work with and we'll connect you.</p>
                    </Col>
                    <Col>
                        <img src="/images/Grapefruit.png" alt='Grapefruit Illustration' width='45%'></img>
                        <h3>Just looking?</h3>
                        <p>Not sure where to start? Reach out to us via the contact form and we can help!</p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default HomeScreen