{
  type myT = {
    name: string;
    readonly age: number;
  };

  let person: myT = {
    name: "test",
    age: 22,
  };

  console.log(person.age);
  // person.age = 3; // Cannot assign to 'age' because it is a read-only property.
  console.log(person);
}

{
  interface NumberDictionary {
    [index: string]: number; // index signature

    length: number; // ok
    // name: string; // conflicting with index signature which has return type of number and here return type is string.
  }

  interface NumberOrStringDictionary {
    [index: string]: number | string;
    length: number; // ok, length is a number
    name: string; // ok, name is a string
  }
}

{
  interface SquareConfig {
    color?: string;
    width?: number;
  }

  function createSquare(config: SquareConfig): { color: string; area: number } {
    return {
      color: config.color || "red",
      area: config.width ? config.width * config.width : 20,
    };
  }

  let mySquare = createSquare({ colour: "red", width: 100 }); // colour is not present in type SquareConfig did you mean color

  //   solution
  let mySquare2 = createSquare({ colour: "red", width: 100 } as SquareConfig);

  // solution 2 will only work if object have some commong property
  interface SquareConfig {
    color?: string;
    width?: number;
    [propName: string]: any;
  }
}
// ************************** inheritance in interface *****************************
{
  interface Colorful {
    color: string;
  }

  interface Circle {
    radius: number;
  }

  interface ColorfulCircle extends Colorful, Circle {}

  const cc: ColorfulCircle = {
    color: "red",
    radius: 42,
  };
}
// **************************** intersection in interface ******************************
{
  interface Colorful {
    color: string;
  }
  interface Circle {
    radius: number;
  }

  function draw(circle: Colorful & Circle) {
    console.log(`Color was ${circle.color}`);
    console.log(`Radius was ${circle.radius}`);
  }
}

// *************************** generic types *********************************
{
  interface Box<Type> {
    contents: Type;
  }

  let boxA: Box<string>;
  const boxB: Box<number> = { contents: 2 };
}
// ************************** Array *****************************
{
  // both are equivalent
  let arr: ReadonlyArray<number> = [2, 3, 4];
  let arr2: readonly number[] = [2, 3, 4];

  // Note: readonly properties can not be assigned to mutable properties
}

// ************************** Tuples *****************************
{
  let tuple: [string, number] = ["rahul", 2];
  type Either2dOr3d = [number, number, number?];
  type StringNumberBooleans = [string, number, ...boolean[]];
  type StringBooleansNumber = [string, ...boolean[], number];
  type BooleansStringNumber = [...boolean[], string, number];
}
