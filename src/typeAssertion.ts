// let anything: any;

// anything = "Mezba";

// const kgToGMConverter = (
//   input: string | number
// ): string | number | undefined => {
//   if (typeof input === "number") {
//     return input * 1000;
//   } else if (typeof input === "string") {
//     const [value] = input.split(" ");
//     return `Converted output is: ${Number(value) * 1000}`;
//   }
// };

// const result1 = kgToGMConverter(2) as number;

// console.log({ result1 });

// const result2 = kgToGMConverter("2 kg") as string;

// console.log({ result2 });

// type CustomError = {
//   meesage: string;
// };

// try {
// } catch (err) {
//   console.log((err as CustomError).meesage);
// }

// Used in API

// app.post("/user", (req: Request, res: Response) => {
//   const body = req.body as { name: string; age: number };
//   console.log(body.name, body.age);
//   res.send("User received");
// });