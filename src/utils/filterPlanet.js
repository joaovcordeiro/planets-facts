import planets from "./../Data/data.json";

function filterPlanets(planet) {
  function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
  return planets.filter((p) => p.name === capitalize(planet))[0];
}

export default filterPlanets;
