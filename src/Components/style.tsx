import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 7vh 8vw;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: #e3e0f3;
`;

export const Column = styled.div``;

export const AboutMe = styled.div`
  font-size: 30px;
  font-weight: 700;
`;

export const HighlightColor = styled.span`
  font-weight: 800;
  color: #345e94;
`;
export const IntroGridTemplate = styled.div`
  display: grid;
  grid-template-columns: 2fr 1.5fr;
  gap: 40px;
  margin: 5vh 0;
`;

export const GridEachBox = styled.div``;

export const SkillBox = styled.div`
  width: 140px;
`;

export const SkillPercentageBox = styled.div`
  width: 250px;
  margin-right: 14px;
`;

export const SkillPercentageText = styled.text`
  padding-top: 2px;
  font-size: 14px;
`;

export const IntroBox = styled.div`
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  gap: 10px;
`;

export const MyDirectional = styled.div`
  font-size: 28px;
  font-weight: 700;
  margin: 10vh 0 5vh 0;
`;

export const MyExperience = styled.div`
  font-size: 28px;
  font-weight: 700;
  margin: 0vh 0 5vh 0;
`;

export const DirectionalGridTemplate = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
`;

export const DirectionalEachTitle = styled.div`
  font-size: 20px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const PTag = styled.p`
  line-height: 1.5;
`;

export const DecoStick = styled.div`
  height: 22px;
  width: 3px;
  background-color: #345e94;
  margin-right: 10px;
`;

export const RowBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const DecoCercle = styled.div`
  height: 12px;
  width: 12px;
  border-radius: 12px;
  background-color: #345e94;
  margin-right: 10px;
`;

export const DetailDongjoo = styled.div``;

export const DetailDongjooButton = styled.button`
  background-color: transparent;
  border: none;
`;

export const PopupContainer = styled.div`
  background-color: black;
  position: absolute;
  right: 3vw;
  top: 215vh;
  padding: 30px;
  width: 38vw;
  border-radius: 15px;
`;

export const PopupCloseButton = styled.button`
  background-color: #345e94;
  position: absolute;
  right: 20px;
  top: 20px;
  border-width: 0px;
  padding: 4px 12px;
  border-radius: 5px;
`;
