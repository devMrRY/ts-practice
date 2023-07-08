// ************************** keyof operator *************************
{
  type Arrayish = { [n: number]: unknown };
  type A = keyof Arrayish;

  // A is of type number

  type Mapish = { [k: string]: boolean };
  type M = keyof Mapish;

  // M is of type string | number
  // M is string | number — this is because JavaScript object keys are always coerced to a string, so obj[0] is always the same as obj["0"]
}

// ************************* typeof operator *************************
{
  function f() {
    return { x: 10, y: 3 };
  }
  type P = ReturnType<typeof f>;
  // always use type ReturnType with types not with values
}

// ************************* indexed access **************************
{
  type Person = { age: number; name: string; alive: boolean };
  type Age = Person["age"];

  type I1 = Person["age" | "name"];

  type I2 = Person[keyof Person];

  type AliveOrName = "alive" | "name";
  type I3 = Person[AliveOrName];

  const MyArray = [
    { name: "Alice", age: 15 },
    { name: "Bob", age: 23 },
    { name: "Eve", age: 38 },
  ];

  type Person2 = (typeof MyArray)[number];
}
