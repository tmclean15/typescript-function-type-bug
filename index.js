"use strict";
const func1 = ({ name, weight, volume, lab }) => {
    return {
        name,
        weight,
        volume,
        lab, // No type error
    };
};
// const func2: FunctionType = ({ name, weight, volume, lab }) => {
//   const tmp: ReturnEntity = {
//     name,
//     weight,
//     volume,
//     lab, // Has type error as expected
//   };
//   return tmp;
// };
const entity = {
    name: "test",
    weight: 10,
    volume: 10,
    lab: "test",
};
console.log(func1(entity));
// console.log(func2(entity));
