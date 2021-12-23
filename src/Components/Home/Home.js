import React from "react";
import styled from "styled-components";

const Home = () => {
  return (
    <Container>
      <Wrapper>
        <ImageDiv> Image</ImageDiv>
        <MeDescribe> This is me</MeDescribe>
      </Wrapper>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  min-height: 100vh;
`;
const Wrapper = styled.div`
  width: 85%;
  background-color: red;
  display: flex;
  justify-content: space-between;
`;
const ImageDiv = styled.div``;
const MeDescribe = styled.div``;
