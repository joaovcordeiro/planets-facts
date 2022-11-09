import {
  mercury,
  venus,
  earth,
  mars,
  jupiter,
  saturn,
  uranus,
  neptune,
} from "../Styles/colors";

function setColor(planet) {
  switch (planet) {
    case "mercury":
      return mercury;
    case "venus":
      return venus;
    case "earth":
      return earth;
    case "mars":
      return mars;
    case "jupiter":
      return jupiter;
    case "saturn":
      return saturn;
    case "uranus":
      return uranus;
    case "neptune":
      return neptune;
    default:
      return earth;
  }
}

export default setColor;
