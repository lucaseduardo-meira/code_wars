function findNextSquare(sq) {
  // Return the next square if sq is a perfect square, -1 otherwise
  sq = Math.sqrt(sq);
  if (sq !== Math.round(sq)) return -1;
  return (sq + 1) * (sq + 1);
}
