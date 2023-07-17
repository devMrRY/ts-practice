{
  // SomeType extends OtherType ? TrueType : FalseType;

  interface IdLabel {
    id: number /* some fields */;
  }
  interface NameLabel {
    name: string /* other fields */;
  }

  // function overloading
  function createLabel(id: number): IdLabel;
  function createLabel(name: string): NameLabel;
  function createLabel(nameOrId: string | number): IdLabel | NameLabel;
  function createLabel(nameOrId: string | number): IdLabel | NameLabel {
    throw "unimplemented";
  }

  // shorter way to declare createLabel function
  type IdOrName<T extends number | string> = T extends number
    ? IdLabel
    : NameLabel;

  let obj = <T extends number | string>(a: T): IdOrName<T> => {
    throw "test";
  };

  let result = obj("test");
  console.log(result);
}

{
  type MessageOf<T extends { message: unknown }> = T["message"];
  type MessageOfWithOptionalMessage<T> = T extends { message: unknown }
    ? T["message"]
    : never;

  let msg: MessageOf<{ message: string }> = "6";
  let msgval: MessageOfWithOptionalMessage<{ letter: number }>;

  type Flatten<T> = T extends any[] ? T[number] : T;
  const arr: Flatten<string[]> = "test";
  const arr2: Flatten<number> = 23;
}

// ******************************* infer **********************************
{
  // infer keyword is used here to extract type of T and infer can only be used with conditional statements
  type Flatten<T> = T extends Array<infer Item> ? Item : T;

  type GetTypeOf<T> = T extends (...args: never[]) => infer Return
    ? Return
    : never;

  type Num = GetTypeOf<() => number>;
  type Str = GetTypeOf<() => string>;
  type Obj = GetTypeOf<(a: boolean, b: boolean) => boolean>;
}

// ******************************* Distributive conditional types *****************************
{
  type ToArray<Type> = Type extends any ? Type[] : never;

  //   StrArrOrNumArr = string[] | number[];    as ToArray iterates over each possible arg so array could be of both string[] | number[];
  type StrArrOrNumArr = ToArray<string | number>;

  
  type ToArrayNonDist<Type> = [Type] extends [any] ? Type[] : never;
  type StrArrOrNumArrs = ToArrayNonDist<string | number>;
}
