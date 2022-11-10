import styled from "styled-components";
import { useRecoilState } from "recoil";
import { planetInfoState } from "../State/atom";
import PlanetDescription from "../Components/PlanetDescription/PlanetDescription";

export default function Overview() {
  const [planetInfo] = useRecoilState(planetInfoState);
  return (
    <>
      <Container>
        <PlanetImage src={planetInfo.images.planet}></PlanetImage>
        <PlanetDescription
          name={planetInfo.name}
          content={planetInfo.overview.content}
          source={planetInfo.overview.source}
        />
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PlanetImage = styled.img`
  transform: scale(0.45);
  z-index: -1;
`;
