import { useSetRecoilState } from "recoil";
import { planetInfoState } from "../State/atom";

export default function useUpdatePlanetInfo(planetInfo) {
  console.log(planetInfo);
  const setPlanetInfo = useSetRecoilState(planetInfoState);
  return setPlanetInfo(planetInfo);
}
