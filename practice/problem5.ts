/**
 * https://dev.to/macsikora/advanced-typescript-exercises-question-5-5b5f
 * 
 * We have function getUser which gets Config object, the object defines what fields of User function will return. 
 * If for example config says { name: true, lastname: false } it means returned object should have name field non-optional but no field lastname. 
 * Current User type is very broad type of the return, we need to narrow it down depending on the config passed as argument of getUser
 */

type gtype = () => void;
type gtype1<T> = (a: T) => void;
type gtype2 = <T extends string | number>(a: T) => void;

const fun1: gtype = () => {};
const fun2: gtype1<string> = (a: string) => {};
const fun3: gtype2 = <T>(a: T) => {};

declare function fun11<gtype>():void;
declare function fun22<T>(a: T): void;
declare function fun33<T>(a: T):void;

fun2("");
fun3<string>("");
fun3<number>(34);


const feee: gtype2 = fun33;
feee<number>(34);
feee<string>("34");

const foo: gtype1<string> = fun22;
const foo1: gtype1<number> = fun22;

foo("23");
foo1(34);