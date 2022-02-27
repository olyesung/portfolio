import { faChevronCircleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import backImage from "../assets/backImage.jpg";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  color: white;
  align-items: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
    url(${backImage});
  background-size: cover;
  flex-direction: column;
  position: relative;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 25vh;
`;

const TitleBox = styled.span`
  font-size: 100px;
  font-weight: 800;
  margin: 5px;
`;

const Icon = styled.div`
  position: absolute;
  bottom: 0;
  padding: 2vh;
`;

const Welcome = styled.p`
  padding: 4vh;
  opacity: 0.7;
`;

export default function Home() {
  return (
    <Container>
      <Column>
        <TitleBox>Front-end </TitleBox>
        <TitleBox> Developer</TitleBox>
        <Welcome>
          Hello, my name is Yesung Lee. Welcome to my personal portfolio
          website.
        </Welcome>
      </Column>
      <Icon>
        <FontAwesomeIcon icon={faChevronCircleDown} size="3x" />
      </Icon>
    </Container>
  );
}
