import styled from "styled-components";
import { background, border } from "../../../Styles/colors";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { planetState } from "../../../State/atom";
import setColor from "../../../utils/setColor";

export default function InfoMenu() {
  const [selected, setSelected] = useState("overview");
  const planet = useRecoilValue(planetState);

  const planetColor = setColor(planet);

  return (
    <InfoContainer>
      <InfoItem
        onClick={() => setSelected("overview")}
        color={selected === "overview" ? "#FFF" : border}
        border={selected === "overview" ? planetColor : background}
      >
        OVERVIEW
      </InfoItem>
      <InfoItem
        onClick={() => setSelected("structure")}
        color={selected === "structure" ? "#FFF" : border}
        border={selected === "structure" ? planetColor : background}
      >
        STRUCTURE
      </InfoItem>
      <InfoItem
        onClick={() => setSelected("surface")}
        color={selected === "surface" ? "#FFF" : border}
        border={selected === "surface" ? planetColor : background}
      >
        SURFACE
      </InfoItem>
    </InfoContainer>
  );
}

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 24px;
  border-bottom: 1px solid ${border};
`;

const InfoItem = styled.h3`
  font-size: 9px;
  color: ${(props) => props.color};
  margin: 0;
  padding: 10px 0;

  border-bottom: 2px solid ${(props) => props.border};
`;
