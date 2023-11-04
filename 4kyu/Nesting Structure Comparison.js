Array.prototype.sameStructureAs = function (other) {
  if (!Array.isArray(other)) return false;

  var response = true;

  function checkArray(array, other) {
    if (array.length !== other.length) response = false;
    console.log(array, other);
    var i = 0;
    array.forEach((item) => {
      if (typeof item === "object" && typeof (other[i] === "object"))
        checkArray(item, other[i]);
      if (typeof other[i] === "object" && typeof item !== "object")
        response = false;
      i++;
    });
  }

  checkArray(this, other);
  return response;
};
