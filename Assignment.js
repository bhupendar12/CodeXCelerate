// Code of Calculation with Arrow function
const sum = (a,b) => {
    return a+b;
}
const sub = (a,b) => {
    return a-b;
}
const mul = (a,b) => {
    return a*b;
}
const div = (a,b) => {
    return a/b;
}
let a = 10; // variable declaration
let b = 5;
console.log(`The sum of ${a} and ${b} is: ${sum(a,b)}`); // function call
console.log(`The difference of ${a} and ${b} is: ${sub(a,b)}`);
console.log(`The product of ${a} and ${b} is: ${mul(a,b)}`);
console.log(`The quotient of ${a} and ${b} is: ${div(a,b)}`);



// Loops
// 1. For Loops
let number =0;
for(let i=1; i<=8; i++){
    number +=i;
}
console.log(`The sum of first 8 natural numbers is: ${number}`);


// 2. While Loop
let i = 1;
while(i<=8){
    console.log(i);
    i++;
} 


// Arrays
let names = ["Bhupendra", "Harsh", "Deepika"];
for(let idx=0; idx<names.length; idx++){
    console.log(names[idx]);
};
console.log("Original Array: ", names);
names.push("Aman");
names.push("Lovelesh");
console.log("Array after push operation: ", names);



// Objects
const student = {
    fullname : "Bhupendra",
    marks: 99.99,
    city: "Mathura"
};
console.log("Name: ", student.fullname);
console.log("Marks: ", student.marks);
console.log("City: ", student.city);





// Code of Callbackhell 
function getData(dataId, getNextData){
    setTimeout(()=>{
        console.log("data", dataId);
        if(getNextData){
            getNextData();
        };
    },2000);
};
getData(1, ()=>{
    console.log("getting data2...");
    getData(2, ()=>{
        console.log("getting data3...");
        getData(3, ()=>{
            console.log("getting data4...");
        });
    });
});
