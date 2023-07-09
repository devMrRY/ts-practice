{
  interface Pingable {
    ping(): void;
  }

  class Sonar implements Pingable {
    ping() {
      console.log("ping!");
    }
  }

  // implementing a interface doesn't change anything in class attributes or methods it just locks the class types
  class Sonar2 implements Pingable {
    ping(x: string) {
      console.log("ping!");
    }
  }
}

{
  class Base {
    greet() {
      console.log("Hello, world!");
    }
  }

  // method overriding is not possible
  class Derived extends Base {
    // Make this parameter required
    greet() {
      console.log(`Hello`);
    }
  }
}

{
  class MsgError extends Error {
    constructor(m: string) {
      super(m);

      // Set the prototype explicitly.
      // Object.setPrototypeOf(this, MsgError.prototype);
    }
    sayHello() {
      return "hello " + this.message;
    }
  }

  const msg = new MsgError("test");
  console.log("--------->", msg.sayHello); // undefined
}

{
  class Base {
    protected m = 10;
  }
  class Derived extends Base {
    // No modifier, so default is 'public'
    m = 15;
  }
  const d = new Derived();
  console.log(d.m); // OK
}

// protected classes
{
  class A {
    protected name = "first";
  }

  class B extends A {
    constructor() {
      super();
    }

    getName() {
      return this.name;
    }
  }

  class C extends B {
    getName(): string {
      return this.name;
    }
  }

  const c = new C();
  console.log(c.getName());
}

//  protected properties are only accessible inside base/derived classes not by instances outside classes but with instance inside class functions
{
  class Base {
    protected x: number = 1;
  }
  class Derived1 extends Base {
    protected x: number = 5;
  }
  class Derived2 extends Base {
    f1(other: Derived2) {
      other.x = 10; // ok
    }
    f2(other: Base) {
      other.x = 10;
      // Property 'x' is protected and only accessible through an instance of class 'Derived2'. This is an instance of class 'Base'.
    }
  }

  let b = new Base();
  let d2 = new Derived2();

  d2.f1(d2);
  d2.f2(b);
}

// cross inheritance workaround for private properties
{
  class A {
    private x = 10;

    public sameAs(other: A) {
      // No error
      return other.x === this.x;
    }
  }

  // private variable are accessible by square bracket notation making them soft private but js private variables are hard priavate
  const a = new A();
  A.x;
  a["x"];
}

// static variables these can inherited as well
{
  class Base {
    static getGreeting() {
      return "Hello world";
    }
  }
  class Derived extends Base {
    myGreeting = Derived.getGreeting();
  }
}

// static scopes
function loadLastInstances() {
  return { length: 4 };
}

{
  class Foo {
    static #count = 0;
    get count() {
      return Foo.#count;
    }
    static {
      try {
        const lastInstances = loadLastInstances();
        Foo.#count += lastInstances.length;
      } catch {}
    }
  }
}

// Generic classes
{
  class A<T> {
    content: T;
    constructor(value: T) {
      this.content = value;
    }
  }

  // Static members cannot reference class type parameters because Box<string>.defaultValue will change Box<number>.defaultValue
  class B<T> {
    static content: T;
  }
}

{
  class A {
    name: "test";
    getName() {
      return this.name;
    }
  }

  let a = new A();

  let obj = {
    name: "object",
    getName: a.getName,
  };

  console.log(obj.getName()); // object instead of test

  // solution
  class B {
    name: "test";
    getName = () => {
      return this.name;
    };
  }

  // new problem this way every instance of class B will have getName function so in Derived class super.getName can not be called

  // solution
  class C {
    name: string;
    constructor() {
      this.name = "C";
    }

    getName(other: this) {
      return other.name;
    }
  }

  let c = new C();
  let o = {
    name: "oooo",
    getName: c.getName,
  };

  console.log(o.getName(c));
}

// constructor parameters
{
  class Params {
    constructor(
      public readonly x: number,
      protected y: number,
      private z: number
    ) {
      // No body necessary
    }
  }
  const a = new Params(1, 2, 3);
  console.log(a.x);

  console.log(a.z);
}

// class expressions
{
  const someClass = class<Type> {
    content: Type;
    constructor(value: Type) {
      this.content = value;
    }
  };

  const m = new someClass("Hello, world");
}

// abstract classes
{
  abstract class Base {
    abstract getName(): string;
   
    printName() {
      console.log("Hello, " + this.getName());
    }
  }
   
  // const b = new Base(); // Cannot create an instance of an abstract class.

  // it is mandatory in derived class to override abstract methods defined in Base class
  class Derived extends Base {
    getName() {
      return "world";
    }
  }
   
  const d = new Derived();
  d.printName();
}

// classes in TypeScript are compared structurally
{
  class Point1 {
    x = 0;
    y = 0;
  }
   
  class Point2 {
    x = 0;
    y = 0;
  }
   
  // OK
  const p: Point1 = new Point2();


  class Person {
    name: string;
    age: number;
  }
   
  class Employee {
    name: string;
    age: number;
    salary: number;
  }
   
  // OK
  const p2: Person = new Employee();
}