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