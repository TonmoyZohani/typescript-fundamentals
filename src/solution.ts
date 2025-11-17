/*============================================================================
 Problem - 1                         
============================================================================*/

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

console.log(formatValue("hello")); // HELLO
console.log(formatValue(5)); // 50
console.log(formatValue(true)); // 10

/*============================================================================
 Problem - 2                         
============================================================================*/

const getLength = (value: string | any[]): number => {
  if (typeof value === "string") {
    return value.length;
  } else if (Array.isArray(value)) {
    return value.length;
  }
  return 0;
};

console.log(getLength("typescript"));
console.log(getLength([10, 20, 30, 40]));

/*============================================================================
 Problem - 3                         
============================================================================*/

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
console.log(person1.getDetails());

const person2 = new Person("Alice", 25);
console.log(person2.getDetails());

/*============================================================================
 Problem - 4                         
============================================================================*/

interface Item {
  title: string;
  rating: number;
}

const filterByRating = (items: Item[]): Item[] => {
  return items.filter((item) => item.rating > 4);
};

const books = [
  { title: 'Book A', rating: 4.5 },
  { title: 'Book B', rating: 3.2 },
  { title: 'Book C', rating: 5.0 },
];

console.log(filterByRating(books));