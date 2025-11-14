// interface Developer<T, X = null> {
//   name: string;
//   salary: number;
//   device: {
//     brand: string;
//     model: string;
//     releasedYear: string;
//   };
//   smartWatch: T;
//   bike?: X;
// }

// interface BrandCharaWatch {
//   heartRate: string;
//   stopwatch: boolean;
// }

// interface AppleWatch {
//   heartRate: string;
//   callSupport: boolean;
//   calculator: boolean;
//   AiFeature: boolean;
// }

// const poorDeveloper: Developer<
//   BrandCharaWatch,
//   { brand: "Yamaha"; engineCapacity: "200cc" }
// > = {
//   name: "Mr. Poor",
//   salary: 20,
//   device: {
//     brand: "lenovo",
//     model: "A21",
//     releasedYear: "2010",
//   },
//   smartWatch: {
//     heartRate: "200",
//     stopwatch: true,
//   },
// };

// const richDeveloper: Developer<AppleWatch> = {
//   name: "Mr. Rich",
//   salary: 100,
//   device: {
//     brand: "hp",
//     model: "X34",
//     releasedYear: "2050",
//   },
//   smartWatch: {
//     heartRate: "200",
//     callSupport: true,
//     calculator: true,
//     AiFeature: true,
//   },
//   bike: null,
// };

// const add = (num1: number, num2: number = 0) => num1 + num2;

// add(2);

interface Developer<T, X = null> {
  name: string,
  salary: number,
  device: {
    brand: string,
    model: string,
    releasedYear: string
  },
  smartWatch: T
  bike?: X
}

interface BrandWatch {
  heartRate: string
  stopwatch: boolean
}

interface AppleWatch {
  heartRate: string;
  callSupport: boolean;
  calculator: boolean;
  AiFeature: boolean;
}

const poorDeveloper: Developer<BrandWatch,  { brand: string; engineCapacity: string }> = {
  name: "Mr. Poor",
  salary: 20,
  device: {
    brand: "lenovo",
    model: "A21",
    releasedYear: "2010",
  },
  smartWatch: {
    heartRate: "200",
    stopwatch: true,
  },
  bike: {
    brand: "Yamaha",
    engineCapacity: "200cc"
  }
}

const richDeveloper: Developer<AppleWatch> = {
  name: "Mr. Rich",
  salary: 25,
  device: {
    brand: "Mac Book",
    model: "M2",
    releasedYear: "2025",
  },
  smartWatch: {
    heartRate: "1000",
    callSupport: true,
    calculator: true,
    AiFeature: true,
  },
}

console.log(poorDeveloper);
console.log(richDeveloper)