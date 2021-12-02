//////////////1. user strict
'user strict';

//////////////2. variable, rw(read/write)
//let (added in ES6)
let globalName = 'global name';     //어느곳에서 접근 가능(어플리케이션 실행부터 끝까지 메모리에 탑재되어있으므로 최소한으로 사용 - 가능하면 클래스, 함수, 이프,)
{       // block scope
let name = 'tae';
console.log(name);
name = 'hello';
console.log(name);
console.log(globalName);            //블록 내부 - 어느곳에서 접근 가능
}
console.log(name);
console.log(globalName);            //블록 밖 - 어느곳에서 접근 가능

//var (don't use)       //선언하기전에 값을 할당, 출력할 수 있으므로 
//var hoisting          //선언위치가 어디가되든 맨 위로 끌어올림
console.log(age);
age = 4;
console.log;(age);
var age;
{         //블록변수 선언해도 무시함
    age = 4;
    var age;
}
console.log(age);

///////////////3. Constant, r(read only)
const dayinweek = 7;
const maxnumber = 5;

//Note!
//Imutable data types: preamitive types, frozen objects 
//Mutable data type: all objcet by default are mutable in JS


/////////////4. variable types
// primitive, single item: number, string, boolean, null, undefiedn, symbol
// Object, box container
// function, first-class function
const count = 17;       //integer
const size =17.1;       //decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

//number - spcial numeric values: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeinfinity = -1 / 0;
const nAn = 'not a number' / 2
console.log(infinity);
console.log(negativeinfinity);
console.log(nAn);

//string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `h1 ${brendan}!`;      //template literals(string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
//기존식 - console.log('value: ' + helloBob + 'type: ' + typeof helloBob);
// `${}`을 사용하지않으면 밑 코드처럼 하나하나 다 나열해야한다.

//boolean
//false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; //false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

//null  (비어있다고 선언, 값이 할당됨)
let nothing = null; 
console.log(`value: ${nothing}, type:${typeof nothing}`);

//undefined     (선언은 되었지만 비어있음, 값이 지정되지 않음)
let x;
console.log(`value: ${x}, type: ${typeof x}`);

//symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);       //false
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2);     //true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

//object
const tae = {name: 'taeju', age: 27};

//dynamic typing : dynamically typed language
let text = 'hello';
console.log(text.charAt(0));
console.log(`value: ${text}, type:${typeof text}`);
text = 1;
console.log(`value": ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value": ${text}, type: ${typeof text}`);
text = '8' / 2;
console.log(`value": ${text}, type: ${typeof text}`);
