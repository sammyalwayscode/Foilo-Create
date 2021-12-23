import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { IoMdContact } from "react-icons/io";
import { BiNetworkChart } from "react-icons/bi";
import { MdWork } from "react-icons/md";
import { MdEmail } from "react-icons/md";

const NavBar = () => {
  return (
    <Container>
      <Wrapper>
        <Navs to="/">
          <AiFillHome />
          <span>Home</span>
        </Navs>
        <Navs to="/about">
          <IoMdContact />
          <span>About</span>
        </Navs>
        <Navs to="/skills">
          <BiNetworkChart />
          <span>Skills</span>
        </Navs>
        <Navs to="/projects">
          <span>Projects</span>
          <MdWork />
        </Navs>
        <Navs to="/contact">
          <MdEmail />
          <span>Message</span>
        </Navs>
      </Wrapper>
    </Container>
  );
};

export default NavBar;

const Container = styled.div``;
const Wrapper = styled.div``;
const Navs = styled(NavLink)`
  height: 50px;
  width: 50px;
  background-color: #2b2a2a;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  color: #fff;
  transition: all 350ms;
  margin: 20px 0;

  span {
    visibility: hidden;
    width: 100px;
    background-color: black;
    color: #fff;
    text-align: center;
    padding: 5px 0;
    border-radius: 6px;
    font-size: 17px;
    margin-left: 180px;
    position: absolute;
    z-index: 1;
  }

  span::after {
    content: " ";
    position: absolute;
    top: 50%;
    right: 100%; /* To the left of the tooltip */
    margin-top: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent black transparent transparent;
  }

  :hover {
    background-color: #ffb400;
    span {
      visibility: visible;
    }
  }

  &.active {
    background-color: #ffb400;
  }
`;

// .tooltip .tooltiptext::after {
//   content: " ";
//   position: absolute;
//   top: 50%;
//   right: 100%; /* To the left of the tooltip */
//   margin-top: -5px;
//   border-width: 5px;
//   border-style: solid;
//   border-color: transparent black transparent transparent;
// }

<div class="tooltip">
  Hover over me
  <span class="tooltiptext">Tooltip text</span>
</div>;
