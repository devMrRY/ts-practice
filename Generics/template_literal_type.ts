// this type will take an object and puts a on method which will accept `${keyName}Change` as eventName and a callback which will have updated value
type PropEventSource<T> = {
    on<Key extends string & keyof T>(ev: `${Key}Change`, cb: (newVal: T[Key]) => void): void;
}

declare function makeWatchedObject<T>(obj: T): T & PropEventSource<T>;

const person = makeWatchedObject({
    firstName: "Saoirse",
    lastName: "Ronan",
    age: 26
});

person.on("firstNameChange", (newVal) => {
    console.log(newVal);
});

person.on("ageChange", (newAgeVal) => {
    console.log(newAgeVal);
});