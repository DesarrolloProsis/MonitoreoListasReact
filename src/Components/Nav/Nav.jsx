import React from "react";
import "./Nav.css";
import Navbar from "react-bootstrap/Navbar";
class Nav extends React.Component {
  render() {
    return (
      <div>
        <Navbar expand="lg" variant="light" bg="light" className="shadow mb-3 nav">
          <Navbar.Brand href="#" className="color-blanco">PROSIS S.A DE C.V</Navbar.Brand>
        </Navbar>
      </div>
    );
  }
}
export default Nav;
