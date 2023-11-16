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

export const Highlight_Color = styled.span`
  font-weight: 800;
  color: #345e94;
`;
export const Intro_Grid_Template = styled.div`
  display: grid;
  grid-template-columns: 2fr 1.5fr;
  gap: 40px;
  margin: 5vh 0;
`;

export const Grid_Each_Box = styled.div``;

export const Intro_Box = styled.div`
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  gap: 10px;
`;

export const My_Directional = styled.div`
  font-size: 28px;
  font-weight: 700;
  margin: 10vh 0 5vh 0;
`;

export const My_Experience = styled.div`
  font-size: 28px;
  font-weight: 700;
  margin: 0vh 0 5vh 0;
`;

export const Directional_Grid_Template = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
`;

export const Directional_Each_Title = styled.div`
  font-size: 20px;
  margin-bottom: 10px;
  display: flex;
`;

export const P_Tag = styled.p`
  line-height: 1.5;
`;

export const Deco_Stick = styled.div`
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

export const Deco_Cercle = styled.div`
  height: 12px;
  width: 12px;
  border-radius: 12px;
  background-color: #345e94;
  margin-right: 10px;
`;
