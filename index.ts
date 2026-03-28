// TypeScript Basic Features Demonstration




//--- Module1 -----
let course: string = "Learning TypeScript";
console.log(`Hello, ${course}`);

let count: number = 42;
console.log(`Count is: ${count}`);


const user: {
    company: "BS 23", // literal type
    readonly position: String; // readonly property
    name: String;
    age?: Number; // optional property
    email: String;

} = {
    position: "Developer",
    company: "BS 23",
    name: "Alice",
    age: 30,
    email: "alice@example.com"

}

// user.position='Senior Developer'; // Error: Cannot assign to 'position' because it is a read-only property
console.log(`User Info: ${user.company}, ${user.name}, ${user.age}, ${user.email}`);


const poorUser = {
    name: "Bob",
    balance: 0,
    addBalance(balance: number): string {
        return `Hello ${this.name}, your new balance is ${this.balance + balance}`;
    },
};

console.log(`Transaction: ${poorUser.addBalance(100)}`);

//spread operator and destructuring

const num1: number[] = [1, 2, 3];
const num2: number[] = [4, 5, 6];
num1.push(...[7, 8, 9]);

// Using spread operator to combine arrays
const combined: number[] = [...num1, ...num2];
console.log(`Combined: ${combined}`);



const mentor1 = {
    name: "Charlie",
    expertise: "TypeScript", // literal type
}
const mentor2 = {
    name: "Diana",
    expertise: "JavaScript",
}
const mentorsCombined = { ...mentor1, ...mentor2 };
console.log(`Mentors Combined: ${JSON.stringify(mentorsCombined)}`);


// Using spread operator to combine objects

const myFriendList = (...friends: string[]) => {
    console.log(`Friends List: ${friends.join(", ")}`);
    return friends;
}

myFriendList("Eve", "Frank", "Grace");

// Destructuring
const [first, second, ...rest] = combined;
console.log(`First: ${first}, Second: ${second}, Rest: ${rest}`);

const user2 = {
    age: 28,
    city: "New York",
    name: {
        firstName: "Hannah",
        middleName: "Lee",
        lastName: "Smith",

    }
}

// Nested destructuring with aliases(alias mane oponaam ba chondonaam)
const { age, city, name: { firstName: userFirstName, middleName: userMiddleName, lastName: userLastName } } = user2;

//type assertion

let someValue: any = "This is a string";
let strLength: number = (someValue as string).length;
console.log(`String Length: ${strLength}`);

//type alias
type Employee = {
    id: number;
    name: string;
    department: string;
};
const employee1: Employee = {
    id: 1,
    name: "Hank",
    department: "Engineering",
};
console.log(`Employee: ${employee1.name}, Department: ${employee1.department}`);

const student0: {
    id: number;
    name: string;
    major: string;
} = {
    id: 2,
    name: "Bob",
    major: "Mathematics"
}
console.log(`Student: ${student0.name}, Major: ${student0.major}`);
// another type alias
type Student = {
    id: number;
    name: string;
    major: string;
};
const student1: Student = {
    id: 1,
    name: "Alice",
    major: "Computer Science",
};
console.log(`Student: ${student1.name}, Major: ${student1.major}`);


//type alias in function

type Add = (num1: number, num2: number) => number;

const addNumber: Add = (num1, num2) => num1 + num2;

console.log(`Addition: ${addNumber(5, 10)}`);


// Union and intersection Types


//union type
type myUser = {
    name: string;
    email: string;
    age: number;
    gender: "female" | "male"; // union type
    bloodGroup: "A+" | "A-" | "B+" | "B-" | "O+" | "O-" | "AB+" | "AB-"; // union type

}

const userA: myUser = {
    name: "Salah",
    email: "salah@example.com",
    age: 30,
    gender: "male",
    bloodGroup: "O+"
};

// intersection type

type frontEndDeveloper = {
    skills: string[];
    experience: number;
    designaitions1: "Junior Developer" | "Mid-level Developer" | "Senior Developer";

}

type backEndDeveloper = {
    skills: string[];
    experience: number;
    designaitions2: "Junior Developer" | "Mid-level Developer" | "Senior Developer";

}

type fullStackDeveloper = frontEndDeveloper & backEndDeveloper;

const developer: fullStackDeveloper = {
    skills: ["JavaScript", "TypeScript", "Node.js", "React"],
    experience: 5,
    designaitions1: "Senior Developer",
    designaitions2: "Mid-level Developer"
};


