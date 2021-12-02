///////1. String concatenation
console.log('my' + ' cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);

///////2.Numeric operaters
console.log(1 + 1)  //add
console.log(1 - 1)  //substract
console.log(1 / 1)  //divide
console.log(1 * 1)  //multiply
console.log(5 % 2)  //remainder
console.log(2 ** 3) //exponentiation

///////3.Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// = counter = counter + 1;
// = preincrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postincrement = counter++;
// = postincrement = counter;
// = counter = counter + 1;
console.log(`postincrement: ${postincrement}, counter: ${counter}`);
const predecrement = --counter;
console.log(`predecrement: ${preIncrement}, counter: ${counter}`);
const postdecrement = counter--;
console.log(`postdecrement: ${postincrement}, counter: ${counter}`);

////////4.Assigment operators
let x = 3;
let y = 6;
x += y;     //x = x + y;
x -= y;
x *= y;
x /= y;

///////5. Comparison operator
console.log(10 < 6);        //less than
console.log(10 <= 6);       //lest than or equal
console.log(10 > 6);        //greater than
console.log(10 >= 6);       //greater than or equal

////////6. Logical operator : || (or), $$ (and), !(not)
const value1 = false;
const value2 = 4 < 2;

// ||(or) - 처음으로 true 나오면 멈춤 ex) value1이 true면 끝
console.log(`or: ${value1 || value2 || check()}`);

// &&(and) - 3개 다 true 일 경우
console.log(`and: ${value1 && value2 && check()}`);

//null 사용
//if(nullableobject != null) {
//   nullableobject.something;
//}

function check(){
    for(let i=0; i<10; i++) {
        //wasting time
        console.log('?');
    }
    return true;
}

//// ! (not)
console.log(!value1);

///////////7. Equality
const stringfive = '5';
const numberfive = 5;

// == loose equality, with type conversion
console.log(stringfive == numberfive);
console.log(stringfive != numberfive);

// === strict equality, no type coversion
console.log(stringfive === numberfive);
console.log(stringfive !== numberfive);

// object equality by reference
const tae1 = {name:'tae'};
const tae2 = {name:'tae'};
const tae3 = tae1;
console.log(tae1 == tae2);
console.log(tae1 === tae2);
console.log(tae2 === tae3);

//equality - puzzler
console.log(0 == false);
console.log(0 === false);
console.log('' == false);
console.log('' === false);
console.log(null == undefined);
console.log(null === undefined);

 /////////8. Conditional poerators : if
 // if, else if, else
 const name = 'tae';
 if( name === 'tae') {
     console.log('Wwlcome, tae!');
 } else if (name === 'coder') {
     console.log ('You are amazing coder');
 } else {
     console.log('unkwnon');
 }

 //////9. Ternary operator: ?
 // condition ? value1 : value2;
 console.log(name === 'tae' ? 'yes' : 'no');

///////10. Switch statement
// use for muultple of checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = 'IE';
switch(browser) {
    case 'IE':
    console.log('go away!');
    break;
    case 'Chrome':
    case 'Firefox':
    console.log('Love you!');
    break;
    default:
        console.log('same all!');
    break;
}

/////////11. Loops
// while loop, while the condition is truthy,
// body code id executed
let i = 3;
while (i>0){
    console.log(`while: ${i}`);
    i--;
}

// do while loop, body code is executed first,
// then check the condition
do{
    console.log(`do shile: ${i}`);
    i--;
} while (i>0);

// for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
    console.log(`for: ${i}`);
}

for(let i = 3; i>0; i=i-2) {
    //inline variable declaration
    console.log(`inline variable for: ${i}`);
}

//nested loops
for(let i=0; i<10; i++) {
    for (let j=0; j<10; j++) {
        console.log(`i: ${i}, j: ${j}`);
    }
}

//break, continue
// Q1. iterate from 0 to 10 and print only even numbers
//  (use continue)
for(let i=0; i<11; i++ ){
    if(i%2 ===0){
        continue;
    }
    console.log(`q1. ${i}`);
}

// Q2. iterate from 0 to 10 and print numbers until 
// reaching 8 (use break)

for(let i=0; i<11; i++) {
    if(i>8){
        break;
    }
    console.log(`q2. ${i}`);
}