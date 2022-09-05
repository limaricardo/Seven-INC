import React from "react";
import { Link } from "react-router-dom";
import { Header, Nav, Image, DivNav } from "./styles";
import logo from "../../images/logo.png";

const Navbar = () => {
  return (
    <div>
      <Header>
        <Nav>
          <Link to="/">
            <Image src={logo} alt="Logo from Seven Company" />
          </Link>
          <DivNav className="div-nav">
            <Link to="/">Lista</Link>
            <Link to="/create">Cadastrar</Link>
          </DivNav>
        </Nav>
      </Header>
    </div>
  );
};

export default Navbar;