console.log(`Developer Skills: ${developer.skills.join(", ")}, Experience: ${developer.experience} years, Designation1: ${developer.designaitions1}, Designation2: ${developer.designaitions2}`);


// nullish coalescing operator
const userInput: string | null = null;
const defaultInput: string = "Default Value";
const finalInput: string = userInput ?? defaultInput;
console.log(`Final Input: ${finalInput}`); // Output: "Final Input: Default Value"

// Never type, Unknown type, and Nullable type example

//nullable type
const searchName = (value: string | null) => {
    if (value) {
        console.log(`Searching for ${value}...`);
    } else {
        console.log("No name provided for search.");
    }
}

searchName(null); // Output: "No name provided for search."
searchName("Alice"); // Output: "Searching for Alice..."


//unknown type
let unknownValue = (value: unknown) => { return value };

if (typeof unknownValue("This is a string") === "string") {
    console.log(`Unknown Value: ${unknownValue(`${unknownValue("This is a string")}`)}`);
} if (typeof unknownValue(123) === "number") {
    console.log("Unknown Value is number.");
} if (typeof unknownValue(true) === "boolean") {
    console.log("Unknown Value is boolean.");
} else {
    console.log("Unknown Value is not a string.");
}

// never type
const throwError = (message: string): never => {
    throw new Error(message); // This function will never return a value, it will always throw an error
};
// Uncommenting the line below will throw an error
// throwError("This is a never type error!");
console.log("TypeScript basic features demonstration completed.");



//-----Modul2 ------> Explore advanced type of TypeScript

//type assertion 
let someData: any = "TypeScript is awesome!";
let dataLength: number = (someData as string).length;

console.log(`Data Length: ${dataLength}`);

const kgToGm = (value: number | string): number | string | undefined => {
    if (typeof value === "number") {
        return value * 1000;

    } else if (typeof value === "string") {
        const parsedValue = parseFloat(value);
        if (!isNaN(parsedValue)) {
            return parsedValue * 1000;
        }
    }
    throw new Error("Invalid input");
}
console.log(`500 kg in gm: ${kgToGm('500')} gm`);


//Interface vs Type Alias
// Type Alias vs Interface
// Type Alias can represent primitive types, union types, intersection types, and more complex types, while Interface is primarily used to define the shape of an object or a class.
// Type Alias can be used to create a new name for any type, including primitive types, union types, intersection types, and more complex types. Interface is specifically designed to define the structure of an object or a class.
// Type Alias cannot be reopened to add new properties, while Interface can be extended or implemented by other interfaces or classes to add new properties or methods.

// Type Alias
type Bike = {
    name: string;
    model: number;
    engineNumber: string;
    price: number;
}
type BikeDetails = Bike & { description: string }; // Intersection type to add description property to Bike type

const myBike: BikeDetails = {
    name: "Honda",
    model: 2019,
    engineNumber: "ENG654321",
    price: 1500000,
    description: "A reliable bike"
}
console.log(`Bike Info: ${myBike.name}, Model: ${myBike.model}, Price: ${myBike.price}, Description: ${myBike.description}`);

// Interface

interface Car {
    name: string;
    model: number;
    engineNumber: string;
    price: number;
}

interface CarDetails extends Car {
    description: string;
}


const myCar: CarDetails = {
    name: "Toyota",
    model: 2020,
    engineNumber: "ENG123456",
    price: 3000000,
    description: "A comfortable car"
}

console.log(`Car Info: ${myCar.name}, Model: ${myCar.model}, Price: ${myCar.price}, Description: ${myCar.description}`);


//for array of objects type alias vs interface

type numberArray = number[];
const numbers1: numberArray = [1, 2, 3, 4, 5];

console.log(`Numbers: ${numbers1.join(", ")}`);

interface StringArray extends Array<string> {
    [index: number]: string;
}
const strings1: StringArray = ["one", "two", "three", "four", "five"];
console.log(`Strings: ${strings1.join(", ")}`);

// Introduction To Generics in TypeScript

//Generic Arra
type GenericArray<T> = Array<T>;

const genericNumbers: GenericArray<number> = [10, 20, 30, 40, 50];
const genericStrings: GenericArray<string> = ["ten", "twenty", "thirty", "forty", "fifty"];
const genericBooleans: GenericArray<boolean> = [true, false, true, false, true];
console.log(`Generic Numbers: ${genericNumbers.join(", ")}`);
console.log(`Generic Strings: ${genericStrings.join(", ")}`);
console.log(`Generic Booleans: ${genericBooleans.join(", ")}`);

