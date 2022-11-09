import { atom } from "recoil";

export const menuState = atom({
  key: "menuState",
  default: true,
});

export const planetState = atom({
  key: "planetState",
  default: "earth",
});
