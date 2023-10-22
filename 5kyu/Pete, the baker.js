function cakes(recipe, available) {
  var bake = [];
  for (item in recipe) {
    if (available[`${item}`]) {
      bake.push(Math.floor(available[`${item}`] / recipe[`${item}`]));
    } else {
      return 0;
    }
  }
  const cake = Math.min(...bake);
  return cake;
}
