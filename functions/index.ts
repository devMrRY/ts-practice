// ******************** call signatures *********************
{
  type DescribableFunction = {
    description: string;
    (someArg: number): boolean;
  };
  function doSomething(fn: DescribableFunction) {
    console.log(fn.description + " returned " + fn(6));
  }

  function myFunc(someArg: number) {
    return someArg > 3;
  }
  myFunc.description = "default description";

  doSomething(myFunc);
}

// ************************** construct signature *************************
{
  type SomeConstructor = {
    new (s: string): string;
  };
  function fn(ctor: SomeConstructor) {
    return new ctor("hello");
  }
}

// ***************************** function overloading **********************
{
  function fun(x: string, y: string): string;
  //   function fun(x: string): boolean; // will return runtime error This overload signature is not compatible with its implementation signature.
  function fun(x: string): string;
  function fun(x: string): string {
    return x;
  }
  fun("");
  //   function without args should also be declared above definition
}

{
  function leng(s: string): number;
  function leng(arr: any[]): number;
  function leng(x: any) {
    return x.length;
  }

  leng(""); // OK
  leng([0]); // OK
  //   leng(Math.random() > 0.5 ? "hello" : [0]);    //   can not call a function which can either be string or array

  // solution
  function leng2(x: string | any[]) {
    return x.length;
  }
  leng2(Math.random() > 0.5 ? "hello" : [0]);
}

// ******************************* this declaration ********************
{
  type User = {};
  function getDB() {
    return {
      admin: 2,
      filterUsers: function (cb) {},
    };
  }

  interface DB {
    filterUsers(filter: (this: User) => boolean): User[];
  }

  const db = getDB();
  const admins = db.filterUsers(function (this: User) {
    // return this.admin;
  });
}

// ************************ variables ***********************
{
  /*
        Function vs () => void;
        values of Function can always be called and return any;
        if you want to accept a function but don't call it then use () => void;
    */

  function doSome(f: Function) {
    return f(1, 2, 3);
  }

  function doSome2(f: () => void) {
    console.log(f());
  }

  /**
   * void is not same as undefined
   * void means function can return anything but it will be discarded
   */

  type voidFunc = () => void;

  const f1: voidFunc = () => {
    return true;
  };

  const f2: voidFunc = () => true;

  const f3: voidFunc = function () {
    return true;
  };

  const v1 = f1();
  const v2 = f2();
  const v3 = f3();

  console.log(v1, v2, v3); // output: void, void, void;

  /**
   * special case if literal function definition return a void
   * then function should not return anything other than void
   */

  function f2(): void {
    // @ts-expect-error
    return true;
  }
}

{
  // never type means function either throws an error or terminated unexpeditly
  function fail(msg: string): never {
    throw new Error(msg);
  }
}

{
  // unknown value similar to any but safer
  function f1(a: any) {
    a.b(); // OK
  }
  function f22(a: unknown) {
    // a.b();
    //   'a' is of type 'unknown'.
  }
}

declare function fun11<gtype>(): void;
declare function fun22<T>(a: T): void;
declare function fun33<T>(a: T): void;

{
  type gtype = () => void;
  type gtype1<T> = (a: T) => void;
  type gtype2 = <T extends string | number>(a: T) => void;

  const fun1: gtype = () => {};
  const fun2: gtype1<string> = (a: string) => {};
  const fun3: gtype2 = <T>(a: T) => {};


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
}
