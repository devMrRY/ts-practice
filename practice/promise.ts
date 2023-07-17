// type CustomPromise<T> = {
//     // <T>(res: (U) => U, rej: (T) => T): void;
// }

// function test(arg: string): Promise<string | number> {
//     return new Promise((resolve, reject) => {
//         if (arg === "a") {
//             resolve(1);
//         } else {
//             reject("1");
//         }
//     });
// }

// function main() {
//     // let result: Promise<string | number> = test("flaskd");
//     // result.then((res: string | number) => {

//     // })
//     // console.log(result)

//     /**
//      * {
//   "userId": 1,
//   "id": 1,
//   "title": "delectus aut autem",
//   "completed": false
// }
//      */

// interface resultType {
//     userId: number,
//     id: number,
//     title: string,
//     completed: boolean,
// }

// interface rT<T>{

// }

//     async function fun<T>(): Promise<T>{
//       return 0;
//     }

//     fun<number>();

//     let res: Promise<Response> = fetch('https://jsonplaceholder.typicode.com/todos/1')
//       res.then(response => response.json())
//       .then((json) => console.log(json))
// }
// // main();

// type GenericFunction = <T>(x: T) => T;

// // const cantDoThis: GenericFunction = (x: string) => x.toUpperCase(); // error!
// // // doesn't work for every T
// // cantDoThis("oops");
// // cantDoThis(45);

// let globalObj = {
//   c: 3,
//   d: 5,
// };

// type gObj = {
//   c: number;
//   d: number;
// };

// function getValue<T, U extends keyof (T & gObj)>(
//   obj: T,
//   key: U
// ): T[U] | gObj[U] {
//   if (key in obj) {
//     return obj[key];
//   } else {
//     return globalObj[key];
//   }
// }

// console.log(getValue({ a: 4, b: 2 }, "b"));
// console.log(getValue([2, 3, 4, 5, 6], 2));
// console.log(getValue("27u77777", 2));

// type X = Promise<string>;
// type Y = Promise<{ a: 1; b: 3 }>;

// type XResult = Awaited<X>;
// type YResult = Awaited<Y>;
// type ZResult<T> = T extends Promise<infer Inner> ? Inner : never;
// type aa = ZResult<Y>;

// type a = { a: string; b: number };
// type b = { c: string; b: number };
// type d = a & b;

// let de: d = { a: "", b: 2, c: "" };

// type getPropertyType<T, U extends keyof T> = T extends { [K in U]: infer Inner }
//   ? Inner
//   : never;

// type OnlySameTypes = <T extends string | number>(
//   a: T,
//   b: T
// ) => T extends string ? string : number;

// const sum: OnlySameTypes = <T>(a: T, b: T) => {
//   if (typeof a === "string") {
//     return a + ":" + b;
//   } else {
//     return (a as number) + (b as number); // assertion
//   }
// };

// let r = sum("a", 2);


function f<T extends string | number, R extends (T extends string ? string : number)>(a: T, b: T): R {
  if (typeof a === 'string') {
    return a + ':' + b as R;
  } else {
    return ((a as number) + (b as number)) as R;
  }
}
const a = f('a', 'b'); // a is string :)
const b = f(1, 2); // b is number :)