//Generic Function
const genericIdentity = <T>(arg: T): T => {
    return arg;
}
console.log(`Generic Identity Number: ${genericIdentity<number>(100)}`);



const userInfo: GenericArray<{ name: string; age: string | number; email: string; stdId: string; deptCode: string | number; major: string; }> = [
    {
        name: 'salah',
        age: '27',
        email: 'salah@example.com',
        stdId: '1001',
        deptCode: 'CSE',
        major: 'Computer Science'
    },
    {
        name: 'John',
        age: 22,
        email: 'john@example.com',
        stdId: '101',
        deptCode: 1616,
        major: 'CSE'

    },
];

userInfo.forEach(user => {
    console.log(`User Info: Name: ${user.name}, Age: ${user.age}, Email: ${user.email}, Student ID: ${user.stdId}, Department Code: ${user.deptCode}, Major: ${user.major}`);
    if (userInfo.indexOf(user) !== userInfo.length - 1) {
        console.log('---');
    }
});


//Generic Tuple
type GenericTuple<X, Y> = [X, Y];
const tuple: GenericTuple<string, number> = ["Age", 30];

console.log(`Tuple: ${tuple[0]} - ${tuple[1]}`);

type usedUser = {
    name: string;
    email: string;
}
type studentUser = {
    stdId: string;
    major: string;
}
const userTuple: GenericTuple<usedUser, studentUser> = [
    { name: 'Salah', email: 'salah@example.com' },
    { stdId: '1001', major: 'Computer Science' }
];

userTuple.forEach((item, index) => {
    console.log(`Tuple Item ${index + 1}: ${JSON.stringify(item)}`);
});



// Generic with Interface
interface GenericInterface<X, Y> {
    field1: X;
    field2: Y;
}

const user11: GenericInterface<string, number> = {
    field1: "Name",
    field2: 30
};

console.log(`User: ${user11.field1} - ${user11.field2}`);


interface Developer<T, U, V = null> {
    name: string;
    Computer: T;
    smartWatch: U;
    RoyalBike?: V;
}
interface Computer {
    brand: string;
    model: string;
    releaseYear: number;
}
interface SmartWatch {
    brand: string;
    model: string;
    features: string[];
}
interface RoyalBike {
    brand: string;
    model: string;
    year: number;
    price: number;
}

const developer1: Developer<Computer, SmartWatch> = {
    name: "Alice",
    Computer: {
        brand: "Apple",
        model: "MacBook Pro",
        releaseYear: 2021
    },
    smartWatch: {
        brand: "Apple",
        model: "Apple Watch Series 6",
        features: ["Heart Rate Monitor", "GPS", "Sleep Tracking"]
    }

};
const developer2: Developer<Computer, SmartWatch, RoyalBike> = {
    name: "Bob",
    Computer: {
        brand: "Dell",
        model: "XPS 13",
        releaseYear: 2020
    },
    smartWatch: {
        brand: "Samsung",
        model: "Galaxy Watch 3",
        features: ["Heart Rate Monitor", "GPS", "Sleep Tracking"]
    },
    RoyalBike: {
        brand: "Royal Enfield",
        model: "Classic 350",
        year: 2020,
        price: 180000
    }
};

console.log(`Developer 1: ${developer1.name}`);

for (const key in developer1) {
    const value = developer1[key as keyof typeof developer1];
    if (typeof value === 'object') {
        console.log(`${key}:`);
        for (const subKey in value) {
            console.log(`  ${subKey}: ${value[subKey as keyof typeof value]}`);
        }
    } else {
        console.log(`${key}: ${value}`);
    }
}
console.log(`Developer 2: ${developer2.name}`);
for (const key in developer2) {
    const value = developer2[key as keyof typeof developer2];
    if (typeof value === 'object') {
        console.log(`${key}:`);
        for (const subKey in value) {
            console.log(`  ${subKey}: ${value[subKey as keyof typeof value]}`);
        }
    } else {
        console.log(`${key}: ${value}`);
    }
}

// function with Generic 


const genericFun = <T>(value: T): T[] => {
    return [value];
}


type GenericType1 = {
    id: number;
    score: number;
}

