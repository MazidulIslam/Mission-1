//naming convention for type is FirstLetter is Capital
type CrushType = {
  name: string;
  age?: number;
  profession: string;
  address: string;
};

// const crush1: {
//   name: string;
//   age: number;
//   profession: string;
//   address: string;
// } = {
//   name: 'Someone',
//   age: 33,
//   profession: 'Engineer',
//   address: 'Dhaka',
// };
// const crush2: {
//   name: string;
//   age?: number;
//   profession: string;
//   address: string;
// } = {
//   name: 'Someone2',
//   age: 28,
//   profession: 'Doctor',
//   address: 'Chittagong',
// };
const crush1: CrushType = {
  name: 'Someone',
  age: 33,
  profession: 'Engineer',
  address: 'Dhaka',
};
const crush2: CrushType = {
  name: 'Someone2',
  //   age: 28,
  profession: 'Doctor',
  address: 'Chittagong',
};

type CrushMarriedType = boolean;
const isMarried: CrushMarriedType = false;

type OperationType = (x: number, y: number) => number;
const calculate = (
  num1: number,
  num2: number,
  operation: OperationType //(x: number, y: number) => number;
) => {
  return operation(num1, num2);
};
let ans = calculate(10, 20, (a, b) => a + b);
console.log(crush1, crush2, ans);
