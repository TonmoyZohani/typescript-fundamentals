// const cricketer: { readonly type: "Player"; name: string; age: number } = {
//   type: "Player",
//   name: "Tonmoy",
//   age: 25,
// };
// console.log(cricketer);

// type Player = {
//   type: "Player";
//   name: string;
//   age: number;
// };

// const player: Player = {
//   type: "Player",
//   name: "Tonmoy",
//   age: 25,
// };

// console.log(player);

// const playerDetails = (cricketer: Player, heighest: number): string => {
//   return `${cricketer.name} is ${cricketer.age} years old.His best is ${heighest} meters.`;
// };

// console.log(playerDetails(player, 123));

const sendInvite = (...friends: string[]) => {
  console.log(friends);
  friends.map((friend: string): void => {
    console.log(friend);
  });
};

sendInvite("Tonmoy", "Karim", "Zabir", "Hamid");

// const sendInvite = (...friends: string[]): void => {
//   console.log(friends);
// };

// sendInvite("Tonmoy", "Karim", "Zabir", "Hamid");

// const sendInvite = (...friends: string[]): void => {
//   console.log(friends);
// };

// sendInvite("Tonmoy", "Karim", "Zabir", "Hamid");

type Person = {
  name: string;
  age: number;
};
