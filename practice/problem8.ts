// find the length of a tuple

// it is important to typecast tuple as const otherwise return type of Length will be a number instead of actual length
const t1 = ["first", "second", "thrid", 3, 23, () => 9, true] as const;

type Length<T extends readonly any[]> = T["length"];

type t1len = Length<typeof t1>;
//   ^? 7

//  Dynamic arguments types

type TEvent =
  | {
      type: "SUCCESS";
      payload: {
        userId: string;
      };
    }
  | {
      type: "FAIL";
    };

// const sendEvent = <T extends TEvent["type"]>(type: T, payload?: any): void => {};
const sendEvent = <T extends TEvent["type"]>(
  ...args: Extract<TEvent, { type: T }> extends { payload: infer Payload }
    ? [type: T, payload: Payload]
    : [type: T]
): void => {};

sendEvent("SUCCESS", { userId: "23" });
sendEvent("FAIL");

// remove element from Uniion

type Letter = "a" | "b" | "c";

type RemoveLetter<T, U extends T> = T extends U ? never : T;

type TResult = RemoveLetter<Letter, "a">;

// get deep object value
let obj = {
  foo: {
    a: "a",
    b: 2,
  },
  bar: {
    cool: "c",
    d: "dust",
  },
};

// type KeySeperator<T extends string> = String.Split<T, ".">
const getDeepValue = <
  T extends Object,
  TFirst extends keyof T,
  TSec extends keyof T[TFirst]
>(
  o: T,
  fArg: TFirst,
  sArg: TSec
): T[TFirst][TSec] => {
  return o[fArg][sArg];
};

let d = getDeepValue(obj, "foo", "b");
let s = getDeepValue(obj, "bar", "cool");
