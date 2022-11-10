import styled from "styled-components";
import { info_menu } from "../../Styles/colors";
import { BsArrowUpRightSquareFill } from "react-icons/bs";

export default function PlanetDescription({ name, content, source }) {
  return (
    <DescriptionContainer>
      <PlanetName>{name.toUpperCase()}</PlanetName>
      <PlanetText>{content}</PlanetText>
      <PlanetSource>
        Source:{" "}
        <Source href={source}>
          Wikipedia <SourceIcon />
        </Source>
      </PlanetSource>
    </DescriptionContainer>
  );
}

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PlanetName = styled.h2`
  margin-bottom: 16px;
`;

const PlanetText = styled.p`
  max-width: 327px;
  padding: 0 12px;
  text-align: center;
  margin-bottom: 32px;
`;

const PlanetSource = styled.p`
  color: ${info_menu};
`;

const Source = styled.a`
  color: ${info_menu};
  font-weight: bold;
`;

const SourceIcon = styled(BsArrowUpRightSquareFill)``;
