function deleteNth(arr, n) {
  for (var i = 0; i < arr.length; i++) {
    var occ = 1;
    arr.forEach((item, idx) => {
      if (item === arr[i] && i !== idx) occ++;
    });
    while (occ > n) {
      arr.splice(arr.lastIndexOf(arr[i]), 1);
      occ--;
    }
  }
  return arr;
}
