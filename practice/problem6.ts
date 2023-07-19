/**
 * https://dev.to/macsikora/advanced-typescript-exercises-question-7-1b42
 *
 * The exercise is to make types strict so they only accept fixed types not extra.
 */

// problem 1
type EmptyObject = {}; // empty object only, 🔥 change the type to be exclusive for any field

// test cases
const shouldPass: EmptyObject = {}; // this should be ok 🟢
const shouldFail: EmptyObject = {
  prop: 1, // here we should have compile error 🛑
};

// solution
{
  type EmptyObject = {
    [k in PropertyKey]: never;
  };

  const shouldPass: EmptyObject = {}; // this should be ok 🟢
  const shouldFail: EmptyObject = {
    prop: 1, // here we should have compile error 🛑
  };
}

// problem 2
type SomeType = {
  prop: string;
};
// change below function type definition 🔥 in order to allow only strict SomeType value
function takeSomeTypeOnly(x: SomeType) {
  return x;
}

// test cases
const x = { prop: "a" };
takeSomeTypeOnly(x); // this should be ok 🟢

const y = { prop: "a", addditionalProp: "x" };
takeSomeTypeOnly(y); // here we should have compile error 🛑

// solution
{
  type Exclusive<T, R extends T> = {
    [K in keyof R]: K extends keyof T ? R[K] : never;
  }

  function takeSomeTypeOnly2<T extends SomeType>(x: Exclusive<SomeType, T>){
    return x
  }
}
