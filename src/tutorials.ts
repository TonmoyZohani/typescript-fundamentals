/************Type Annotations************ */

// let greeting:string = "This is just a game";
// console.log(greeting.toUpperCase());
// let age:number = 50;
// console.log(age-20);
// let isAdult:boolean = age>=18;
// console.log(isAdult)

/************Union Type****************** */

// let tax: number | string;
// tax = 10;
// console.log(tax)

// const books = ["Rich Dad & Poor Dad", "1984", "My Name Is Khan"];
// let foundBook: string | undefined ;

// for (let book of books) {
//   if (book === "1983") {
//     foundBook = book;
//     break;
//   }
// }

// console.log(foundBook?.length);

// let status: "success" | "pending" | "error";

// status = "success";
// console.log(status);

/*******************Array****************** */

// let randomArr: (number | string)[] = ["Tonmoy", 12];
// console.log("Print", randomArr);

/*******************Objects****************** */

// let car: { brand: string; year: number } = { brand: "Toyota", year: 1984 };
// console.log("Print", car);

// type Person = {
//   name: string;
//   age?: number;
// };

// const person1: Person = {
//   name: "Tonmoy",
//   age: 28,
// };

// const person2: Person = {
//   name: "Karim",
// };

// console.log("Print", person1);
// console.log("Print", person2);

/*******************Functions****************** */

// const names: string[] = ["Rasel", "Karim", "Zabir", "Hamim"];

// const isNameInList = (name: string): boolean => {
//   return names.includes(name);
// };

// let givenName: string = "Karim";

// if (isNameInList(givenName)) {
//   console.log(`${givenName} in the list`);
// } else {
//   console.log(`Not in the list`);
// }

// const calculatePrice = (price: number, discount?: number): number => {
//   return price - (discount || 0);
// };

// let priceAfterDiscount = calculatePrice(200, 20);
// console.log(priceAfterDiscount);

// const calculateScore = (initialScore: number, penaltyPoints: number = 0) => {
//   return initialScore - penaltyPoints;
// };

// console.log(calculateScore(250));

// const sum = (message: string, ...numbers: number[]): string => {
//   const doubled = numbers.map((num) => num * 2);
//   console.log(doubled);

//   let total = numbers.reduce((prev, crr) => {
//     return prev + crr;
//   }, 0);

//   return `${message}: ${total}`;
// };

// let result = sum(`The total is`, 1, 2, 3, 4, 5);
// console.log(result);

// const createStudent = (student: { id: number; name: string }): void => {
//   console.log(`Welcome ${student?.name.toUpperCase()} to our course...`);
// };

// const newStudent = {
//   name: "Tonmoy",
//   id: 846,
// };

// createStudent(newStudent);

// const processData = (
//   input: string | number,
//   config: { reverse: boolean } = { reverse: false }
// ): any => {
//   if (typeof input === "number") {
//     return input * input;
//   } else {
//     return input.toUpperCase();
//   }
// };

// console.log(processData(10, { reverse: true }));

/*******************Type Alias****************** */

// const john: { name: string; id: number; isActive: boolean } = {
//   id: 1,
//   name: "John",
//   isActive: true,
// };

// const susan: { name: string; id: number; isActive: boolean } = {
//   id: 2,
//   name: "Susan",
//   isActive: false,
// };

// const createUser = (user: {
//   name: string;
//   id: number;
//   isActive: boolean;
// }): { name: string; id: number; isActive: boolean } => {
//   return `Hello ${user.name},your is is ${user.id}`;
// };

// console.log(createUser(susan));

// type StringOrNumber = string | number;
// let value: StringOrNumber;
// value = "Tonmoy";
// value = 52;

// type Employee = { id: number; name: string; department: string };
// type Manager = { id: number; name: string; employees: Employee[] };
// type Staff = Employee | Manager;

// const printStaffDetails = (staff: Staff): void => {
//   if ("employees" in staff) {
//     console.log(
//       `${staff.name} is the manager who has ${staff.employees.length} employees`
//     );
//   } else {
//     console.log(
//       `${staff.name} is an employee in the ${staff.department} department.`
//     );
//   }
// };

// const karim: Employee = { id: 1, name: "Karim", department: "IT" };
// const selim: Employee = { id: 2, name: "Selim", department: "Sales" };
// const tonmoy: Manager = { id: 3, name: "Tonmoy", employees: [karim, selim] };

// printStaffDetails(tonmoy);
// printStaffDetails(karim);

// interface Book {
//   readonly isbn: number;
//   title: string;
//   author: string;
//   genre?: string;

