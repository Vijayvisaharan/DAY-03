
var obj1={name:"Person 1",age:5};
var obj2={age:5,name:"Person 1"};

if (obj1.length !== obj2.length){
  console.log("false")
}
else {
  // Comparing each element of your array
  for (var i = 0; i < obj1.length; i++) {
    if (obj1[i] !== obj2[i]) {
     console.log("false")
    }
  }
  console.log("true")
}



