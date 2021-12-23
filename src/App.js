import React from "react";
import styled from "styled-components";
import Home from "./Components/Home/Home";
import NavBar from "./Components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Left>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Skills />} />
            <Route path="/skills" element={<Projects />} />
            <Route path="/projects" element={<Contact />} />
          </Routes>
        </Left>
        <Right>
          <NavBar />
        </Right>
      </Container>
    </BrowserRouter>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  background-color: azure;
  height: 100%;
  min-height: 100vh;
`;
const Left = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #111111;
  position: absolute;
`;
const Right = styled.div`
  position: relative;
  position: fixed;
  height: 100%;
  /* background-color: green; */
  top: 130px;
  display: flex;
  left: 30px;
`;
