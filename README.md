# TypeScript-এ Interface এবং Type এর মধ্যে পার্থক্য

### ১. Extend করা (Extending / Inheritance)
#### Interface
<p>TypeScript–এ interface খুব সহজেই অন্য interface বা এমনকি type–কে extend করতে পারে। অর্থাৎ, নতুন interface তৈরি করার সময় আগের interface-এর প্রপার্টিগুলো নিয়ে আরও নতুন প্রপার্টি যোগ করা যায়।</p>

```typescript
interface A { x: number }
interface B extends A { y: number }
```

#### Type
<p>type কে extend করার জন্য traditional extends ব্যবহার করা যায় না। বরং intersection (&) অপারেটর ব্যবহার করে দুই বা ততোধিক টাইপ JOIN করা হয়।</p>

```typescript
type A = { x: number }
type B = { y: number }
type C = A & B; 
```


### ২. Declaration Merging
#### Interface
<p>Interface “open” nature–এর, অর্থাৎ একই নামের interface বারবার define করলে TypeScript সবগুলোকে merge করে দেয়।/p>

```typescript
interface Person { name: string }
interface Person { age: number }

const p: Person = { name: "Rafi", age: 20 };
```

#### Type
<p>Type “closed”, অর্থাৎ একবার define করার পর আবার একই নামে type define করতে গেলে error আসবে।</p>

```typescript
type Person = { name: string }
type Person = { age: number } // ❌ Duplicate error
```

### ৩. Use Case (কখন কোনটি ব্যবহার করবেন)
#### Interface
<p>Interface ব্যবহার করুন যখন,</p>

- Object-এর shape define করতে চান
- Classes implement করতে চান
- দীর্ঘমেয়াদী, scalable structure দরকার


#### Type
<p>Type ব্যবহার করুন যখন,</p>

- ইউনিয়ন টাইপ দরকার: string | number
- Primitive alias দরকার: type ID = string | number
- Intersection তৈরি করতে চান: A & B

### ২. Capabilities (ক্ষমতা)
#### Interface
<p>Interface দিয়ে যা করা যায় না:</p>

- Union types তৈরি করা
- Conditional types
- Complex type transformation

#### Type
<p>Type দিয়ে যা করা যায়:</p>

- Union types তৈরি করা
```typescript
type Status = "success" | "error" | "loading";
```

- Mapped types তৈরি করা

```typescript
type Optional<T> = { [K in keyof T]?: T[K] };
```
- Conditional types তৈরি করা

```typescript
type IsString<T> = T extends string ? true : false;
```


# TypeScript-এ any, unknown, and never এর মধ্যে পার্থক্য

### ১. any Type

<p>any হল সবচেয়ে permissive টাইপ। TypeScript আপনার ভেরিয়েবলের উপর থেকে সব ধরনের টাইপ-চেকিং তুলে দেয়।</p>

-কিছুই চেক করে না
-যে কোনো ভ্যালু assign করা যায়
-যে কোনো অপারেশন করা যায় error দেবে না

```typescript
let value: any = 10;
value = "hello";
value.toUpperCase(); // OK (runtime error হলেও TS error দিবে না)
```

### ২. unknown Type

<p>unknown হলো নিরাপদ any।
যে কোনো ভ্যালু assign করা যায়, কিন্তু সেই ভ্যালু ব্যবহার করার আগে টাইপ-চেক করতে বাধ্য করে।</p>


```typescript
let value: unknown = "hello";

value.toUpperCase(); // ❌ Error: type check দরকার

if (typeof value === "string") {
  value.toUpperCase(); // ✔ Safe
}
```

### ৩. never Type

<p>never এমন একটি টাইপ যা কখনোই কোনো ভ্যালু ধারণ করতে পারে না।</p>


```typescript
let value: unknown = "hello";

value.toUpperCase(); // ❌ Error: type check দরকার

if (typeof value === "string") {
  value.toUpperCase(); // ✔ Safe
}
```

<p>এটি সাধারণত তিন ক্ষেত্রে দেখা যায়::</p>

- Function যেটি কিছু রিটার্ন করে না
```typescript
function throwError(msg: string): never {
  throw new Error(msg);
}
```

- Infinite loop

```typescript
function loopForever(): never {
  while (true) {}
}
```
- Exhaustive টাইপ চেকিং

```typescript
type Shape = "circle" | "square";

function handleShape(s: Shape) {
  if (s === "circle") {}
  else if (s === "square") {}
  else {
    const check: never = s; // ensures all cases are covered
  }
}
```

