// Del 1
const name = {
    firstname: "Oskar", 
    lastname: "Fjellen"
};

console.log(name);


// Del 2
function printData(a, b) {
    console.log(a, b)
}

printData("Hej", 5);


// Del 3
function add(x, y){
    return x + y;
}

console.log(add(10, 100));

// Del 4
function A(x){
    addResult=x;
    console.log(addResult);
}
A(add(10, 100));

// Del 5
const add2=(x,y)=>x+y;

console.log(add2(4,5));