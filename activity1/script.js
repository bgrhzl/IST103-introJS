//activity1
//alert("Hello World");

//activity2

// Variables describing a random person
const name = "John Doe"; // String variable for person's name
let age = 30; // Integer variable for person's age
let isStudent = true; // Boolean variable indicating if the person is a student
let height = 175.5; // Float variable for person's height in centimeters
let hobbies = ["reading", "playing guitar", "hiking"]; // Array variable listing person's hobbies
let address = { // Object variable containing person's address details
    street: "123 Main Street",
    city: "Anytown",
    country: "USA"
};
let job = null; // Null variable indicating person's job is unknown
let partner; // Undefined variable for person's partner
const EARTH_GRAVITY = 9.8; // Constant variable for Earth's gravity (m/s^2)

console.log("Person's name is " + name);
console.log("Person's age is " + age);
console.log("Is the person a student? " + isStudent);
console.log("Person's height is " + height + "cm");
console.log("Person's hobbies include: " + hobbies.join(", "));
console.log("Person lives at " + address.street + ", " + address.city + ", " + address.country);
console.log("Person's job: " + job);
console.log("Person's partner: " + partner);
console.log("Earth's gravity constant: " + EARTH_GRAVITY + " m/s^2");

//activity3
const toDoList = ["Finish homework", "Go for a run", "Buy groceries", "Call mom"];

const lamp = {
    brand: "IKEA",
    color: "white",
    type: "desk lamp",
    isOn: false
};

console.log("My to-do list includes: " + toDoList.join(", "));
console.log("My lamp is a " + lamp.color + " " + lamp.brand + " " + lamp.type + ".");