const result1 = genericFun<string>("Hello TypeScript");
const result2 = genericFun<GenericType1>({ id: 1, score: 95 });


result2.forEach((item, index) => {
    console.log(`Result2 Item ${index + 1}:`);
    for (const key in item) {
        console.log(`  ${key}: ${item[key as keyof typeof item]}`);
    }

});


const NextLevelFunctions = <T>(student: T) => {
    const comment = 'Student Info processed successfully.';
    return {
        ...student,
        comment

    }
}
const studentA = {
    name: "Salah",
    age: 26,
    email: "salah@example.com"
}
const advancedStudent = NextLevelFunctions(studentA);

for (const key in advancedStudent) {
    const value = advancedStudent[key as keyof typeof advancedStudent];
    if (typeof value !== 'function') {
        console.log(`${key}: ${value}`);
    }
}


// constraints in generics

// extending generic function with constraints, must have username and password properties and also allow extra properties
const loginUser = <T extends { username: string; password: string; }>(user: T): T => {
    return user;
}
const loggedInUser = loginUser({ username: "testuser", password: "password123", extraField: "extraValue" });
console.log(`Logged in User: ${loggedInUser.username}`);
console.log(`Password: ${loggedInUser.password}`);

// generic constraints using keyof- create a function that takes an object and a key, and returns the value of that key in the object, but only if the key exists in the object

const getProperty = <T, K extends keyof T>(obj: T, key: K): T[K] => {
    return obj[key];
}
const userObj = {
    id: 1,
    name: "Salah",
    email: "salah@example.com"
}
const userName = getProperty(userObj, "name");
console.log(`User Name: ${userName}`); //   Output: "User Name: Salah"


// asynchronous typescript -- using async await and promise

// type AsyncUser={
//     id: number;
//     name: string;
//     email: string;
// }
// const createPromise=() : Promise<AsyncUser>=>{
//     return new Promise<AsyncUser>((resolve, reject)=>{
//         const success = true; // Simulate success or failure
//         if(success){
//             resolve({
//                 id: 1,
//                 name: "Salah",
//                 email: "salah@example.com"
//             });
//         }else{
//             reject("Promise rejected.");
//         }
//     });
// }

// const showData= async()=>{
//     try {
//         const result: AsyncUser = await createPromise();
//        for (const key in result){
//         console.log(`${key}: ${result[key as keyof typeof result]}`);
//        }
//     } catch (error) {
//         console.error(error);
//     }finally{
//         console.log("Promise handling completed.");
//     }
// }
// showData(); // Output: "id: 1", "name: Salah", "email: salah@example.com"


// const fetchUserData= async() =>{
//     const response =await fetch('https://jsonplaceholder.typicode.com/users/1');

//     if(!response.ok){
//         console.error("Failed to fetch user data.");
//         return;
//     }
//     const data = await response.json();
//     console.log(`Fetched User Data: ${JSON.stringify(data)}`);
// }
// fetchUserData(); // Output: "Fetched User Data: {"id": 1, "name": "Salah", "email": "salah@example.com"}"

// conditional types
type IsString<T> = T extends string ? "Yes, it's a string" : "No, it's not a string";

type Test1 = IsString<string>; // "Yes, it's a string"
type Test2 = IsString<number>; // "No, it's not a string"


const testString: Test1 = "Yes, it's a string";
const testNumber: Test2 = "No, it's not a string";
console.log(`Test1: ${testString}`); // Output: "Test1: Yes, it's a string"
console.log(`Test2: ${testNumber}`); // Output: "Test2: No, it's not a string"


type Sheikh = {
    bike: string;
    car: string;
    bus: string;
    train: string;
    airplane: string;
    boat: string;
    helicopter: string;

}

type VehicleType<T> = T extends keyof Sheikh ? "All vehicles are available" : "Some vehicles are missing";

type TestVehicle1 = VehicleType<"bike" | "car" | "bus" | "train" | "airplane" | "boat" | "helicopter">; // "All vehicles are available"

const vehicleTest1: TestVehicle1 = "All vehicles are available";

console.log(`Vehicle Test1: ${vehicleTest1}`); // Output: "Vehicle Test1: All vehicles are available"

// Mapped Types with Generics

const arrOfNumber = [1, 2, 3, 4, 5];

const arrOfString = arrOfNumber.map(
    (num) => num.toString()
);
console.log(`Array of Strings: ${arrOfString}`);


