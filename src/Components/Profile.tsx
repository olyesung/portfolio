import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 7vh 8vw;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: #e3e0f3;
`;

const Column = styled.div``;

const AboutMe = styled.div`
  font-size: 30px;
  font-weight: 700;
`;

const Highlight_Color = styled.span`
  font-weight: 800;
  color: #345e94;
`;
const Intro_Grid_Template = styled.div`
  display: grid;
  grid-template-columns: 2fr 1.5fr;
  gap: 40px;
  margin: 5vh 0;
`;

const Grid_Each_Box = styled.div``;

const Intro_Box = styled.div`
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  gap: 10px;
`;

const My_Directional = styled.div`
  font-size: 28px;
  font-weight: 700;
  margin: 10vh 0 5vh 0;
`;

const Directional_Grid_Template = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
`;

const Directional_Each_Title = styled.div`
  font-size: 20px;
  margin-bottom: 10px;
  display: flex;
`;

const P_Tag = styled.p`
  line-height: 1.5;
`;

const Deco_Stick = styled.div`
  height: 22px;
  width: 3px;
  background-color: #345e94;
  margin-right: 10px;
`;

function Profile() {
  return (
    <Container>
      <Column>
        <AboutMe>
          About <Highlight_Color>Me</Highlight_Color>
        </AboutMe>
        <Intro_Grid_Template>
          <Grid_Each_Box>
            <P_Tag>
              안녕하세요, 코딩하는 것이 즐겁고 배울 때 살아있음을 느끼는 행복한
              개발자입니다. <br></br>
              지금보다 더 나은 결과를 가져올 수 있도록 다양한 것들을 많이 접하고
              있으며,
              <br></br>
              매일 조금씩이라도 꾸준히 발전하는 제 자신을 만들어서 획기적인
              개발자가 되기 <br></br>위해 노력하고 있습니다.
            </P_Tag>
          </Grid_Each_Box>
          <Grid_Each_Box>
            <Intro_Box>
              <div>
                <Highlight_Color>Name</Highlight_Color> 이예성 (Yeseong, Lee)
              </div>
              <div>
                <Highlight_Color>Age</Highlight_Color> 30
              </div>
              <div>
                <Highlight_Color>Address</Highlight_Color> Gangdonggu, Seoul
              </div>
              <div>
                <Highlight_Color>E-mail</Highlight_Color> olyesung@gmail.com
              </div>
              <div>
                <Highlight_Color>Phone</Highlight_Color> +82 10 7591 7015
              </div>
            </Intro_Box>
          </Grid_Each_Box>
        </Intro_Grid_Template>
      </Column>

      <Column>
        <My_Directional>
          My <Highlight_Color>Directional</Highlight_Color>
        </My_Directional>
        <Directional_Grid_Template>
          <Grid_Each_Box>
            <Directional_Each_Title>
              <Deco_Stick />
              Frontend
            </Directional_Each_Title>
            <P_Tag>
              저는 주로 React를 사용하여 프론트엔드 개발을 하고 있습니다.
              프론트엔드 개발자로써, 백엔드에 대한 이해가 필요하다고 생각하여
              GraphQL, NestJS, Apollo, Jest, PostgreSQL, Prisma를 조금씩
              공부하였고, 현재는 TypeScript를 공부하고 있습니다.
            </P_Tag>
          </Grid_Each_Box>
          <Grid_Each_Box>
            <Directional_Each_Title>
              <Deco_Stick />
              Optimization
            </Directional_Each_Title>
            <P_Tag>
              사소한 기능 하나를 작성하더라도 최대한 효율적인 코드를 작성하려고
              노력합니다. 보기도 좋고 이해하기 쉬운 코드를 작성하기 위해 늘
              고민합니다. 개인적으로 낭비 되는 리소스를 최대한 지양하려고
              합니다.
            </P_Tag>
          </Grid_Each_Box>
          <Grid_Each_Box>
            <Directional_Each_Title>
              <Deco_Stick />
              Communication
            </Directional_Each_Title>
            <P_Tag>
              시야를 넓혀 다양한 관점을 수용할 수 있는 안목을 기르고 있습니다.
              특정 문제를 해결하기 위해서 혼자만의 돌파구를 찾기 보다는 주변
              사람들과 함께 소통하며, 여기서 얻는 시너지를 통하여 공통 목표에
              도달하려고 노력하고 있습니다.
            </P_Tag>
          </Grid_Each_Box>
          <Grid_Each_Box>
            <Directional_Each_Title>
              <Deco_Stick />
              Acceptable
            </Directional_Each_Title>
            <P_Tag>
              새로운 것을 접하고 배우는 것에 두려움이 없습니다. 반대로, 제가
              아는 지식을 다른 사람에 공유하는 것도 좋아합니다. 그리고 단순하게
              지식만을 공유하는 것 뿐만 아니라 특정 문제를 해결하기 위해 같이
              고민하는 것을 더욱 좋아합니다.
            </P_Tag>
          </Grid_Each_Box>
        </Directional_Grid_Template>
      </Column>
    </Container>
  );
}

export default Profile;
