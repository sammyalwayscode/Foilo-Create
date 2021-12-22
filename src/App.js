import React from "react";
import styled from "styled-components";
import Home from "./Components/Home/Home";
import NavBar from "./Components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Left>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
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
  background-color: azure;
  height: 100%;
  min-height: 100vh;
`;
const Left = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: gold;
  position: absolute;
`;
const Right = styled.div`
  position: relative;
  position: fixed;
  height: 100%;
  background-color: green;
  top: 250px;
  left: 1250px;
`;
