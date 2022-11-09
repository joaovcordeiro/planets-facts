import styled from "styled-components";
import { border } from "../../Styles/colors";
import MenuIcon from "./MenuIcon/MenuIcon";

export default function Header() {
  return (
    <HeaderContainer>
      <H2>THE PLANETS</H2>
      <MenuIcon />
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  border-bottom: 1px solid ${border};
`;

const H2 = styled.h2`
  color: white;
  font-size: 28px;
`;
