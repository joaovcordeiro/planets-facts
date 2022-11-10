import styled from "styled-components";
import { info_menu, border } from "../../../Styles/colors";

export default function InfoItem({ name, content }) {
  return (
    <InfoItemContainer>
      <InfoName>{name.toUpperCase()}</InfoName>
      <InfoContent>{content.toUpperCase()}</InfoContent>
    </InfoItemContainer>
  );
}

const InfoItemContainer = styled.div`
  display: flex;
  align-items: center;
  width: 327px;
  padding: 0 24px;
  justify-content: space-between;
  border: 1px solid ${border};
`;

const InfoName = styled.h4`
  font-size: 12px;
  color: ${info_menu};
`;

const InfoContent = styled.h2`
  font-size: 20px;
`;
