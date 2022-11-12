import styled from "styled-components";
import { Link } from "react-router-dom";
import { background } from "../../Styles/colors";
import { useRecoilState } from "recoil";
import { menuState } from "../../State/atom";
import Item from "./Itens/Itens";
import {
  mercury,
  venus,
  earth,
  mars,
  jupiter,
  saturn,
  uranus,
  neptune,
} from "../../Styles/colors";

export default function SideMenu() {
  const [menu, setMenu] = useRecoilState(menuState);

  return (
    <Barra position={menu ? "0" : "-100%"}>
      <Navigation>
        <Item planet="mercury" color={mercury} />
        <Item planet="venus" color={venus} />
        <Item planet="earth" color={earth} />
        <Item planet="mars" color={mars} />
        <Item planet="jupiter" color={jupiter} />
        <Item planet="saturn" color={saturn} />
        <Item planet="uranus" color={uranus} />
        <Item planet="neptune" color={neptune} />
      </Navigation>
    </Barra>
  );
}

const Barra = styled.div`
  background-color: ${background};
  position: absolute;
  height: 100vh;
  width: 100%;
  left: ${(props) => props.position};
  transition: 0.2s linear;
  padding-top: 44px;
`;

const Navigation = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
