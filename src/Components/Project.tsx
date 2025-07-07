import styled from "styled-components";
import backImage from "../assets/images/backImage.jpg";
import toDoListImage from "../assets/images/todolist.jpg";
import nFlix from "../assets/images/nFlix.jpg";
import wetube from "../assets/images/wetube.jpg";
import spinnoff from "../assets/images/spinnoff.png";
import playground from "../assets/images/playground.jpg";

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 7vh 4vw;
  display: flex;
  flex-direction: column;
  background-color: #e3e0f3;
  color: #324b4c;
`;

const MyProject = styled.div`
  font-size: 28px;
  font-weight: 700;
`;

const HighlightColor = styled.span`
  font-weight: 800;
  color: #345e94;
`;

const GridTemplate = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 25px;
  margin-top: 5vh;
`;

const GridEachBox = styled.div`
  border: 1px solid #345e94;
  height: 25vh;
  display: flex;
`;

const Imagebox = styled.div`
  width: 60%;
  background-color: #d1bfcd;
  display: flex;
  justify-content: center;
`;

const Image = styled.div`
  width: 100%;
  height: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
    url(${backImage});
  background-size: cover;
  &#to_do_list {
    background-image: url(${toDoListImage});
    border-radius: 13px;
    width: 50%;
  }
  &#spinnoff {
    background-image: url(${spinnoff});
    background-position: center;
  }
  &#n_flix {
    background-image: url(${nFlix});
    background-position: center;
  }
  &#wetube {
    background-image: url(${wetube});
    background-position: center;
  }
  &#playground {
    background-image: url(${playground});
    background-position: center;
  }
`;

const ProjectInfoBox = styled.div`
  padding: 2vh 2vw;
  width: 60%;
  position: relative;
`;

const ProjectTitle = styled.div`
  font-weight: 800;
  text-decoration: underline;
  margin-bottom: 10px;
`;

const Span = styled.span`
  display: block;
  font-size: 14px;
  line-height: 1.6;
`;

const Buttons = styled.div`
  position: absolute;
  right: 0;
  bottom: 15px;
`;

const LinkButton = styled.div`
  margin-right: 10px;
  font-size: 16px;
  font-weight: 600;
  background-color: #345e94;
  color: white;
  padding: 5px;
  border-radius: 5px;
  box-shadow: 5px 3px 10px #345e94;
  :hover {
    background-color: #2e7e66;
    box-shadow: 5px 3px 10px #2e7e66;
  }
`;

function Project() {
  return (
    <Container>
      <MyProject>
        My <HighlightColor>Project</HighlightColor>
      </MyProject>
      <GridTemplate>
        <GridEachBox>
          <Imagebox>
            <Image id="spinnoff" />
          </Imagebox>
          <ProjectInfoBox>
            <ProjectTitle>스피노프</ProjectTitle>
            <Span>사용 언어: ReactJS, TypeScript</Span>
            <Span>
              주요 기능: 웹툰 뷰어, 게시판, 팔로잉/팔로워, 본인인증, 인앱결제 등
            </Span>
            <Span>참여도: 100%</Span>
            <Buttons>
              <LinkButton
                as="a"
                href="https://play.google.com/store/apps/details?id=com.dongjoo.spinnoff"
                target={"_blank"}
                rel={"noopener noreferrer"}
              >
                Android
              </LinkButton>
              <LinkButton
                as="a"
                href="https://apps.apple.com/pl/app/%EC%8A%A4%ED%94%BC%EB%85%B8%ED%94%84/id6444019564"
                target={"_blank"}
                rel={"noopener noreferrer"}
              >
                Ios
              </LinkButton>
            </Buttons>
          </ProjectInfoBox>
        </GridEachBox>

        <GridEachBox>
          <Imagebox>
            <Image id="n_flix" />
          </Imagebox>
          <ProjectInfoBox>
            <ProjectTitle>Netflix Clone</ProjectTitle>
            <Span>사용 언어: ReactJS, TypeScript</Span>
            <Span>
              주요 기능: 이미지 슬라이드, Open API를 이용한 데이터 출력
            </Span>
            <Span>참여도: 100%</Span>
            <Buttons>
              <LinkButton
                as="a"
                href="https://olyesung.github.io/n-flix/"
                target={"_blank"}
                rel={"noopener noreferrer"}
              >
                View
              </LinkButton>
              <LinkButton
                as="a"
                href="https://github.com/olyesung/n-flix"
                target={"_blank"}
                rel={"noopener noreferrer"}
              >
                Github
              </LinkButton>
            </Buttons>
          </ProjectInfoBox>
        </GridEachBox>

        <GridEachBox>
          <Imagebox>
            <Image id="to_do_list" />
          </Imagebox>
          <ProjectInfoBox>
            <ProjectTitle>To do list</ProjectTitle>
            <Span>사용 언어: ReactNative</Span>
            <Span>주요 기능: CRUD</Span>
            <Span>참여도: 100%</Span>
            <Buttons>
              <LinkButton
                as="a"
                href="https://github.com/olyesung/to-do-list"
                target={"_blank"}
                rel={"noopener noreferrer"}
              >
                Github
              </LinkButton>
            </Buttons>
          </ProjectInfoBox>
        </GridEachBox>

        <GridEachBox>
          <Imagebox>
            <Image id="wetube" />
          </Imagebox>
          <ProjectInfoBox>
            <ProjectTitle>Youtube Clone</ProjectTitle>
            <Span>사용 언어: NodeJS, Pug, SCSS, MongoDB</Span>
            <Span>주요 기능: 회원가입 및 로그인 구현</Span>
            <Span>참여도: 100%</Span>
            <Buttons>
              <LinkButton
                as="a"
                href="https://wetube21.herokuapp.com/"
                target={"_blank"}
                rel={"noopener noreferrer"}
              >
                View
              </LinkButton>
              <LinkButton
                as="a"
                href="https://github.com/olyesung/wetube-reloaded"
                target={"_blank"}
                rel={"noopener noreferrer"}
              >
                Github
              </LinkButton>
            </Buttons>
          </ProjectInfoBox>
        </GridEachBox>

        <GridEachBox>
          <Imagebox>
            <Image id="playground" />
          </Imagebox>
          <ProjectInfoBox>
            <ProjectTitle>Insta Clone / Backend ver.</ProjectTitle>
            <Span>사용 언어: NodeJS, Apollo, GraphQL, Prisma</Span>
            <Span>주요 기능: 백엔드 구현</Span>
            <Span>참여도: 100%</Span>
            <Buttons>
              <LinkButton
                as="a"
                href="https://instaclone-backend-ys.herokuapp.com/graphql"
                target={"_blank"}
                rel={"noopener noreferrer"}
              >
                View
              </LinkButton>
              <LinkButton
                as="a"
                href="https://github.com/olyesung/instaclon-backend"
                target={"_blank"}
                rel={"noopener noreferrer"}
              >
                Github
              </LinkButton>
            </Buttons>
          </ProjectInfoBox>
        </GridEachBox>
      </GridTemplate>
    </Container>
  );
}

export default Project;
