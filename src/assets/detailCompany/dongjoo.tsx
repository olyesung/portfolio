import {
  Container,
  DecoCercle,
  DetailDongjoo,
  PopupCloseButton,
  PopupContainer,
  PTag,
  RowBox,
} from "../../Components/style";

function Dongjoo({ closeAction }: any) {
  return (
    <Container>
      <PopupContainer>
        <PopupCloseButton onClick={closeAction}>닫기</PopupCloseButton>
        <DetailDongjoo>
          <RowBox style={{ marginBottom: 10 }}>
            <PTag>[ 플레이스토어, 앱스토어 '스피노프'를 검색해보세요! ]</PTag>
          </RowBox>

          <RowBox>
            <DecoCercle />
            <PTag>2022. 03 - 동주팀 초기멤버로 합류</PTag>
          </RowBox>

          <RowBox>
            <DecoCercle />
            <PTag>2022. 04 - '스피노프'(웹툰 플랫폼) 프로젝트 시작</PTag>
          </RowBox>

          <RowBox>
            <DecoCercle />
            <PTag>2022. 07 - 백엔드 개발자 합류</PTag>
          </RowBox>

          <RowBox>
            <DecoCercle />
            <PTag>2022. 11 - 1.0.0 & 1.0.1 출시</PTag>
          </RowBox>

          <RowBox>
            <DecoCercle />
            <PTag>2022. 12 - 1.0.2 & 1.0.3 업데이트</PTag>
          </RowBox>

          <PTag>- 1.0.2 업데이트 내용</PTag>
          <PTag>
            웹툰 스크롤바 기능 추가 / 웹툰 하단 바 버튼 개선 / 새로운 회차
            업로드 표시 기능 추가 / 애플 로그인 추가
          </PTag>
          <PTag>- 1.0.3 업데이트 내용</PTag>
          <PTag>
            키워드 태그 및 필터 가시성 개선 / 웹툰 감정 표현 기능 추가 / 댓글
            작성 시 감정표현 노출
          </PTag>

          <RowBox>
            <DecoCercle />
            <PTag>2023. 01 - 실리콘벨리 해외 연수</PTag>
          </RowBox>

          <RowBox>
            <DecoCercle />
            <PTag>2023. 03 - 1.0.4 업데이트 / 프론트엔드(웹) 개발자 합류</PTag>
          </RowBox>
          <PTag>- 1.0.4 업데이트 내용</PTag>
          <PTag>웹툰 썸네일 UI/UX 리워크 / 각종 알림 기능 추가</PTag>

          <RowBox>
            <DecoCercle />
            <PTag>2023. 04 - 1.0.5 업데이트</PTag>
          </RowBox>
          <PTag>- 1.0.5 업데이트 내용</PTag>
          <PTag>
            웹툰 클래스 테스트 추가 / 닉네임 중복 체크 개선 / 텍스트 욕설 필터
            적용 / 웹툰 뷰어 개선
          </PTag>

          <RowBox>
            <DecoCercle />
            <PTag>2023. 05 - 1.0.6 업데이트</PTag>
          </RowBox>
          <PTag>- 1.0.6 업데이트 내용</PTag>
          <PTag>
            댓글 UI/UX 리뉴얼 / 웹툰 스크롤바 동작 개선 / 웹툰 추천 커뮤니티
            추가
          </PTag>

          <RowBox>
            <DecoCercle />
            <PTag>2023. 08 - 1.1.0 업데이트</PTag>
          </RowBox>
          <PTag>- 1.1.0 업데이트 내용</PTag>
          <PTag>
            웹툰 캡쳐 방지 적용 / 인앱 결제 적용 / 작가 후원 기능 추가
          </PTag>

          <RowBox>
            <DecoCercle />
            <PTag>
              2023. 09 ~ 2023. 10 - 웹툰 작가 포트폴리오 웹 페이지 개발
            </PTag>
          </RowBox>

          <div style={{ marginTop: 20 }}>
            💬개발팀은 백엔드 개발자 1명, 프론트엔드 개발자(앱) 1명, 프론트엔드
            개발자(웹) 1명 총 3명으로 앱 개발 단독 진행하였습니다.
          </div>
        </DetailDongjoo>
      </PopupContainer>
    </Container>
  );
}

export default Dongjoo;
