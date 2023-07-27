// extract values of all keys starts with 'a'

export type Obj = {
  a: "FOO";
  a2: "a2";
  a3: "a3";
  b: "b";
  b1: "b1";
  b2: "b2";
};

// _ExtractedKeys are private default generics used to store things

export type ValuesOfKeysStartingWithA<
  Obj,
  _ExtractedKeys extends keyof Obj = Extract<keyof Obj, `a${string}`>
> = {
  [K in _ExtractedKeys]: Obj[K];
}[_ExtractedKeys];

type NewUnion = ValuesOfKeysStartingWithA<Obj>;

type s = Extract<Obj['a'], 'FOO'>
