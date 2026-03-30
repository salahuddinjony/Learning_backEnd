"use strict";
// TypeScript Basic Features Demonstration
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
//--- Module1 -----
let course = "Learning TypeScript";
console.log(`Hello, ${course}`);
let count = 42;
console.log(`Count is: ${count}`);
const user = {
    position: "Developer",
    company: "BS 23",
    name: "Alice",
    age: 30,
    email: "alice@example.com"
};
// user.position='Senior Developer'; // Error: Cannot assign to 'position' because it is a read-only property
console.log(`User Info: ${user.company}, ${user.name}, ${user.age}, ${user.email}`);
const poorUser = {
    name: "Bob",
    balance: 0,
    addBalance(balance) {
        return `Hello ${this.name}, your new balance is ${this.balance + balance}`;
    },
};
console.log(`Transaction: ${poorUser.addBalance(100)}`);
//spread operator and destructuring
const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
num1.push(...[7, 8, 9]);
// Using spread operator to combine arrays
const combined = [...num1, ...num2];
console.log(`Combined: ${combined}`);
const mentor1 = {
    name: "Charlie",
    expertise: "TypeScript",
};
const mentor2 = {
    name: "Diana",
    expertise: "JavaScript",
};
const mentorsCombined = Object.assign(Object.assign({}, mentor1), mentor2);
console.log(`Mentors Combined: ${JSON.stringify(mentorsCombined)}`);
// Using spread operator to combine objects
const myFriendList = (...friends) => {
    console.log(`Friends List: ${friends.join(", ")}`);
    return friends;
};
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
};
// Nested destructuring with aliases(alias mane oponaam ba chondonaam)
const { age, city, name: { firstName: userFirstName, middleName: userMiddleName, lastName: userLastName } } = user2;
//type assertion
let someValue = "This is a string";
let strLength = someValue.length;
console.log(`String Length: ${strLength}`);
const employee1 = {
    id: 1,
    name: "Hank",
    department: "Engineering",
};
console.log(`Employee: ${employee1.name}, Department: ${employee1.department}`);
const student0 = {
    id: 2,
    name: "Bob",
    major: "Mathematics"
};
console.log(`Student: ${student0.name}, Major: ${student0.major}`);
const student1 = {
    id: 1,
    name: "Alice",
    major: "Computer Science",
};
console.log(`Student: ${student1.name}, Major: ${student1.major}`);
const addNumber = (num1, num2) => num1 + num2;
console.log(`Addition: ${addNumber(5, 10)}`);
const userA = {
    name: "Salah",
    email: "salah@example.com",
    age: 30,
    gender: "male",
    bloodGroup: "O+"
};
const developer = {
    skills: ["JavaScript", "TypeScript", "Node.js", "React"],
    experience: 5,
    designaitions1: "Senior Developer",
    designaitions2: "Mid-level Developer"
};
console.log(`Developer Skills: ${developer.skills.join(", ")}, Experience: ${developer.experience} years, Designation1: ${developer.designaitions1}, Designation2: ${developer.designaitions2}`);
// nullish coalescing operator
const userInput = null;
const defaultInput = "Default Value";
const finalInput = userInput !== null && userInput !== void 0 ? userInput : defaultInput;
console.log(`Final Input: ${finalInput}`);
// Never type, Unknown type, and Nullable type example
//nullable type
const searchName = (value) => {
    if (value) {
        console.log(`Searching for ${value}...`);
    }
    else {
        console.log("No name provided for search.");
    }
};
searchName(null);
//unknown type
let unknownValue = (value) => { return value; };
if (typeof unknownValue("This is a string") === "string") {
    console.log(`Unknown Value: ${unknownValue(`${unknownValue("This is a string")}`)}`);
}
if (typeof unknownValue(123) === "number") {
    console.log("Unknown Value is number.");
}
if (typeof unknownValue(true) === "boolean") {
    console.log("Unknown Value is boolean.");
}
else {
    console.log("Unknown Value is not a string.");
}
// never type
const throwError = (message) => {
    throw new Error(message);
};
// Uncommenting the line below will throw an error
// throwError("This is a never type error!");
console.log("TypeScript basic features demonstration completed.");
//-----Modul2 ------> Explore advanced type of TypeScript
//type assertion 
let someData = "TypeScript is awesome!";
let dataLength = someData.length;
console.log(`Data Length: ${dataLength}`);
const kgToGm = (value) => {
    if (typeof value === "number") {
        return value * 1000;
    }
    else if (typeof value === "string") {
        const parsedValue = parseFloat(value);
        if (!isNaN(parsedValue)) {
            return parsedValue * 1000;
        }
    }
    throw new Error("Invalid input");
};
console.log(`500 kg in gm: ${kgToGm('500')} gm`);
const myBike = {
    name: "Honda",
    model: 2019,
    engineNumber: "ENG654321",
    price: 1500000,
    description: "A reliable bike"
};
console.log(`Bike Info: ${myBike.name}, Model: ${myBike.model}, Price: ${myBike.price}, Description: ${myBike.description}`);
const myCar = {
    name: "Toyota",
    model: 2020,
    engineNumber: "ENG123456",
    price: 3000000,
    description: "A comfortable car"
};
console.log(`Car Info: ${myCar.name}, Model: ${myCar.model}, Price: ${myCar.price}, Description: ${myCar.description}`);
const numbers1 = [1, 2, 3, 4, 5];
console.log(`Numbers: ${numbers1.join(", ")}`);
const strings1 = ["one", "two", "three", "four", "five"];
console.log(`Strings: ${strings1.join(", ")}`);
const genericNumbers = [10, 20, 30, 40, 50];
const genericStrings = ["ten", "twenty", "thirty", "forty", "fifty"];
const genericBooleans = [true, false, true, false, true];
console.log(`Generic Numbers: ${genericNumbers.join(", ")}`);
console.log(`Generic Strings: ${genericStrings.join(", ")}`);
console.log(`Generic Booleans: ${genericBooleans.join(", ")}`);
//Generic Function
const genericIdentity = (arg) => {
    return arg;
};
console.log(`Generic Identity Number: ${genericIdentity(100)}`);
const userInfo = [
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
const tuple = ["Age", 30];
console.log(`Tuple: ${tuple[0]} - ${tuple[1]}`);
const userTuple = [
    { name: 'Salah', email: 'salah@example.com' },
    { stdId: '1001', major: 'Computer Science' }
];
userTuple.forEach((item, index) => {
    console.log(`Tuple Item ${index + 1}: ${JSON.stringify(item)}`);
});
const user11 = {
    field1: "Name",
    field2: 30
};
console.log(`User: ${user11.field1} - ${user11.field2}`);
const developer1 = {
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
const developer2 = {
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
    const value = developer1[key];
    if (typeof value === 'object') {
        console.log(`${key}:`);
        for (const subKey in value) {
            console.log(`  ${subKey}: ${value[subKey]}`);
        }
    }
    else {
        console.log(`${key}: ${value}`);
    }
}
console.log(`Developer 2: ${developer2.name}`);
for (const key in developer2) {
    const value = developer2[key];
    if (typeof value === 'object') {
        console.log(`${key}:`);
        for (const subKey in value) {
            console.log(`  ${subKey}: ${value[subKey]}`);
        }
    }
    else {
        console.log(`${key}: ${value}`);
    }
}
// function with Generic 
const genericFun = (value) => {
    return [value];
};
const result1 = genericFun("Hello TypeScript");
const result2 = genericFun({ id: 1, score: 95 });
result2.forEach((item, index) => {
    console.log(`Result2 Item ${index + 1}:`);
    for (const key in item) {
        console.log(`  ${key}: ${item[key]}`);
    }
});
const NextLevelFunctions = (student) => {
    const comment = 'Student Info processed successfully.';
    return Object.assign(Object.assign({}, student), { comment });
};
const studentA = {
    name: "Salah",
    age: 26,
    email: "salah@example.com"
};
const advancedStudent = NextLevelFunctions(studentA);
for (const key in advancedStudent) {
    const value = advancedStudent[key];
    if (typeof value !== 'function') {
        console.log(`${key}: ${value}`);
    }
}
// constraints in generics
// extending generic function with constraints, must have username and password properties ans also allow extra properties
const loginUser = (user) => {
    return user;
};
const loggedInUser = loginUser({ username: "testuser", password: "password123", extraField: "extraValue" });
console.log(`Logged in User: ${loggedInUser.username}`);
console.log(`Password: ${loggedInUser.password}`);
// generic constraints using keyof
const getProperty = (obj, key) => {
    return obj[key];
};
const userObj = {
    id: 1,
    name: "Salah",
    email: "salah@example.com"
};
const userName = getProperty(userObj, "name");
console.log(`User Name: ${userName}`);
const testString = "Yes, it's a string";
const testNumber = "No, it's not a string";
console.log(`Test1: ${testString}`);
console.log(`Test2: ${testNumber}`);
const vehicleTest1 = "All vehicles are available";
console.log(`Vehicle Test1: ${vehicleTest1}`);
// Mapped Types with Generics
const arrOfNumber = [1, 2, 3, 4, 5];
const arrOfString = arrOfNumber.map((num) => num.toString());
console.log(`Array of Strings: ${arrOfString}`);
const personA = {
    name: "Salah",
    age: 27,
    email: "salah@example.com"
};
for (const key in personA) {
    console.log(`${key}: ${personA[key]}`);
}
const productA = {
    id: 1,
    name: "Laptop",
    price: 1500
};
console.log(`Picked Product: ${JSON.stringify(productA)}`);
const productB = {
    id: 2,
    name: "Smartphone",
    price: 800
};
console.log(`Omitted Product: ${JSON.stringify(productB)}`);
const productC = {
    name: "Tablet"
};
console.log(`Partial Product: ${JSON.stringify(productC)}`);
const productD = {
    id: 3,
    name: "Monitor",
    price: 300,
    description: "A high-resolution monitor"
};
console.log(`Required Product: ${JSON.stringify(productD)}`);
const productE = {
    id: 4,
    name: "Keyboard",
    price: 100,
    description: "A mechanical keyboard"
};
console.log(`Readonly Product: ${JSON.stringify(productE)}`);
const catalog = {
    laptop: productA,
    smartphone: productB,
    monitor: productD,
    keyboard: productE
};
console.log(`Product Catalog: ${JSON.stringify(catalog)}`);
// Module3 --> OOP in TypeScript
// Class and Object
class Animal {
    constructor(name, species, age) {
        this.name = name;
        this.species = species;
        this.age = age;
    }
    printInfo() {
        console.log(`Animal Info: Name: ${this.name}, Species: ${this.species}, Age: ${this.age}`);
    }
}
const animal = new Animal("Leo", "Lion", 5);
animal.printInfo();
// Inheritance
class parent {
    constructor(name, id, address) {
        this.name = name;
        this.id = id;
        this.address = address;
    }
    showInfo() {
        console.log(`Parent Info: Name: ${this.name}, ID: ${this.id}, Address: ${this.address}`);
    }
}
class student extends parent {
    constructor(name, id, address, major, gpa) {
        super(name, id, address);
        this.major = major;
        this.gpa = gpa;
    }
    showStudentInfo() {
        this.showInfo();
        console.log(`Student Info: Major: ${this.major}, GPA: ${this.gpa}`);
    }
}
class teacher extends parent {
    constructor(name, id, address, designation, salary, subjects) {
        super(name, id, address);
        this.designation = designation;
        this.salary = salary;
        this.subjects = subjects;
    }
    showTeacherInfo() {
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
    constructor(accountNumber, accountHolderName, initialBalance) {
        this.accountNumber = accountNumber;
        this.accountHolderName = accountHolderName;
        this.balance = initialBalance;
    }
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited: ${amount}. New Balance: ${this.balance}`);
        }
        else {
            console.log("Deposit amount must be positive.");
        }
    }
    getBalance() {
        return this.balance;
    }
}
const myAccount = new BankAccount("123456789", "Salah", 1000);
myAccount.deposit(500);
console.log(`Current Balance: ${myAccount.getBalance()}`);
// Abstract Classes and Methods
class Shape {
    displayInfo() {
        console.log(`Area: ${this.area()}, Perimeter: ${this.perimeter()}`);
    }
}
class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    area() {
        return this.width * this.height;
    }
    perimeter() {
        return 2 * (this.width + this.height);
    }
}
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    area() {
        return Math.PI * this.radius * this.radius;
    }
    perimeter() {
        return 2 * Math.PI * this.radius;
    }
}
const rectangle = new Rectangle(10, 5);
console.log("----Rectangle Info----");
rectangle.displayInfo();
const circle = new Circle(7);
console.log("----Circle Info----");
circle.displayInfo();
class CarVehicle {
    constructor() {
        this.speed = 0;
    }
    start() {
        this.speed = 60;
        console.log("Car started.");
    }
    stop() {
        this.speed = 0;
        console.log("Car stopped.");
    }
    getSpeed() {
        return this.speed;
    }
}
const myCarVehicle = new CarVehicle();
myCarVehicle.start();
console.log(`Current Speed: ${myCarVehicle.getSpeed()}`);
myCarVehicle.stop();
console.log(`Current Speed: ${myCarVehicle.getSpeed()}`);
// Module4 --> Decorators in TypeScript
// Class Decorator
function Logger(constructor) {
    console.log(`Class Decorator: ${constructor.name} has been created.`);
}
let PersonDecorated = (() => {
    let _classDecorators = [Logger];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var PersonDecorated = _classThis = class {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    };
    __setFunctionName(_classThis, "PersonDecorated");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        PersonDecorated = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return PersonDecorated = _classThis;
})();
const personDecorated = new PersonDecorated("Salah", 27);
console.log(`Person Decorated: Name: ${personDecorated.name}, Age: ${personDecorated.age}`);
// Method Decorator
function LogMethod(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`Method Decorator: Calling ${propertyKey} with arguments: ${JSON.stringify(args)}`);
        const result = originalMethod.apply(this, args);
        console.log(`Method Decorator: ${propertyKey} returned: ${JSON.stringify(result)}`);
        return result;
    };
}
//# sourceMappingURL=index.js.map