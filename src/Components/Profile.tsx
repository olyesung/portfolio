import {
  AboutMe,
  Column,
  Container,
  Deco_Stick,
  Directional_Each_Title,
  Directional_Grid_Template,
  Grid_Each_Box,
  Highlight_Color,
  Intro_Box,
  Intro_Grid_Template,
  My_Directional,
  P_Tag,
} from "./style";

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
              안녕하십니까. 코딩하는 것이 매우 즐겁고, 배울 때 살아있음을
              느끼며, 풀리지 않던 것을 해결할 때 희열을 느끼는 개발 경력 2년
              차가 되어가는 주니어 개발자입니다.
              <br></br>
              지금보다 더 나은 코드를 작성할 수 있도록 다양한 것들을 접하며,
              배우고 있습니다.
              <br></br>
              매일 조금씩이라도 꾸준히 성장하여 실력있는 개발자가 되기 위해 늘
              노력하고 있습니다.
            </P_Tag>
          </Grid_Each_Box>
          <Grid_Each_Box>
            <Intro_Box>
              <div>
                <Highlight_Color>Name</Highlight_Color> 이예성 (Yeseong, Lee)
              </div>
              <div>
                <Highlight_Color>Age</Highlight_Color> 32
              </div>
              <div>
                <Highlight_Color>Address</Highlight_Color> Gangdonggu, Seoul
              </div>
              <div>
                <Highlight_Color>E-mail</Highlight_Color> olyesung@gmail.com
              </div>
              <div>
                <Highlight_Color>Phone</Highlight_Color> +82 10 7725 9641
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
              저는 주로 React Native를 사용하여 프론트엔드 앱 개발을 하고
              있습니다. 프론트엔드 개발자로써, 백엔드에 대한 이해가 필요하다고
              생각하여 GraphQL, NestJS, Apollo, Jest, PostgreSQL, Prisma를
              조금씩 공부하였고, 현재는 TypeScript를 공부하고 있습니다.
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
