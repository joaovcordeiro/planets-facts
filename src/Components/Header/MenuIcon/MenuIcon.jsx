import { GiHamburgerMenu } from "react-icons/gi";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { menuState } from "../../../State/atom";
import { border } from "../../../Styles/colors";

export default function MenuIcon() {
  const [menu, setMenu] = useRecoilState(menuState);

  return (
    <>
      <Input type="checkbox" id="check" onChange={() => setMenu(!menu)}></Input>
      <Label htmlFor="check">
        <Icon color={menu ? border : "#FFFFFF"} />
      </Label>
    </>
  );
}

const Input = styled.input`
  display: none;
`;

const Label = styled.label`
  cursor: pointer;
`;

const Icon = styled(GiHamburgerMenu)`
  color: ${(props) => props.color};
  font-size: 28px;
`;
