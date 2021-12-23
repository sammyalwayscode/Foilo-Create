import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <Container>
      <Wrapper>
        <TitleAbt>About Me</TitleAbt>
        <RemainDivHold>
          <PersonalInfoDiv>
            <PersonalTitle>Personal Infos</PersonalTitle>
            <PersonalMain>
              <MainOne>
                <PersonalText>
                  First Name : <span>Olorunda</span>
                </PersonalText>
                <PersonalText>
                  Last Name : <span>Samuel</span>
                </PersonalText>
                <PersonalText>
                  WorkPlace : <span>Codelab</span>
                </PersonalText>
                <PersonalText>
                  Nationality : <span>Nigeria</span>
                </PersonalText>
                <PersonalText>
                  Opportunities : <span>Available</span>
                </PersonalText>
              </MainOne>
              <MainTwo>
                <PersonalText>
                  Address : <span>Apapa, Lagos </span>
                </PersonalText>
                <PersonalText>
                  Phone : <span>+2349032676595</span>
                </PersonalText>
                <PersonalText>
                  Email : <span>olorundasamuel2@gmail.com</span>
                </PersonalText>
                <PersonalText>
                  Facebook : <span>Samuel Olorunda</span>
                </PersonalText>
                <PersonalText>
                  Languages : <span>English</span>
                </PersonalText>
              </MainTwo>
            </PersonalMain>
            <DownloadButton>Download Cv</DownloadButton>
          </PersonalInfoDiv>
          <ThingsDoneDiv>
            <DoneBox>
              <DoneNum>
                3 <sup>+</sup>
              </DoneNum>
              <DashTextHold>
                <Dash></Dash>
                <DashText>Years of experience</DashText>
              </DashTextHold>
            </DoneBox>
            <DoneBox>
              <DoneNum>
                25 <sup>+</sup>
              </DoneNum>
              <DashTextHold>
                <Dash></Dash>
                <DashText>Complected Projects</DashText>
              </DashTextHold>
            </DoneBox>
            <DoneBox>
              <DoneNum>
                20 <sup>+</sup>
              </DoneNum>
              <DashTextHold>
                <Dash></Dash>
                <DashText>Happy Customers</DashText>
              </DashTextHold>
            </DoneBox>
            <DoneBox>
              <DoneNum>
                11 <sup>+</sup>
              </DoneNum>
              <DashTextHold>
                <Dash></Dash>
                <DashText>Years of experience</DashText>
              </DashTextHold>
            </DoneBox>
          </ThingsDoneDiv>
        </RemainDivHold>
      </Wrapper>
    </Container>
  );
};

export default About;

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

const TitleAbt = styled.div``;
const RemainDivHold = styled.div``;
const PersonalInfoDiv = styled.div``;
const PersonalTitle = styled.div``;
const PersonalMain = styled.div``;
const MainOne = styled.div``;
const PersonalText = styled.div``;
const MainTwo = styled.div``;
const DownloadButton = styled.div``;
const ThingsDoneDiv = styled.div``;
const DoneBox = styled.div``;
const DoneNum = styled.div``;
const DashTextHold = styled.div``;
const Dash = styled.div``;
const DashText = styled.div``;
