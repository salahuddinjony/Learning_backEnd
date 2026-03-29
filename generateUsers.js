const fs = require("fs");

const firstNames = ["Salah", "Rahim", "Karim", "Nusrat", "Tanvir", "Mim", "Fahim", "Jannat", "Arif", "Sadia"];
const lastNames = ["Uddin", "Ahmed", "Hasan", "Jahan", "Hossain", "Akter", "Rahman", "Islam", "Khan", "Noor"];
const interests = ["coding", "music", "sports", "Social", "Travel", "Reading", "Cooking", "Gaming", "Art", "Photography"]; // Added more interests
const skills = ["JavaScript", "Python", "Java", "C#", "Ruby", "Go", "PHP", "Swift", "Kotlin", "TypeScript"]; // Added skills
const favoriteBooks = ["The Great Gatsby", "To Kill a Mockingbird", "1984", "Pride and Prejudice", "The Catcher in the Rye", "Moby"];
const companys = ["Google", "Facebook", "Amazon", "Microsoft", "Apple", "Netflix", "Tesla", "SpaceX", "IBM", "Intel"]; // Added companies
const friends = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank", "Grace", "Heidi", "Ivan", "Judy"]; // Added friends
const occupations = ["Software Engineer", "Data Scientist", "Product Manager", "Designer", "Marketing Specialist", "Sales Representative", "HR Manager", "Financial Analyst", "Consultant", "Entrepreneur"]; // Added occupations
const countries = ["Bangladesh", "India", "Pakistan", "Nepal", "Sri Lanka", "Bhutan", "Maldives", "Afghanistan", "Myanmar", "China"]; // Added countries


const numberOfUsers = 100; // Change this to 50 if you want only 50 users
const users = [];

for (let i = 1; i <= numberOfUsers; i++) {
  const firstName = firstNames[i % firstNames.length];
  const lastName = lastNames[i % lastNames.length];

  users.push({
    _id: i,
    name: {
      firstName,
      lastName
    },
    email: `${firstName.toLowerCase()}${i}@gmail.com`,
    phone: `01710${String(i).padStart(6, "0")}`,
    gender: i % 2 === 0 ? "male" : "female",
    birthday: `200${i % 10}-0${(i % 9) + 1}-15`,
    age: 20 + (i % 10),
    role: i % 10 === 0 ? "admin" : "user",
    skills: Array.from({ length: Math.floor(Math.random() * 4) + 1 }, (_, j) => ({ //max 4 skills per user
      name: skills[(i + j) % skills.length],
      level: ["beginner", "intermediate", "advanced"][j], // Add skill level based on index-> beginner, intermediate, advanced
      isLearning: (i + j) % 4 === 0 // Randomly set some users as learning the skill
    })),
    favoriteBooks: {
      title: favoriteBooks[i % favoriteBooks.length],
      author: `${firstName} ${lastName}`,
      year: 2000 + (i % 20) // Add a publication year based on the index
    },
    occupations: {
      title: occupations[i % occupations.length],
      company: companys[i % companys.length],
      yearsOfExperience: (i % 10) + 1 // Add years of experience based on the index
    },
    friends: friends.slice(0, (i % 5) + 1), // Add some friends based on the index  
    interests: interests.slice(0, (i % 3) + 1) ,// Add some interests based on the index
    country:{
      countryName: countries[i % countries.length],
      postalCode: `100${i % 10}`, // Add a postal code based on the index
      streetAddress: `${i} Main Street` // Add a street address based on the index

    },
    salary: 30000 + (i * 1000) ,// Add a salary based on the index
    


  });
}

fs.writeFileSync("users.json", JSON.stringify(users, null, 2)); // Change the file name if you want to save it as something else
console.log(`✅ users.json with ${numberOfUsers} items created!`);

