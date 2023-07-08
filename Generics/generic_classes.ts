{
  class GenericNumber<NumType> {
    zeroValue: NumType;
    add: (x: NumType, y: NumType) => NumType;
  }

  let myGenericNumber = new GenericNumber<number>();
  myGenericNumber.zeroValue = 0;
  myGenericNumber.add = function (x, y) {
    return x + y;
  };

  let stringNumeric = new GenericNumber<string>();
  stringNumeric.zeroValue = "";
  stringNumeric.add = function (x, y) {
    return x + y;
  };

  console.log(stringNumeric.add(stringNumeric.zeroValue, "test"));
}

// ********************************* generic constraints ********************************
{
  function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
    return obj[key];
  }

  let x = { a: 1, b: 2, c: 3, d: 4 };

  getProperty(x, "a");
  //   getProperty(x, "m");   // Argument of type '"m"' is not assignable to parameter of type '"a" | "b" | "c" | "d"'.
}

// ************************* factory creation using construct signature ************************
{
  class BeeKeeper {
    hasMask: boolean = true;
  }

  class ZooKeeper {
    nametag: string = "Mikle";
  }

  class Animal {
    numLegs: number = 4;
  }

  class Bee extends Animal {
    numLegs = 6;
    keeper: BeeKeeper = new BeeKeeper();
  }

  class Lion extends Animal {
    keeper: ZooKeeper = new ZooKeeper();
  }

  function createInstance<T extends Animal>(a: { new (): T }): T {
    return new a();
  }

  console.log(createInstance(Lion).keeper.nametag);
  console.log(createInstance(Bee).keeper.hasMask);
}

{
  /**
   * Consider a function that creates a new HTMLElement. Calling the function with no arguments generates a Div;
   * calling it with an element as the first argument generates an element of the argument’s type.
   * You can optionally pass a list of children as well. Previously you would have to define it as:
   */
}
declare function createHTMLElement<
  T extends HTMLElement = HTMLDivElement,
  U = T[]
>(el?: T, children?: U): Container<T, U>;
