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