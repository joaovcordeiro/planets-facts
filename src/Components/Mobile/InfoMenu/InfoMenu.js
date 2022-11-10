import styled from "styled-components";
import { background, border, info_menu } from "../../../Styles/colors";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { planetState } from "../../../State/atom";
import { useNavigate } from "react-router-dom";
import setColor from "../../../utils/setColor";

export default function InfoMenu() {
  const [selected, setSelected] = useState("overview");
  const planet = useRecoilValue(planetState);
  const navigate = useNavigate();
  const planetColor = setColor(planet);

  function handleClick(option) {
    setSelected(option);
    navigate(`/${option}`);
  }

  return (
    <InfoContainer>
      <InfoItem
        onClick={() => handleClick("overview")}
        color={selected === "overview" ? "#FFF" : info_menu}
        border={selected === "overview" ? planetColor : background}
      >
        OVERVIEW
      </InfoItem>
      <InfoItem
        onClick={() => handleClick("structure")}
        color={selected === "structure" ? "#FFF" : info_menu}
        border={selected === "structure" ? planetColor : background}
      >
        STRUCTURE
      </InfoItem>
      <InfoItem
        onClick={() => handleClick("surface")}
        color={selected === "surface" ? "#FFF" : info_menu}
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
  font-size: 15px;
  color: ${(props) => props.color};
  margin: 0;
  padding: 10px 0;

  border-bottom: 2px solid ${(props) => props.border};
`;
