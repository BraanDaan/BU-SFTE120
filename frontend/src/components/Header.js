import React from 'react'
import { Nav, Navbar, NavDropdown, Container, Form, Button } from 'react-bootstrap'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse'
import { LinkContainer } from 'react-router-bootstrap'
const Header = () => {
    return (
        <header>
            <Navbar bg="Header" variant='light'>
                <Container fluid>
                    <LinkContainer to='/'>
                        <Navbar.Brand><img src='/images/logo.png' width='157'></img></Navbar.Brand>
                    </LinkContainer>


                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                            Separated link
                        </NavDropdown.Item>
                    </NavDropdown>

                    <Navbar.Toggle/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav>
                            <Form className="d-flex">
                                <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                                />
                                <Button variant="outline-success">Search</Button>
                            </Form>
                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Toggle/>
                    <Navbar.Collapse>
                        <Nav className="ml-auto">
                            <LinkContainer to='/quote'>
                                <Nav.Link>Quote</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/login'>
                                <Nav.Link>Sign In</Nav.Link>
                            </LinkContainer>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <br/>
        </header>
    )
}

export default Header