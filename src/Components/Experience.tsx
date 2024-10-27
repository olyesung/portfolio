import { useState } from "react";
import {
  Column,
  Container,
  Deco_Cercle,
  Deco_Stick,
  DetailDongjoo,
  DetailDongjooButton,
  Directional_Each_Title,
  Grid_Each_Box,
  Highlight_Color,
  My_Experience,
  P_Tag,
  RowBox,
  Skill_Box,
  Skill_Percentage_Box,
  Skill_Percentage_Text,
} from "./style";

function Experience() {
  const [detailDongjoo, setDetailDongjoo] = useState(false);
  const percentage = 250 / 100;
  return (
    <Container>
      <Column>
        <My_Experience>
          Work <Highlight_Color>Experience</Highlight_Color>
        </My_Experience>

        <Grid_Each_Box>
          <Directional_Each_Title>
            <Deco_Stick />
            2022.03~2023.10 동주 개발부 근무
            <DetailDongjooButton
              onClick={() => setDetailDongjoo(!detailDongjoo)}
            >
              <text style={{ fontSize: 15, opacity: 0.5 }}>자세히 보기</text>
            </DetailDongjooButton>
          </Directional_Each_Title>
          <Directional_Each_Title>
            <Deco_Stick />
            <text>2023.10~2024.10 1인 서비스 앱 개발</text>
          </Directional_Each_Title>
        </Grid_Each_Box>

        <My_Experience style={{ marginTop: 100 }}>
          <Highlight_Color>Skill</Highlight_Color>
        </My_Experience>

        <Grid_Each_Box>
          <Directional_Each_Title>
            <Skill_Box>
              <text style={{ paddingTop: 2 }}>REACT-NATIVE</text>
            </Skill_Box>
            <Skill_Percentage_Box>
              <Deco_Stick style={{ width: percentage * 98, borderRadius: 4 }} />
            </Skill_Percentage_Box>
            <Skill_Percentage_Text>98%</Skill_Percentage_Text>
          </Directional_Each_Title>
          <Directional_Each_Title>
            <Skill_Box>
              <text style={{ paddingTop: 2 }}>TYPESCRIPT</text>
            </Skill_Box>
            <Skill_Percentage_Box>
              <Deco_Stick style={{ width: percentage * 90, borderRadius: 4 }} />
            </Skill_Percentage_Box>
            <Skill_Percentage_Text>90%</Skill_Percentage_Text>
          </Directional_Each_Title>
          <Directional_Each_Title>
            <Skill_Box>
              <text style={{ paddingTop: 2 }}>JAVASCRIPT</text>
            </Skill_Box>
            <Skill_Percentage_Box>
              <Deco_Stick style={{ width: percentage * 88, borderRadius: 4 }} />
            </Skill_Percentage_Box>
            <Skill_Percentage_Text>88%</Skill_Percentage_Text>
          </Directional_Each_Title>
          <Directional_Each_Title>
            <Skill_Box>
              <text style={{ paddingTop: 2 }}>HTML/CSS</text>
            </Skill_Box>
            <Skill_Percentage_Box>
              <Deco_Stick style={{ width: percentage * 88, borderRadius: 4 }} />
            </Skill_Percentage_Box>
            <Skill_Percentage_Text>88%</Skill_Percentage_Text>
          </Directional_Each_Title>
          <Directional_Each_Title>
            <Skill_Box>
              <text style={{ paddingTop: 2 }}>REACT.JS</text>
            </Skill_Box>
            <Skill_Percentage_Box>
              <Deco_Stick style={{ width: percentage * 70, borderRadius: 4 }} />
            </Skill_Percentage_Box>
            <Skill_Percentage_Text>70%</Skill_Percentage_Text>
          </Directional_Each_Title>
          <Directional_Each_Title>
            <Skill_Box>
              <text style={{ paddingTop: 2 }}>NEXT.JS</text>
            </Skill_Box>
            <Skill_Percentage_Box>
              <Deco_Stick style={{ width: percentage * 70, borderRadius: 4 }} />
            </Skill_Percentage_Box>
            <Skill_Percentage_Text>70%</Skill_Percentage_Text>
          </Directional_Each_Title>
          <Directional_Each_Title>
            <Skill_Box>
              <text style={{ paddingTop: 2 }}>NEST.JS</text>
            </Skill_Box>
            <Skill_Percentage_Box>
              <Deco_Stick style={{ width: percentage * 70, borderRadius: 4 }} />
            </Skill_Percentage_Box>
            <Skill_Percentage_Text>70%</Skill_Percentage_Text>
          </Directional_Each_Title>
          <Directional_Each_Title>
            <Skill_Box>
              <text style={{ paddingTop: 2 }}>NODE.JS</text>
            </Skill_Box>
            <Skill_Percentage_Box>
              <Deco_Stick style={{ width: percentage * 70, borderRadius: 4 }} />
            </Skill_Percentage_Box>
            <Skill_Percentage_Text>70%</Skill_Percentage_Text>
          </Directional_Each_Title>
          <Directional_Each_Title>
            <Skill_Box>
              <text style={{ paddingTop: 2 }}>GraphQL</text>
            </Skill_Box>
            <Skill_Percentage_Box>
              <Deco_Stick style={{ width: percentage * 65, borderRadius: 4 }} />
            </Skill_Percentage_Box>
            <Skill_Percentage_Text>65%</Skill_Percentage_Text>
          </Directional_Each_Title>
          <Directional_Each_Title>
            <Skill_Box>
              <text style={{ paddingTop: 2 }}>PostgreSQL</text>
            </Skill_Box>
            <Skill_Percentage_Box>
              <Deco_Stick style={{ width: percentage * 60, borderRadius: 4 }} />
            </Skill_Percentage_Box>
            <Skill_Percentage_Text>60%</Skill_Percentage_Text>
          </Directional_Each_Title>
        </Grid_Each_Box>
        <Directional_Each_Title>
          <Skill_Box>
            <text style={{ paddingTop: 2 }}>GIT/GITHUB</text>
          </Skill_Box>
          <Skill_Percentage_Box>
            <Deco_Stick style={{ width: percentage * 50, borderRadius: 4 }} />
          </Skill_Percentage_Box>
          <Skill_Percentage_Text>50%</Skill_Percentage_Text>
        </Directional_Each_Title>
        <Directional_Each_Title>
          <Skill_Box>
            <text style={{ paddingTop: 2 }}>DOCKER</text>
          </Skill_Box>
          <Skill_Percentage_Box>
            <Deco_Stick style={{ width: percentage * 40, borderRadius: 4 }} />
          </Skill_Percentage_Box>
          <Skill_Percentage_Text>40%</Skill_Percentage_Text>
        </Directional_Each_Title>
        {detailDongjoo && (
          <DetailDongjoo>
            <RowBox style={{ marginBottom: 10 }}>
              <P_Tag>
                [ 플레이스토어, 앱스토어 '스피노프'를 검색해보세요! ]
              </P_Tag>
            </RowBox>

            <RowBox>
              <Deco_Cercle />
              <P_Tag>2022. 03 - 동주팀 초기멤버로 합류</P_Tag>
            </RowBox>

            <RowBox>
              <Deco_Cercle />
              <P_Tag>2022. 04 - '스피노프'(웹툰 플랫폼) 프로젝트 시작</P_Tag>
            </RowBox>

            <RowBox>
              <Deco_Cercle />
              <P_Tag>2022. 07 - 백엔드 개발자 합류</P_Tag>
            </RowBox>

            <RowBox>
              <Deco_Cercle />
              <P_Tag>2022. 11 - 1.0.0 & 1.0.1 출시</P_Tag>
            </RowBox>

            <RowBox>
              <Deco_Cercle />
              <P_Tag>2022. 12 - 1.0.2 & 1.0.3 업데이트</P_Tag>
            </RowBox>

            <P_Tag>- 1.0.2 업데이트 내용</P_Tag>
            <P_Tag>
              웹툰 스크롤바 기능 추가 / 웹툰 하단 바 버튼 개선 / 새로운 회차
              업로드 표시 기능 추가 / 애플 로그인 추가
            </P_Tag>
            <P_Tag>- 1.0.3 업데이트 내용</P_Tag>
            <P_Tag>
              키워드 태그 및 필터 가시성 개선 / 웹툰 감정 표현 기능 추가 / 댓글
              작성 시 감정표현 노출
            </P_Tag>

            <RowBox>
              <Deco_Cercle />
              <P_Tag>2023. 01 - 실리콘벨리 해외 연수</P_Tag>
            </RowBox>

            <RowBox>
              <Deco_Cercle />
              <P_Tag>
                2023. 03 - 1.0.4 업데이트 / 프론트엔드(웹) 개발자 합류
              </P_Tag>
            </RowBox>
            <P_Tag>- 1.0.4 업데이트 내용</P_Tag>
            <P_Tag>웹툰 썸네일 UI/UX 리워크 / 각종 알림 기능 추가</P_Tag>

            <RowBox>
              <Deco_Cercle />
              <P_Tag>2023. 04 - 1.0.5 업데이트</P_Tag>
            </RowBox>
            <P_Tag>- 1.0.5 업데이트 내용</P_Tag>
            <P_Tag>
              웹툰 클래스 테스트 추가 / 닉네임 중복 체크 개선 / 텍스트 욕설 필터
              적용 / 웹툰 뷰어 개선
            </P_Tag>

            <RowBox>
              <Deco_Cercle />
              <P_Tag>2023. 05 - 1.0.6 업데이트</P_Tag>
            </RowBox>
            <P_Tag>- 1.0.6 업데이트 내용</P_Tag>
            <P_Tag>
              댓글 UI/UX 리뉴얼 / 웹툰 스크롤바 동작 개선 / 웹툰 추천 커뮤니티
              추가
            </P_Tag>

            <RowBox>
              <Deco_Cercle />
              <P_Tag>2023. 08 - 1.1.0 업데이트</P_Tag>
            </RowBox>
            <P_Tag>- 1.1.0 업데이트 내용</P_Tag>
            <P_Tag>
              웹툰 캡쳐 방지 적용 / 인앱 결제 적용 / 작가 후원 기능 추가
            </P_Tag>

            <RowBox>
              <Deco_Cercle />
              <P_Tag>
                2023. 09 ~ 2023. 10 - 웹툰 작가 포트폴리오 웹 페이지 개발
              </P_Tag>
            </RowBox>

            <div style={{ marginTop: 20 }}>
              💬개발팀은 백엔드 개발자 1명, 프론트엔드 개발자(앱) 1명,
              프론트엔드 개발자(웹) 1명 총 3명으로 앱 개발 단독 진행하였습니다.
            </div>
          </DetailDongjoo>
        )}
      </Column>
    </Container>
  );
}

export default Experience;
