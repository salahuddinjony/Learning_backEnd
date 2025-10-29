// TypeScript Basic Features Demonstration




//--- Module1 -----
let course: string = "Learning TypeScript";
console.log(`Hello, ${course}`);

let count : number = 42;
console.log(`Count is: ${count}`);
 

const user:{
    company: "BS 23", // literal type
   readonly position: String;
    name: String;
    age?: Number; // optional property
    email: String;

}= {
    position: "Developer",
    company: "BS 23",
    name: "Alice",
    age: 30,
    email: "alice@example.com"
 
}

// user.position='Senior Developer'; // Error: Cannot assign to 'position' because it is a read-only property
console.log(`User Info: ${user.company}, ${user.name}, ${user.age}, ${user.email}`);


const poorUser={
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



const mentor1={
    name: "Charlie",
    expertise: "TypeScript",
}
const mentor2={
    name: "Diana",
    expertise: "JavaScript",
}
const mentorsCombined={...mentor1, ...mentor2};
console.log(`Mentors Combined: ${JSON.stringify(mentorsCombined)}`);


// Using spread operator to combine objects

const myFriendList= (...friends:string[]) =>{
    console.log(`Friends List: ${friends.join(", ")}`);
    return friends;
}

myFriendList("Eve", "Frank", "Grace");

// Destructuring
const [first, second, ...rest] = combined;
console.log(`First: ${first}, Second: ${second}, Rest: ${rest}`);

const user2={
    age: 28,
    city: "New York",
    name:{
        firstName: "Hannah",
        middleName: "Lee",
        lastName: "Smith",

    }
}

// Nested destructuring with aliases(alias mane oponaam ba chondonaam)
const {age, city, name:{firstName : userFirstName, middleName: userMiddleName, lastName: userLastName}}=user2;

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

const student0:{
    id:number; 
    name:string;
    major:string; 
}={
    id:2,
    name:"Bob",
    major:"Mathematics"
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
type Add= (num1:number, num2:number) => number;

const addNumber:Add= (num1, num2) => num1 + num2;

console.log(`Addition: ${addNumber(5, 10)}`);


// Union and intersection Types


//union type
type myUser={
    name:string;
    email:string;
    age:number;
    gender: "female" | "male"; // union type
    bloodGroup: "A+" | "A-" | "B+" | "B-" | "O+" | "O-" | "AB+" | "AB-"; // union type

}

const userA: myUser={
    name:"Salah",
    email:"salah@example.com",
    age:30,
    gender:"male",
    bloodGroup:"O+"
};

// intersection type

type frontEndDeveloper={
    skills:string[];
    experience:number;
    designaitions1: "Junior Developer" | "Mid-level Developer" | "Senior Developer";

}

type backEndDeveloper={
    skills:string[];
    experience:number;
    designaitions2: "Junior Developer" | "Mid-level Developer" | "Senior Developer";
    
}

type fullStackDeveloper= frontEndDeveloper & backEndDeveloper;

const developer: fullStackDeveloper={
    skills:["JavaScript", "TypeScript", "Node.js", "React"],
    experience:5,
    designaitions1:"Senior Developer",
    designaitions2:"Mid-level Developer"
};


console.log(`Developer Skills: ${developer.skills.join(", ")}, Experience: ${developer.experience} years, Designation1: ${developer.designaitions1}, Designation2: ${developer.designaitions2}`);


// nullish coalescing operator
const userInput: string | null = null;
const defaultInput: string = "Default Value";
const finalInput: string = userInput ?? defaultInput;
console.log(`Final Input: ${finalInput}`);

// Never type, Unknown type, and Nullable type example

//nullable type
const searchName= (value: string | null )=>{
    if(value){
        console.log(`Searching for ${value}...`);
    }else{
        console.log("No name provided for search.");
    }
}

searchName(null);


//unknown type
let unknownValue = (value: unknown) => { return value };

if (typeof unknownValue("This is a string") === "string") {
    console.log(`Unknown Value: ${unknownValue(`${unknownValue("This is a string")}`)}`);
}if(typeof unknownValue(123) === "number"){
    console.log("Unknown Value is number.");
}if(typeof unknownValue(true) === "boolean"){
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

