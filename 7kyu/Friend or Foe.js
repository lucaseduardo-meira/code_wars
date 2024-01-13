function friend(friends) {
  return friends.filter((friend) => {
    if (friend.length === 4 && !parseInt(friend)) return friend;
  });
}
