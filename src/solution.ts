const formatValue = (
  value: string | number | boolean
): string | number | boolean => {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else if (typeof value === "boolean") {
    return !value;
  }

  return value;
};


const getLength = (value: string | any[]): number => {
  if (typeof value === "string") {
    return value.length;
  } else if (Array.isArray(value)) {
    return value.length;
  }
  return 0;
};


class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

const person1 = new Person("John Doe", 30);
const person2 = new Person("Alice", 25);


interface Item {
  title: string;
  rating: number;
}

const filterByRating = (items: Item[]): Item[] => {
  return items.filter((item) => item.rating > 4);
};

const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 },
];



type UserType = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

function filterActiveUsers(users: UserType[]): UserType[] {
  return users.filter((user) => {
    if (typeof user.isActive === "boolean") {
      return user.isActive === true;
    }
    return false;
  });
}

const users = [
  { id: 1, name: "Rakib", email: "rakib@example.com", isActive: true },
  { id: 2, name: "Asha", email: "asha@example.com", isActive: false },
  { id: 3, name: "Rumi", email: "rumi@example.com", isActive: true },
];


interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

function printBookDetails(book: Book): void {
  const availability = book.isAvailable ? "Yes" : "No";
  console.log(
    `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availability}`
  );
}

const myBook: Book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  publishedYear: 1925,
  isAvailable: true,
};

printBookDetails(myBook);


const getUniqueValues = (
  arr1: (number | string)[],
  arr2: (number | string)[]
): (number | string)[] => {

  const uniqueArr: (number | string)[] = [];

  for (let i = 0; i < arr1.length; i++) {
    let isDuplicate = false;

    for (let j = 0; j < uniqueArr.length; j++) {
      if (uniqueArr[j] === arr1[i]) {
        isDuplicate = true;
        break;
      }
    }

    if (!isDuplicate) {
      uniqueArr[uniqueArr.length] = arr1[i];
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    let isDuplicate = false;

    for (let j = 0; j < uniqueArr.length; j++) {
      if (uniqueArr[j] === arr2[i]) {
        isDuplicate = true;
        break;
      }
    }

    if (!isDuplicate) {
      uniqueArr[uniqueArr.length] = arr2[i];
    }
  }

  return uniqueArr;
};

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];


interface Product {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
}

function calculateTotalPrice(products: Product[]): number {
  if (products.length === 0) {
    return 0;
  }

  const productTotals = products.map(product => {
    const baseTotal = product.price * product.quantity;
    
    if (product.discount !== undefined && product.discount > 0) {
      return baseTotal * (1 - product.discount / 100);
    }
    
    return baseTotal;
  });

  return productTotals.reduce((sum, total) => sum + total, 0);
}

const products = [
  { name: 'Pen', price: 10, quantity: 2 },
  { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
  { name: 'Bag', price: 50, quantity: 1, discount: 20 },
];


