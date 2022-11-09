import styled from "styled-components";
import { BiChevronRight } from "react-icons/bi";
import { Link } from "react-router-dom";
import { border } from "../../../Styles/colors";
import { useRecoilState } from "recoil";
import { menuState } from "../../../State/atom";

export default function Item({ planet, color }) {
  const [menu, setMenu] = useRecoilState(menuState);

  return (
    <ItemContainer onClick={() => setMenu(false)}>
      <ItemLink to={planet}>
        <ItemDescription>
          <ItemColor planetTheme={color}></ItemColor>
          <ItemName>{planet.toUpperCase()}</ItemName>
        </ItemDescription>
        <ItemIcon />
      </ItemLink>
      <Border />
    </ItemContainer>
  );
}

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  justify-content: space-between;
  padding: 0 32px 0 24px;
`;

const ItemColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.planetTheme};
`;

const ItemName = styled.h3`
  font-size: 15px;
  color: white;
`;

const ItemIcon = styled(BiChevronRight)`
  font-size: 20px;
  color: ${border};
`;

const ItemDescription = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
`;

const Border = styled.div`
  width: calc(100% - 48px);
  margin: 0 auto;
  height: 1px;
  background-color: ${border};
`;
