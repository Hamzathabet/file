import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import { Button, Form, Card, Nav, ListGroup, Toast } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

const App = () => {
  const [showA, setShowA] = useState(false);

  const register = (e) => {
    setShowA(!showA);
    e.preventDefault();
    
  };
  return (
    <div className="App bg-register">
      <Nav
        className="main-nav"
        activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        <Nav.Item>
          <Nav.Link href="/home">HOME</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">REGISTER</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">PROFILE</Nav.Link>
        </Nav.Item>
      </Nav>

      <Container className="p-5 mb-4 bg-light rounded-3 bg-reg">
        <Card style={{ width: "30rem" }} className=" register">
          <Card.Body>
            <Card.Title>REGISTER NOW !</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Complete the following imformations to register
            </Card.Subtitle>

            <Form>
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>FULL NAME</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">nice to meet you !</Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>EMAIL</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="pass">
                <Form.Label>PASSWORD</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="repass">
                <Form.Label>REPEAT PASSWORD</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                onClick={(e) => register(e)}
              >
                REGISTER
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
      <Toast show={showA} onClose={register}>
        <Toast.Header>
          <strong className="me-auto">YOUR ALL DONE :) </strong>
          <small>NOW</small>
        </Toast.Header>
        <Toast.Body>Woohoo,  you registed   ;) </Toast.Body>
      </Toast>

      <footer className="ftr">
        <Container className="p-3 ftr-content">
          <ListGroup>
            <ListGroup.Item disabled>CONTACT US </ListGroup.Item>
            <ListGroup.Item>FACEBOOK</ListGroup.Item>
            <ListGroup.Item>ISNTAGREAM</ListGroup.Item>
            <ListGroup.Item>TWITTER</ListGroup.Item>
          </ListGroup>
          <ListGroup>
            <ListGroup.Item disabled>ABOUT US</ListGroup.Item>
            <ListGroup.Item>
              Qui et in laboris do Lorem id velit deserunt ipsum. Elit sint
              pariatur non duis amet consequat cupidatat. Consectetur esse
              voluptate quis magna ipsum in. Aliquip non fugiat ex adipisicing
              nostrud voluptate ullamco amet quis adipisicing. Commodo sint
              irure nisi exercitation commodo incididunt sunt nostrud.
              Incididunt voluptate voluptate non nisi cillum esse cupidatat.
            </ListGroup.Item>
          </ListGroup>
        </Container>
      </footer>
    </div>
  );
};
export default App;
