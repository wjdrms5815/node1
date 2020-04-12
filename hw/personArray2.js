let person = [];
for(let i=0; i<10; i++){
    person[i] = {name: "홍길동", age: 16 + i};}
let person2 = Object.assign({ }, person);
console.log(person2);