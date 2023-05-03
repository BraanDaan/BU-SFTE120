import React, { useState, useEffect } from 'react'
import products from '../products'
import Product from '../components/product'
import { Row, Col } from 'react-bootstrap'
import axios from 'axios'
const ConcentratesSorted = () => {

    return (
        <>
            <h1>Products sorted by Concentrates</h1>

            <Row>
                {products.map((product) => (
                    <Col sm={10} md={6} lg={3} xl={2}>

                        <Product product={product} />
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default ConcentratesSorted