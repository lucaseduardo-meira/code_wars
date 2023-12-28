function towerBuilder(nFloors) {
  const tower = [];
  for (var i = 0; i < nFloors; i++) {
    const floor =
      " ".repeat(nFloors - 1 - i) +
      "*".repeat(2 * i) +
      "*" +
      " ".repeat(nFloors - 1 - i);
    tower.push(floor);
  }
  return tower;
}
