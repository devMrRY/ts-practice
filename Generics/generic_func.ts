type StringOrNumber = number | string;
// ************************** generic functions ************************
{
  {
    function fun0<T extends number>(a: T, b: T): number {
      return a + b;
    }

    function funny<T>(a: T[]): T {
      console.log(a.length);
      return a[0];
    }
  }

  {
    // custom types
    type myType = {
      length: number;
    };

    function fun<T extends myType>(a: T): number {
      return a.length;
    }

    console.log(fun(["rahul"]));
    console.log(fun("rahul"));
    console.log(fun({ a: 4, length: 54 }));
    // console.log(fun(5));
  }
}

// **************************** generic interfaces ***************************
{
  type myType = {
    length: number;
  };
  interface genType {
    <T extends myType>(arg: T): number;
  }

  
  const foo: <T extends myType>(arg: T) => number = fun;

  const len: { <T extends myType>(arg: T): number } = fun;
  const len2: genType = fun;
  const len3: number = fun([3]);
  
  // here T is placeholder for generic type for whole interface
  interface genTypeWholeInterface<T> {
    (arg: T[]): T;
    name: T;
  }

  const identity = (arr: string[]) => arr[0];

  identity.name = "testing...";

  const len4: genTypeWholeInterface<string> = identity;
   
  console.log(foo("rahul"), len, len2, len3, len4);
}

// *****************************generic types *************************
{
  type ss = {
    [key: number | string]: number | string;
    a: string;
  };

  type gs<T> = Map<T, T>;

  let obj: ss = { a: "1", 55: 2 };
}
