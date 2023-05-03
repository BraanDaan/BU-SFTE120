import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Form } from 'react-bootstrap'
import products from '../products'
const ProductScreen = ({ match }) => {
    const { id } = useParams();
    const product = products.find((p) => p._id === id)
    return (
        <>
            <h3>{product.name}</h3>
            <Row>
                <Col md={6}>
                    <Image src={product.image} alt={product.name} fluid />
                </Col>
                <Col md={3}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                        </ListGroup.Item>
                    </ListGroup>
                    <Form> {['checkbox'].map((type) => (
                        <div key={`reverse-${type}`} className="mb-3">
                        <Form.Check
                            label='1'
                            name="group1"
                            type={type}
                            id={`reverse-${type}-1`}
                        />
                        <Form.Check
                            label="2"
                            name="group1"
                            type={type}
                            id={`reverse-${type}-2`}
                        />
                        </div>
                    ))}
                    </Form>
                </Col>
            </Row>
        </>
    )
}

export default ProductScreen