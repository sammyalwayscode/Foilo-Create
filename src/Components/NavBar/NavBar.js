import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Container>
      <Wrapper>
        <NavLink to="/">
          {" "}
          <Navs>Hommme</Navs>{" "}
        </NavLink>
        <NavLink to="/about">
          {" "}
          <Navs>About</Navs>
        </NavLink>
        <NavLink to="/contact">
          {" "}
          <Navs>Contact</Navs>
        </NavLink>
      </Wrapper>
    </Container>
  );
};

export default NavBar;

const Container = styled.div``;
const Wrapper = styled.div``;
const Navs = styled.div``;
