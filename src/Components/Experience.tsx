import { useState } from "react";
import {
  Column,
  Container,
  DecoCercle,
  DecoStick,
  DetailDongjoo,
  DetailDongjooButton,
  DirectionalEachTitle,
  GridEachBox,
  HighlightColor,
  MyExperience,
  PTag,
  RowBox,
  SkillBox,
  SkillPercentageBox,
  SkillPercentageText,
} from "./style";
import FSsolution from "../assets/detailCompany/FSsolution";
import Dongjoo from "../assets/detailCompany/dongjoo";

function Experience() {
  const [detailDongjoo, setDetailDongjoo] = useState(false);
  const [detailFSsolution, setDetailFSsolution] = useState(false);
  const percentage = 250 / 100;
  return (
    <Container>
      <Column>
        <MyExperience>
          Work <HighlightColor>Experience</HighlightColor>
        </MyExperience>

        <GridEachBox>
          <DirectionalEachTitle>
            <DecoStick />
            2022.03~2023.10 (주)동주 개발부 근무
            <DetailDongjooButton
              onClick={() => setDetailDongjoo(!detailDongjoo)}
            >
              <text style={{ fontSize: 15, opacity: 0.5 }}>자세히 보기</text>
            </DetailDongjooButton>
          </DirectionalEachTitle>
          <DirectionalEachTitle>
            <DecoStick />
            <text>2023.10~2024.10 1인 서비스 앱 개발</text>
          </DirectionalEachTitle>
          <DirectionalEachTitle>
            <DecoStick />
            <text>2025.02~재직중 (주) 에프에스솔루션 서비스사업팀 재직중</text>
            <DetailDongjooButton
              onClick={() => setDetailFSsolution(!detailDongjoo)}
            >
              <text style={{ fontSize: 15, opacity: 0.5 }}>자세히 보기</text>
            </DetailDongjooButton>
          </DirectionalEachTitle>
        </GridEachBox>

        <MyExperience style={{ marginTop: 100 }}>
          <HighlightColor>Skill</HighlightColor>
        </MyExperience>

        <GridEachBox>
          <DirectionalEachTitle>
            <SkillBox>
              <text style={{ paddingTop: 2 }}>REACT-NATIVE</text>
            </SkillBox>
            <SkillPercentageBox>
              <DecoStick style={{ width: percentage * 98, borderRadius: 4 }} />
            </SkillPercentageBox>
            <SkillPercentageText>98%</SkillPercentageText>
          </DirectionalEachTitle>
          <DirectionalEachTitle>
            <SkillBox>
              <text style={{ paddingTop: 2 }}>TYPESCRIPT</text>
            </SkillBox>
            <SkillPercentageBox>
              <DecoStick style={{ width: percentage * 90, borderRadius: 4 }} />
            </SkillPercentageBox>
            <SkillPercentageText>90%</SkillPercentageText>
          </DirectionalEachTitle>
          <DirectionalEachTitle>
            <SkillBox>
              <text style={{ paddingTop: 2 }}>JAVASCRIPT</text>
            </SkillBox>
            <SkillPercentageBox>
              <DecoStick style={{ width: percentage * 88, borderRadius: 4 }} />
            </SkillPercentageBox>
            <SkillPercentageText>88%</SkillPercentageText>
          </DirectionalEachTitle>
          <DirectionalEachTitle>
            <SkillBox>
              <text style={{ paddingTop: 2 }}>HTML/CSS</text>
            </SkillBox>
            <SkillPercentageBox>
              <DecoStick style={{ width: percentage * 88, borderRadius: 4 }} />
            </SkillPercentageBox>
            <SkillPercentageText>88%</SkillPercentageText>
          </DirectionalEachTitle>
          <DirectionalEachTitle>
            <SkillBox>
              <text style={{ paddingTop: 2 }}>REACT.JS</text>
            </SkillBox>
            <SkillPercentageBox>
              <DecoStick style={{ width: percentage * 70, borderRadius: 4 }} />
            </SkillPercentageBox>
            <SkillPercentageText>70%</SkillPercentageText>
          </DirectionalEachTitle>
          <DirectionalEachTitle>
            <SkillBox>
              <text style={{ paddingTop: 2 }}>NEXT.JS</text>
            </SkillBox>
            <SkillPercentageBox>
              <DecoStick style={{ width: percentage * 70, borderRadius: 4 }} />
            </SkillPercentageBox>
            <SkillPercentageText>70%</SkillPercentageText>
          </DirectionalEachTitle>
          <DirectionalEachTitle>
            <SkillBox>
              <text style={{ paddingTop: 2 }}>NEST.JS</text>
            </SkillBox>
            <SkillPercentageBox>
              <DecoStick style={{ width: percentage * 70, borderRadius: 4 }} />
            </SkillPercentageBox>
            <SkillPercentageText>70%</SkillPercentageText>
          </DirectionalEachTitle>
          <DirectionalEachTitle>
            <SkillBox>
              <text style={{ paddingTop: 2 }}>NODE.JS</text>
            </SkillBox>
            <SkillPercentageBox>
              <DecoStick style={{ width: percentage * 70, borderRadius: 4 }} />
            </SkillPercentageBox>
            <SkillPercentageText>70%</SkillPercentageText>
          </DirectionalEachTitle>
          <DirectionalEachTitle>
            <SkillBox>
              <text style={{ paddingTop: 2 }}>GraphQL</text>
            </SkillBox>
            <SkillPercentageBox>
              <DecoStick style={{ width: percentage * 65, borderRadius: 4 }} />
            </SkillPercentageBox>
            <SkillPercentageText>65%</SkillPercentageText>
          </DirectionalEachTitle>
          <DirectionalEachTitle>
            <SkillBox>
              <text style={{ paddingTop: 2 }}>PostgreSQL</text>
            </SkillBox>
            <SkillPercentageBox>
              <DecoStick style={{ width: percentage * 60, borderRadius: 4 }} />
            </SkillPercentageBox>
            <SkillPercentageText>60%</SkillPercentageText>
          </DirectionalEachTitle>
        </GridEachBox>
        <DirectionalEachTitle>
          <SkillBox>
            <text style={{ paddingTop: 2 }}>GIT/GITHUB</text>
          </SkillBox>
          <SkillPercentageBox>
            <DecoStick style={{ width: percentage * 50, borderRadius: 4 }} />
          </SkillPercentageBox>
          <SkillPercentageText>50%</SkillPercentageText>
        </DirectionalEachTitle>
        <DirectionalEachTitle>
          <SkillBox>
            <text style={{ paddingTop: 2 }}>DOCKER</text>
          </SkillBox>
          <SkillPercentageBox>
            <DecoStick style={{ width: percentage * 40, borderRadius: 4 }} />
          </SkillPercentageBox>
          <SkillPercentageText>40%</SkillPercentageText>
        </DirectionalEachTitle>

        {detailDongjoo && (
          <Dongjoo closeAction={() => setDetailDongjoo(false)} />
        )}

        {detailFSsolution && (
          <FSsolution closeAction={() => setDetailFSsolution(false)} />
        )}
      </Column>
    </Container>
  );
}

export default Experience;
