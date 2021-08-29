import React from 'react';
import {
  Button,
  Container,
  FormControl,
  InputGroup,
  Nav,
  Navbar,
} from 'react-bootstrap';
import { FiPhoneCall, FiShoppingBag } from 'react-icons/fi';
import { BiEnvelope, BiUser } from 'react-icons/bi';
import { BsPhone } from 'react-icons/bs';
import { BsSearch } from 'react-icons/bs';
import logo from 'assets/images/fvaley.png';

const Header = () => {
  return (
    <div className="header_component">
      <div className="top-header py-2 bg-light border-bottom ">
        <Container className="d-flex align-items-center justify-content-between">
          <ul className="list-unstyled d-flex align-items-center gap-4">
            <li>
              <a href="tel:09638111666">
                <FiPhoneCall />
              </a>
              <a href="tel:09638111666">09638111666</a>
            </li>
            <li>
              <a href="mail-to:support@fvalley">
                {' '}
                <BiEnvelope />
              </a>
              <a href="mail-to:support@fvalley">support@fvalley</a>
            </li>
          </ul>
          <div>
            <a href="https://play.google.com/store/apps/details?id=bd.com.evaly.fvalyshop">
              <BsPhone />
            </a>

            <a href="https://play.google.com/store/apps/details?id=bd.com.evaly.fvalyshop">
              save big on our app!
            </a>
          </div>
        </Container>
      </div>
      <div className="middle-header">
        <Container>
          <div className="d-flex align-items-center gap-5 py-2">
            <img className="branding" src={logo} alt="" />

            <InputGroup>
              <FormControl
                className="border border-primary"
                placeholder="Recipient's username"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <Button variant="primary" id="button-addon2">
                <BsSearch className="text-white" />
              </Button>
            </InputGroup>

            <ul className="icon-list list-unstyled d-flex gap-3 ">
              <li>
                {' '}
                <a href="">
                  <FiShoppingBag />
                </a>{' '}
              </li>
              <li>
                <BiUser />
              </li>
              <li>
                <FiShoppingBag />
              </li>
            </ul>
          </div>
        </Container>
      </div>

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Categories</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="#home">News Feed</Nav.Link>
            <Nav.Link href="#features">Merchant Zone</Nav.Link>
            <Nav.Link href="#pricing">Help</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