type Person = {
    name: string;
    age: number;
    email: string;
}
type ReadThePerson<T> = {
    [key in keyof T]: T[key];
}

const personA: ReadThePerson<Person> = {
    name: "Salah",
    age: 27,
    email: "salah@example.com"
}

for (const key in personA) {
    console.log(`${key}: ${personA[key as keyof typeof personA]}`);
}

// utility types

type Product = {
    id: number;
    name: string;
    price: number;
    description?: string;
}

// Pick Utility Type-make a new type by picking specific properties from an existing type
type PickedProduct = Pick<Product, "id" | "name" | "price">; //must be used with the properties that exist in the original type
const productA: PickedProduct = {
    id: 1,
    name: "Laptop",
    price: 1500
};
console.log(`Picked Product: ${JSON.stringify(productA)}`);

// Omit Utility Type-make a new type by omitting specific properties from an existing type
type OmittedProduct = Omit<Product, "description">;
const productB: OmittedProduct = {
    id: 2,
    name: "Smartphone",
    price: 800
};
console.log(`Omitted Product: ${JSON.stringify(productB)}`);

// Partial Utility Type-make all properties of a type optional
type PartialProduct = Partial<Product>;
const productC: PartialProduct = {
    name: "Tablet"

};
console.log(`Partial Product: ${JSON.stringify(productC)}`);

// Required Utility Type-make all properties of a type required
type RequiredProduct = Required<Product>;
const productD: RequiredProduct = {
    id: 3,
    name: "Monitor",
    price: 300,
    description: "A high-resolution monitor"
};
console.log(`Required Product: ${JSON.stringify(productD)}`);

// Readonly Utility Type-make all properties of a type readonly
type ReadonlyProduct = Readonly<Product>;
const productE: ReadonlyProduct = {
    id: 4,
    name: "Keyboard",
    price: 100,
    description: "A mechanical keyboard"
};
console.log(`Readonly Product: ${JSON.stringify(productE)}`);

// Record Utility Type-create a type with a set of properties of a specific type
type ProductCatalog = Record<string, Product>;
const catalog: ProductCatalog = {
    laptop: productA,
    smartphone: productB,
    monitor: productD,
    keyboard: productE
};
console.log(`Product Catalog: ${JSON.stringify(catalog)}`);


// Module3 --> OOP in TypeScript

// Class and Object

class Animal {
    constructor(public name: string, public species: string, public age: number) { }

    printInfo(): void {
        console.log(`Animal Info: Name: ${this.name}, Species: ${this.species}, Age: ${this.age}`);
    }

}

const animal = new Animal("Leo", "Lion", 5); // Create an instance of the Animal class
animal.printInfo(); //  Output: "Animal Info: Name: Leo, Species: Lion, Age: 5"

// Inheritance

class parent {
    name: string; // parent class properties
    id: number;
    address: string;
    constructor(name: string, id: number, address: string) {
        this.name = name;
        this.id = id;
        this.address = address;
    }
    showInfo(): void {
        console.log(`Parent Info: Name: ${this.name}, ID: ${this.id}, Address: ${this.address}`);
    }
}

class student extends parent {
    major: string;
    gpa: number;
    constructor(name: string, id: number, address: string, major: string, gpa: number) {
        super(name, id, address); // Call the parent class constructor
        this.major = major;
        this.gpa = gpa;
    }
    showStudentInfo(): void {
        this.showInfo();
        console.log(`Student Info: Major: ${this.major}, GPA: ${this.gpa}`);
    }

}

class teacher extends parent {
    designation: string; // public by default
    salary: number;
    subjects: string[];
    constructor(name: string, id: number, address: string, designation: string, salary: number, subjects: string[]) {
        super(name, id, address);
        this.designation = designation;
        this.salary = salary;
        this.subjects = subjects;
    }
    showTeacherInfo(): void {
        this.showInfo();
        console.log(`Teacher Info: Designation: ${this.designation}, Salary: ${this.salary}, Subjects: ${this.subjects.join(", ")}`);
    }
}

const parent1 = new parent("John", 1, "789 Pine St");
console.log("----Parent Info----");
parent1.showInfo();

const student111 = new student("Alice", 101, "123 Main St", "Computer Science", 3.8);

console.log("----Student Info----");
student111.showStudentInfo();

const teacher111 = new teacher("Bob", 201, "456 Elm St", "Professor", 60000, ["Math", "Physics"]);
console.log("----Teacher Info----");
teacher111.showTeacherInfo();


