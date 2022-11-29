console.log(myFunction(["a", "b", "c"], [1, 2, 3]));
console.log(myFunction(["a", "b", "c"], [1, () => {}, { name: "khriztian" }]));
console.log(
  myFunction(
    ["name", "hobbies", "isAdmin"],
    ["khriztian", ["music", "tv series"], false]
  )
);
function myFunction(a, b) {
  const obj = {};
  a.forEach((element, index) => {
    obj[element] = b[index];
  });
  return obj;
}
