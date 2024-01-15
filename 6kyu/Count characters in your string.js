function count(string) {
  const list = {}
  
  string.split("").forEach((letter)=>{
    if (!list[`${letter}`]) list[`${letter}`] = 1
    else {
      list[`${letter}`] ++
    }
  }) 
  return list;
}