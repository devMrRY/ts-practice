type StringOrNumber = number | string;

// function fun<T extends number>(a: T, b: T): number{
//     return a + b;
// }

// function fun<T>(a: T[]): T{
//     console.log(a.length);
//     return a[0];
// }

// custom types
type myType = {
    length: number;
}

function fun <T extends myType>(a: T): number{
    return a.length;
}


type genType = {
    <T extends myType>(arg: T): number;
}

// generic type
const foo: <T extends myType>(arg: T) => number = fun;
const len2: number = fun([3]);

const len: {<T extends myType>(arg: T): number} = fun;

console.log(fun(["rahul"]));
console.log(foo([]));
console.log(fun("rahul"));
console.log(fun({a: 4, length: 54}));
// console.log(fun(5));

type ss = {
    [key: number | string]: number | string;
    a: string;
}

type gs<T> = Map<T, T>

let obj: ss = {"a": "1", 55: 2}

