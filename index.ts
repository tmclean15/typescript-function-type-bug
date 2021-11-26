type Entity = {
  name: string;
  weight: number;
  volume: number;
  lab: string;
};

type ReturnEntity = {
  name: string;
  weight: number;
  volume: number;
};

type FunctionType = (entity: Entity) => ReturnEntity;

const func1: FunctionType = ({ name, weight, volume, lab }) => {
  return {
    name,
    weight,
    volume,
    lab, // No type error
  };
};

const func2: FunctionType = ({ name, weight, volume, lab }) => {
  const tmp: ReturnEntity = {
    name,
    weight,
    volume,
    lab, // Has type error as expected
  };

  return tmp;
};

const func3 = ({ name, weight, volume, lab }: Entity): ReturnEntity => {
  return {
    name,
    weight,
    volume,
    lab, // Also has type error as expected
  };
};

const entity: Entity = {
  name: "test",
  weight: 10,
  volume: 10,
  lab: "test",
};

console.log(func1(entity));
console.log(func2(entity));
