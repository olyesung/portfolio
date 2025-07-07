import {
  Container,
  DecoCercle,
  DetailDongjoo,
  PopupCloseButton,
  PopupContainer,
  PTag,
  RowBox,
} from "../../Components/style";

function FSsolution({ closeAction }: any) {
  return (
    <Container>
      <PopupContainer>
        <PopupCloseButton onClick={closeAction}>닫기</PopupCloseButton>
        <DetailDongjoo>
          <RowBox style={{ marginBottom: 10 }}>
            <PTag>[ 플레이스토어, 앱스토어 'Work-Plus'를 검색해보세요! ]</PTag>
          </RowBox>

          <RowBox>
            <DecoCercle />
            <PTag>2025. 06 - v1.0.0 워크플러스 앱 출시</PTag>
          </RowBox>
        </DetailDongjoo>
      </PopupContainer>
    </Container>
  );
}

export default FSsolution;
