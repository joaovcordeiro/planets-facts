import styled from "styled-components";
import { useRecoilState } from "recoil";
import { planetInfoState } from "../State/atom";
import PlanetDescription from "../Components/PlanetDescription/PlanetDescription";
import Info from "../Components/Info/Info";

export default function Overview() {
  const [planetInfo] = useRecoilState(planetInfoState);
  console.log(planetInfo);
  return (
    <>
      <Container>
        <PlanetImage src={planetInfo.images.planet}></PlanetImage>
        <PlanetDescription
          name={planetInfo.name}
          content={planetInfo.overview.content}
          source={planetInfo.overview.source}
        />
        <Info
          rotation={planetInfo.rotation}
          revolution={planetInfo.revolution}
          radius={planetInfo.radius}
          temperature={planetInfo.temperature}
        ></Info>
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
