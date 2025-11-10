// TypeScript Basic Features Demonstration




//--- Module1 -----
let course: string = "Learning TypeScript";
console.log(`Hello, ${course}`);

let count: number = 42;
console.log(`Count is: ${count}`);


const user: {
    company: "BS 23", // literal type
    readonly position: String;
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
    expertise: "TypeScript",
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
console.log(`Final Input: ${finalInput}`);

// Never type, Unknown type, and Nullable type example

//nullable type
const searchName = (value: string | null) => {
    if (value) {
        console.log(`Searching for ${value}...`);
    } else {
        console.log("No name provided for search.");
    }
}

searchName(null);


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
    throw new Error(message);
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

// Type Alias
type Bike = {
    name: string;
    model: number;
    engineNumber: string;
    price: number;
}
type BikeDetails = Bike & { description: string };

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
   if(userInfo.indexOf(user) !== userInfo.length -1){
     console.log('---');
   }
});


//Generic Tuple
type GenericTuple<X, Y> = [X, Y];
const tuple: GenericTuple<string, number> = ["Age", 30];

console.log(`Tuple: ${tuple[0]} - ${tuple[1]}`);

type usedUser={
    name: string;
    email: string;
}
type studentUser={
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

for(const key in developer1){
    const value= developer1[key as keyof typeof developer1];
    if(typeof value==='object'){
        console.log(`${key}:`);
        for(const subKey in value){ 
            console.log(`  ${subKey}: ${value[subKey as keyof typeof value]}`);  
        }
    }else{
        console.log(`${key}: ${value}`);
    }
}
console.log(`Developer 2: ${developer2.name}`);
for(const key in developer2){
    const value= developer2[key as keyof typeof developer2];
    if(typeof value==='object'){
        console.log(`${key}:`);
        for(const subKey in value){ 
            console.log(`  ${subKey}: ${value[subKey as keyof typeof value]}`);  
        }
    }else{
        console.log(`${key}: ${value}`);
    }
}

// function with Generic 


const genericFun=<T>(value: T) :T[]=>{
    return [value];
}

type GenericType1={
    id: number;
    score: number;
}

const result1= genericFun<string>("Hello TypeScript");
const result2= genericFun<GenericType1>({id:1, score:95});


result2.forEach((item, index)=>{
    console.log(`Result2 Item ${index + 1}:`);
    for(const key in item){
        console.log(`  ${key}: ${item[key as keyof typeof item]}`);
    }

});


const NextLevelFunctions= <T>(student: T) =>{
    const comment ='Student Info processed successfully.';
    return {
        ...student,
        comment

    }
}
const studentA={
    name: "Salah",
    age: 26,
    email: "salah@example.com"
}
const advancedStudent= NextLevelFunctions(studentA);

for(const key in advancedStudent){
    const value= advancedStudent[key as keyof typeof advancedStudent];
    if(typeof value !== 'function'){
        console.log(`${key}: ${value}`);
    }
}


// constraints in generics

// extending generic function with constraints, must have username and password properties ans also allow extra properties
const loginUser = <T extends { username: string; password: string; }>(user: T): T => {
    return user;
}
const loggedInUser = loginUser({ username: "testuser", password: "password123" , extraField: "extraValue" });
console.log(`Logged in User: ${loggedInUser.username}`);
console.log(`Password: ${loggedInUser.password}`);

// generic constraints using keyof

const getProperty = <T, K extends keyof T>(obj: T, key: K): T[K] => {
    return obj[key];
}
const userObj = {
    id: 1,
    name: "Salah",
    email: "salah@example.com"
}
const userName = getProperty(userObj, "name");
console.log(`User Name: ${userName}`);


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
// showData();


// const fetchUserData= async() =>{
//     const response =await fetch('https://jsonplaceholder.typicode.com/users/1');

//     if(!response.ok){
//         console.error("Failed to fetch user data.");
//         return;
//     }
//     const data = await response.json();
//     console.log(`Fetched User Data: ${JSON.stringify(data)}`);
// }
// fetchUserData();

// conditional types
type IsString<T> = T extends string ? "Yes, it's a string" : "No, it's not a string";

type Test1 = IsString<string>; // "Yes, it's a string"
type Test2 = IsString<number>; // "No, it's not a string"


const testString: Test1 = "Yes, it's a string";
const testNumber: Test2 = "No, it's not a string";
console.log(`Test1: ${testString}`);
console.log(`Test2: ${testNumber}`);


type Sheikh={
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

console.log(`Vehicle Test1: ${vehicleTest1}`);

// Mapped Types with Generics

const arrOfNumber = [1, 2, 3, 4, 5];

const arrOfString= arrOfNumber.map(
    (num)=> num.toString()
);
console.log(`Array of Strings: ${arrOfString}`);


type Person = {
    name: string;
    age: number;
    email: string;
}
type  ReadThePerson<T> ={
    [key in keyof T ] : T[key];
}

const personA: ReadThePerson<Person>={
    name: "Salah",
    age: 27,
    email: "salah@example.com"
}

for(const key in personA){
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
type PickedProduct = Pick<Product, "id" | "name" | "price">;
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

class Animal{
    constructor(public name:string, public species:string, public age:number){}

    printInfo(): void{
        console.log(`Animal Info: Name: ${this.name}, Species: ${this.species}, Age: ${this.age}`);
    }

}

const animal = new Animal("Leo", "Lion", 5);
animal.printInfo();

// Inheritance

class parent{
    name: string;
    id: number;
    address: string;   
    constructor(name: string, id: number, address: string){
        this.name= name;
        this.id= id;
        this.address= address;
    }
    showInfo(): void{
        console.log(`Parent Info: Name: ${this.name}, ID: ${this.id}, Address: ${this.address}`);
    }
}

class student extends parent{
    major:string;
    gpa:number;
    constructor(name:string, id:number, address:string, major:string, gpa:number){
        super(name, id, address);
        this.major= major;
        this.gpa= gpa;
    }
    showStudentInfo(): void{
        this.showInfo();
        console.log(`Student Info: Major: ${this.major}, GPA: ${this.gpa}`);
    }

}

class teacher extends parent{
    designation:string;
    salary:number;
    subjects:string[];
    constructor(name:string, id:number, address:string, designation:string, salary:number, subjects:string[]){
        super(name, id, address);
        this.designation= designation;
        this.salary= salary;
        this.subjects= subjects;
    }
    showTeacherInfo(): void{
        this.showInfo();
        console.log(`Teacher Info: Designation: ${this.designation}, Salary: ${this.salary}, Subjects: ${this.subjects.join(", ")}`);
    }
}

const parent1= new parent("John", 1, "789 Pine St");
console.log("----Parent Info----");
parent1.showInfo();

const student111= new student("Alice", 101, "123 Main St", "Computer Science", 3.8);

console.log("----Student Info----");
student111.showStudentInfo();

const teacher111= new teacher("Bob", 201, "456 Elm St", "Professor", 60000, ["Math", "Physics"]);
console.log("----Teacher Info----");
teacher111.showTeacherInfo();


// Access Modifiers

class BankAccount{
    private accountNumber: string;
    protected balance: number;
    public accountHolderName: string;

    constructor(accountNumber: string, accountHolderName: string, initialBalance: number){
        this.accountNumber= accountNumber;
        this.accountHolderName= accountHolderName;
        this.balance= initialBalance;


    }

    public deposit(amount:number): void{
        if(amount> 0){
            this.balance += amount;
            console.log(`Deposited: ${amount}. New Balance: ${this.balance}`);
        }else{
            console.log("Deposit amount must be positive.");
        }
    }
    public getBalance(): number{
        return this.balance;
    }
}

const myAccount= new BankAccount("123456789", "Salah", 1000);

myAccount.deposit(500);
console.log(`Current Balance: ${myAccount.getBalance()}`);