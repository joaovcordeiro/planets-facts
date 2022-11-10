import styled from "styled-components";
import InfoItem from "./InfoItem/InfoItem";

export default function Info({ rotation, revolution, radius, temperature }) {
  const infos = ["ROTATION TIME", "REVOLUTION TIME", "RADIUS", "AVERAGE TEMP."];
  const values = [rotation, revolution, radius, temperature];
  return (
    <InfoContainer>
      {infos.map((info, index) => (
        <InfoItem name={info} content={values[index]}></InfoItem>
      ))}
    </InfoContainer>
  );
}

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 28px;
  gap: 8px;
  margin-bottom: 50px;
`;
