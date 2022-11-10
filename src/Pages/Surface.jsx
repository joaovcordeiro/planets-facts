import styled from "styled-components";
import { useRecoilState } from "recoil";
import { planetInfoState } from "../State/atom";
import PlanetDescription from "../Components/PlanetDescription/PlanetDescription";
import Info from "../Components/Info/Info";

export default function Surface() {
  const [planetInfo] = useRecoilState(planetInfoState);
  console.log(planetInfo);
  return (
    <>
      <Container>
        <PlanetFigure>
          <PlanetImage src={planetInfo.images.planet}></PlanetImage>
          <SurfaceFigure>
            <PlanetGeology src={planetInfo.images.geology}></PlanetGeology>
          </SurfaceFigure>
        </PlanetFigure>
        <PlanetDescription
          name={planetInfo.name}
          content={planetInfo.geology.content}
          source={planetInfo.geology.source}
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

const PlanetGeology = styled.img`
  transform: scale(0.25);
`;

const PlanetFigure = styled.div`
  position: relative;
  z-index: -1;
`;

const SurfaceFigure = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  top: 67%;
`;