//   //method
//   printAuthor(): void;
//   printTitle(message: string): string;
// }

// const deepWork: Book = {
//   isbn: 9781455586691,
//   title: "Deep Work",
//   author: "Cal Newport",
//   genre: "Self-help",

//   printAuthor() {
//     console.log(this.author);
//   },
//   printTitle(message) {
//     return `${this.title} ${message}`;
//   },
// };

// deepWork.printAuthor();
// console.log(deepWork.printTitle("This is a game"));

// interface Computer {
//   readonly id: number;
//   brand: string;
//   ram: number;
//   upgradeRam(increase: number): number;
//   storage?: number;
// }

// const laptop: Computer = {
//   id: 1,
//   brand: "Ryzen 5",
//   ram: 16,
//   upgradeRam(amount: number) {
//     this.ram += amount;
//     return this.ram;
//   },
// };

// laptop.storage = 256;

// console.log(laptop.upgradeRam(8));
// console.log(laptop);

// interface Person {
//   name: string;
// }

// interface DogOwner extends Person {
//   dogName: string;
// }

// interface Manager extends Person {
//   managePeople(): void;
//   delegateTasks(): void;
// }

// const employee: Person | DogOwner | Manager = getEmployee();
// console.log(employee);

// function getEmployee(): Person | DogOwner | Manager {
//   const random = Math.random();

//   if (random < 0.33) {
//     return {
//       name: "john",
//     };
//   } else if (random < 0.66) {
//     return {
//       name: "sarah",
//       dogName: "Rex",
//     };
//   } else {
//     return {
//       name: "bob",
//       managePeople: () => console.log("Managing people..."),
//       delegateTasks: () => console.log("Delegating tasks..."),
//     };
//   }
// }

// let person: [string, number] = ["john", 25];
// console.log(person[0]);
// console.log(person[1]);

// let john: [string, number?] = ["john"];

// function getPerson(): [string, number] {
//   return ["john", 25];
// }

// let randomPerson = getPerson();
// console.log(randomPerson[0]);
// console.log(randomPerson[1]);

/*******************Enums****************** */

// enum UserRole {
//   Admin = 200,
//   Manager,
//   Employee,
// }

// // Define a type alias named User
// type User = {
//   id: number;
//   name: string;
//   role: UserRole;
//   contact: [string, string]; // Tuple: [email, phone]
// };

// // Define a function named createUser
// function createUser(user: User): User {
//   return user;
// }

// // Call the createUser function
// const user: User = createUser({
//   id: 1,
//   name: "John Doe",
//   role: UserRole.Admin,
//   contact: ["john.doe@example.com", "123-456-7890"],
// });

// console.log(user);

// interface Accessory {
//   brand: string;
// }

// class Necklace implements Accessory {
//   kind: string;
//   brand: string;
//   constructor(brand: string, kind: string) {
//     this.brand = brand;
//     this.kind = kind;
//   }
// }

// class Bracelet implements Accessory {
//   brand: string;
//   year: number;
//   constructor(brand: string, year: number) {
//     this.brand = brand;
//     this.year = year;
//   }
// }

// const getRandomAccessory = (): Accessory => {
//   return Math.random() < 0.5
//     ? new Bracelet("Cartier", 2021)
//     : new Necklace("TASAKI", "Choker");
// };

// let accessory = getRandomAccessory();

// console.log(accessory)

// if (accessory instanceof Bracelet) {
//   console.log("Bracelet year:", accessory.year);
// }

// if (accessory instanceof Necklace) {
//   console.log("Necklace brand:", accessory.brand);
// }

// function StudentId(x: string | number) {
//     if (typeof x == 'string') {
//         console.log('Student');
//     }
//     if (typeof x === 'number') {
//         console.log('Id');
//     }
// }
// StudentId(`446`); //prints Student
// StudentId(446); //prints Id

type RGB = {
  r: number;
  g: number;
  b: number;
};

type HSL = {
  h: number;
  s: number;
  l: number;
};

const colors: (RGB | HSL)[] = [
  { r: 255, g: 0, b: 0 }, // Red in RGB
  { h: 0, s: 100, l: 50 }, // Red in HSL
  { r: 0, g: 255, b: 0 }, // Green in RGB
  { h: 120, s: 100, l: 50 }, // Green in HSL
  { r: 0, g: 0, b: 255 }, // Blue in RGB
  { h: 240, s: 100, l: 50 }, // Blue in HSL
];

const student: [number, string, boolean] = [1251, "Tonmoy", true];
console.log(student);