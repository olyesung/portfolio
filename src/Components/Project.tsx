import styled from "styled-components";
import backImage from "../assets/backImage.jpg";
import toDoListImage from "../assets/todolist.jpg";
import nFlix from "../assets/nFlix.jpg";
import wetube from "../assets/wetube.jpg";
import spinnoff from "../assets/spinnoff.png";
import playground from "../assets/playground.jpg";

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 7vh 4vw;
  display: flex;
  flex-direction: column;
  background-color: #e3e0f3;
  color: #324b4c;
`;

const My_Project = styled.div`
  font-size: 28px;
  font-weight: 700;
`;

const Highlight_Color = styled.span`
  font-weight: 800;
  color: #345e94;
`;

const Grid_Template = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 25px;
  margin-top: 5vh;
`;

const Grid_Each_Box = styled.div`
  border: 1px solid #345e94;
  height: 25vh;
  display: flex;
`;

const Image_box = styled.div`
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

const Project_Info_Box = styled.div`
  padding: 2vh 2vw;
  width: 60%;
  position: relative;
`;

const Project_Title = styled.div`
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
      <My_Project>
        My <Highlight_Color>Project</Highlight_Color>
      </My_Project>
      <Grid_Template>
        <Grid_Each_Box>
          <Image_box>
            <Image id="spinnoff" />
          </Image_box>
          <Project_Info_Box>
            <Project_Title>스피노프</Project_Title>
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
          </Project_Info_Box>
        </Grid_Each_Box>

        <Grid_Each_Box>
          <Image_box>
            <Image id="n_flix" />
          </Image_box>
          <Project_Info_Box>
            <Project_Title>Netflix Clone</Project_Title>
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
          </Project_Info_Box>
        </Grid_Each_Box>

        <Grid_Each_Box>
          <Image_box>
            <Image id="to_do_list" />
          </Image_box>
          <Project_Info_Box>
            <Project_Title>To do list</Project_Title>
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
          </Project_Info_Box>
        </Grid_Each_Box>

        <Grid_Each_Box>
          <Image_box>
            <Image id="wetube" />
          </Image_box>
          <Project_Info_Box>
            <Project_Title>Youtube Clone</Project_Title>
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
          </Project_Info_Box>
        </Grid_Each_Box>

        <Grid_Each_Box>
          <Image_box>
            <Image id="playground" />
          </Image_box>
          <Project_Info_Box>
            <Project_Title>Insta Clone / Backend ver.</Project_Title>
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
          </Project_Info_Box>
        </Grid_Each_Box>
      </Grid_Template>
    </Container>
  );
}

export default Project;