// Access Modifiers

class BankAccount {
    private accountNumber: string; // private property, when not mentioned it is public by default
    protected balance: number;
    public accountHolderName: string;

    constructor(accountNumber: string, accountHolderName: string, initialBalance: number) {
        this.accountNumber = accountNumber;
        this.accountHolderName = accountHolderName;
        this.balance = initialBalance;


    }
    public deposit(amount: number): void {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited: ${amount}. New Balance: ${this.balance}`);
        } else {
            console.log("Deposit amount must be positive.");
        }
    }
    public getBalance(): number {
        return this.balance;
    }
}

const myAccount = new BankAccount("123456789", "Salah", 1000);

myAccount.deposit(500);
console.log(`Current Balance: ${myAccount.getBalance()}`);

// Abstract Classes and Methods- abstract class cannot be instantiated and can contain abstract methods that must be implemented by derived classes
abstract class Shape {
    abstract area(): number; // abstract method, must be implemented by derived classes, this is a method signature without implementation
    abstract perimeter(): number;

    displayInfo(): void {
        console.log(`Area: ${this.area()}, Perimeter: ${this.perimeter()}`);
    }
}
class Rectangle extends Shape {
    constructor(private width: number, private height: number) {
        super(); // Call the parent class constructor
    }

    area(): number { // Implementing the abstract method area
        return this.width * this.height;
    }
    perimeter(): number { // Implementing the abstract method perimeter
        return 2 * (this.width + this.height);
    }
}
class Circle extends Shape {
    constructor(private radius: number) {
        super();
    }

    area(): number {
        return Math.PI * this.radius * this.radius;
    }
    perimeter(): number {
        return 2 * Math.PI * this.radius;
    }
}
const rectangle = new Rectangle(10, 5);
console.log("----Rectangle Info----");
rectangle.displayInfo();
const circle = new Circle(7);
console.log("----Circle Info----");
circle.displayInfo();


// Interfaces in OOP- interface defines a contract that classes can implement, specifying the structure and behavior that the implementing class must follow. It allows for defining the shape of an object, including properties and methods, without providing implementation details. Interfaces are used to achieve abstraction and polymorphism in TypeScript, enabling different classes to implement the same interface while providing their own specific implementations.
interface Vehicle {
    start(): void;
    stop(): void;
    getSpeed(): number;
}
class CarVehicle implements Vehicle {
    private speed: number;

    constructor() {
        this.speed = 0;
    }

    start(): void {
        this.speed = 60;
        console.log("Car started.");
    }
    stop(): void {
        this.speed = 0;
        console.log("Car stopped.");
    }
    getSpeed(): number {
        return this.speed;
    }
}
const myCarVehicle = new CarVehicle();
myCarVehicle.start();
console.log(`Current Speed: ${myCarVehicle.getSpeed()}`); // Output: "Current Speed: 60"
myCarVehicle.stop();
console.log(`Current Speed: ${myCarVehicle.getSpeed()}`); // Output: "Current Speed: 0"
// Module4 --> Decorators in TypeScript

// Class Decorator- a class decorator is a special type of decorator that can be applied to a class declaration. It allows you to modify or enhance the behavior of the class in some way. A class decorator is a function that takes the constructor of the class as an argument and can return a new constructor or modify the existing one.
function Logger(constructor: Function) {
    console.log(`Class Decorator: ${constructor.name} has been created.`);
}
@Logger // this means the Logger decorator will be applied to the PersonDecorated class, and it will log a message when the class is created.
class PersonDecorated {
    constructor(public name: string, public age: number) { }
}
const personDecorated = new PersonDecorated("Salah", 27);
console.log(`Person Decorated: Name: ${personDecorated.name}, Age: ${personDecorated.age}`);
// Method Decorator
function LogMethod(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
        console.log(`Method Decorator: Calling ${propertyKey} with arguments: ${JSON.stringify(args)}`);
        const result = originalMethod.apply(this, args);
        console.log(`Method Decorator: ${propertyKey} returned: ${JSON.stringify(result)}`);
        return result;
    }
}

// 3-3: Type guard using typeof & in operator

// Type Guard using typeof


type alpheNumeric = string | number;

const add = (a: alpheNumeric, b: alpheNumeric): alpheNumeric => {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
};

console.log(`Addition of numbers: ${add(5, 10)}`); // Output: "Addition of numbers: 15"
console.log(`Concatenation of strings: ${add("Hello, ", "TypeScript!")}`);
console.log(`Concatenation of string and number: ${add("The answer is: ", 42)}`); // Output: "Concatenation of string and number: The answer is: 42"

// Type Guard using in operator

type normalUser = {
    name: String;
}
type adminUser = {
    name: String;
    role: String;
}

const getUserInfo = (user: normalUser | adminUser): string => {
    if ("role" in user) {
        return `Admin User: Name: ${user.name}, Role: ${user.role}`;
    }
    return `Normal User: Name: ${user.name}`;
}

const normalUser1: normalUser = { name: "Alice" };
const adminUser1: adminUser = { name: "Bob", role: "Administrator" };

console.log(getUserInfo(normalUser1)); // Output: "Normal User: Name: Alice"
console.log(getUserInfo(adminUser1)); // Output: "Admin User: Name: Bob, Role: Administrator"

//3-4: Type guard using instance of

class AnimalInstance {
    name: string;
    species: string;
    constructor(name: string, species: string) {
        this.name = name;
        this.species = species;
    }
    makeSound(): void {
        console.log(`${this.name} makes a sound.`);
    }
}
class Dog extends AnimalInstance {
    constructor(name: string, species: string) {
        super(name, species);
    }
    makeBark(): void {
        console.log(`${this.name} says: Woof!`);
    }
}
class Cat extends AnimalInstance {
    constructor(name: string, species: string) {
        super(name, species);
    }
    makeMeow(): void {
        console.log(`${this.name} says: Meow!`);
    }
}

const animal1 = new Dog("Buddy", "Dog");
const animal2: AnimalInstance = new Cat("Whiskers", "Cat");


const isDog = (animal: AnimalInstance): animal is Dog => {
    return animal instanceof Dog;
}
const isCat = (animal: AnimalInstance): animal is Cat => {
    return animal instanceof Cat;
}

const makeAnimalSound = (animal: AnimalInstance): void => {
    if (isDog(animal)) {
        animal.makeBark();
    } else if (isCat(animal)) {
        animal.makeMeow();
    } else {
        animal.makeSound();
    }
}
makeAnimalSound(animal1); // Output: "Buddy says: Woof!"
makeAnimalSound(animal2); // Output: "Whiskers says: Meow!"


// Getters and Setters

class PersonWithGetSet {
    private _name: string;
    private _age: number;

    constructor(name: string, age: number) {
        this._name = name;
        this._age = age;
    }

    get name(): string {
        return this._name;
    }
    set name(newName: string) {
        if (newName.length > 0) {
            this._name = newName;
        } else {
            console.log("Name cannot be empty.");
        }
    }

    get age(): number {
        return this._age;
    }
    set age(newAge: number) {
        if (newAge > 0) {
            this._age = newAge;
        } else {
            console.log("Age must be a positive number.");
        }
    }
}

const personGetSet = new PersonWithGetSet("Salah", 27);
console.log(`Person Get/Set: Name: ${personGetSet.name}, Age: ${personGetSet.age}`); // Output: "Person Get/Set: Name: Salah, Age: 27"
personGetSet.name = "Ali"; // Update name using setter
personGetSet.age = 28; // Update age using setter
console.log(`Updated Person Get/Set: Name: ${personGetSet.name}, Age: ${personGetSet.age}`); // Output: "Updated Person Get/Set: Name: Ali, Age: 28"

// Static Properties and Methods

class MathUtils {
    static PI: number = 3.14159;

    static calculateCircleArea(radius: number): number {
        return MathUtils.PI * radius * radius;
    }
}

console.log(`Value of PI: ${MathUtils.PI}`); // Output: "Value of PI: 3.14159"
console.log(`Area of Circle with radius 5: ${MathUtils.calculateCircleArea(5)}`); // Output: "Area of Circle with radius 5: 78.53975"   

class Counter{
    private static count: number =0;
    static increment(): void{
        Counter.count++;
        console.log(`Current Count: ${Counter.count}`);
    }
    static decrement(): void{
        Counter.count--;
        console.log(`Current Count: ${Counter.count}`);
    }
}
Counter.increment(); // Output: "Current Count: 1"
Counter.increment(); // Output: "Current Count: 2"
Counter.decrement(); // Output: "Current Count: 1"
Counter.decrement(); // Output: "Current Count: 0"


// 04 philler of OOP in TypeScript
//1. Inheritance
//2. Polymorphism
//3. Abstract Classes and Methods
//4. Encapsulation



// polymorphism- polymorphism is a fundamental concept in object-oriented programming that allows objects of different classes to be treated as objects of a common superclass. It enables
// a single interface to represent different underlying forms (data types). In TypeScript, polymorphism can be achieved through method overriding, where a subclass provides a specific implementation of a method that is already defined in its superclass. This allows for dynamic method dispatch, where the appropriate method is called based on the actual type of the object at runtime, rather than the type of the reference variable.


class ShapePoly{
    getArea(): number{
        return 0; // Default implementation, can be overridden by derived classes
    }
}
class circlePoly extends ShapePoly{
    radious : number;
    constructor(radious : number){
        super();
        this.radious = radious;
    }
    getArea(): number {
        const area = Math.PI * this.radious * this.radious;
        return area;
    }

}
class rectanglePoly extends ShapePoly{
    width: number;
    height: number;
    constructor(width: number, height: number){
        super();
        this.width = width;
        this.height = height;
    }
    getArea(): number {
        const area = this.width * this.height;
        return area;
    }
}
const getAreaOfShape =(shape: ShapePoly): void =>{
    console.log(`Area of the ${shape.constructor.name}: ${shape.getArea()}`);
}
const shape1= new ShapePoly();
const circle1 = new circlePoly(5);
const rectangle1 = new rectanglePoly(10, 5);

getAreaOfShape(shape1); // Output: "Area of the Shape: 0"
getAreaOfShape(circle1); // Output: "Area of the Circle: 78.53981633974483"
getAreaOfShape(rectangle1); // Output: "Area of the Rectangle: 50"


// Abstract Classes and Methods- abstract class cannot be instantiated and can contain abstract methods that must be implemented by derived classes
abstract class EmployeeAbs {
    constructor(public name: string, public id: number) { }
    abstract calculateSalary(): number; // abstract method, must be implemented by derived classes
    displayInfo(): void {
        console.log(`Employee Info: Name: ${this.name}, ID: ${this.id}`);
    }
}
class FullTimeEmployee extends EmployeeAbs {
    constructor(name: string, id: number, private monthlySalary: number) {
        super(name, id);
    }
    calculateSalary(): number {
        return this.monthlySalary;
    }
}
class PartTimeEmployee extends EmployeeAbs {
    constructor(name: string, id: number, private hourlyRate: number, private hoursWorked: number) {
        super(name, id);
    }
    calculateSalary(): number {
        return this.hourlyRate * this.hoursWorked;
    }
}
const fullTimeEmp = new FullTimeEmployee("Alice", 101, 5000);
const partTimeEmp = new PartTimeEmployee("Bob", 102, 20, 80);

fullTimeEmp.displayInfo(); // Output: "Employee Info: Name: Alice, ID: 101"
console.log(`Full-Time Employee Salary: ${fullTimeEmp.calculateSalary()}`); // Output: "Full-Time Employee Salary: 5000"

partTimeEmp.displayInfo(); // Output: "Employee Info: Name: Bob, ID: 102"
console.log(`Part-Time Employee Salary: ${partTimeEmp.calculateSalary()}`); // Output: "Part-Time Employee Salary: 1600"   

//interfaces in OOP- interface defines a contract that classes can implement, specifying the structure and behavior that the implementing class must follow. It allows for defining the shape of an object, including properties and methods, without providing implementation details. Interfaces are used to achieve abstraction and polymorphism in TypeScript, enabling different classes to implement the same interface while providing their own specific implementations.


//idea
interface vehicleInterface {
    startEngine() : void;
    stopEngine() : void;
    getSpeed() : number;
}

class CarInterface implements vehicleInterface{
    startEngine(): void {
        console.log("Car engine started.");
    }
    stopEngine(): void {
        console.log("Car engine stopped.");
    }
    getSpeed(): number {
        return 60; // Example speed
    }

    testMethod(): void {
        console.log("This is a test method in CarInterface class.");
    }
}

const myCarInterface = new CarInterface();
myCarInterface.startEngine(); // Output: "Car engine started."
console.log(`Current Speed: ${myCarInterface.getSpeed()}`); // Output: "Current Speed: 60"
myCarInterface.stopEngine(); // Output: "Car engine stopped."
myCarInterface.testMethod(); // Output: "This is a test method in CarInterface class."

