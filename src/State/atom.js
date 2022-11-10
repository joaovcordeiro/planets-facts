import { atom } from "recoil";
import filterPlanets from "../utils/filterPlanet";

const earthInfo = filterPlanets("earth");

export const menuState = atom({
  key: "menuState",
  default: true,
});

export const infoMenu = atom({
  key: "infoMenu",
  default: "overview",
});

export const planetState = atom({
  key: "planetState",
  default: "earth",
});

export const planetInfoState = atom({
  key: "planetInfoState",
  default: { ...earthInfo },
});
