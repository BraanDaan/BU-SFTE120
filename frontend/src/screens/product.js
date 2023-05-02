import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { Row, Col, Image, ListGroup } from 'react-bootstrap'
import products from '../products'
const ProductPage = ({ match }) => {
    const { id } = useParams();
    const product = products.find((p) => p._id === id)
    return (
        <>
            <Row>
                <Col>
                    <Image src={product.image} alt={product.name} fluid />
                </Col>
                <Col>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h3>{product.name}</h3>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
        </>
    )
}

export default ProductPage