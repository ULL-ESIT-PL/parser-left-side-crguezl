const {
  assign,
  functionObject,
  FunctionObject,
  Storage
} = require("@ull-esit-pl-2425/babel-plugin-left-side-support");
// Objects
let ob = functionObject({
  x: 4,
  y: 5
});
console.log(ob("x")); // 4 
console.log(ob("y")); // 5
assign(ob, ["z"], 0);
console.log(ob instanceof FunctionObject); // true
console.log(ob("z")); // 0
console.log(ob.length); // 1 Number of parameters of the function
try {
  ob("w");
} catch (e) {
  console.log(e.message);
} // Property "w" does not exist in the object