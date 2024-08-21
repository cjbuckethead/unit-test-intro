export const fizBuzz = (input: number) => {
  if (input === 0) {
    throw new Error('input cant be 0');
  }
  if (input > 15) {
    throw new Error('input cant be more than 10');
  }

  const array = createArray(input);

  const fizBuzzArray = array.map((item) => {
    let string = '';
    if (item % 3 === 0) {
      string += 'fizz';
    }
    if (item % 5 === 0) {
      string += 'buzz';
    }
    if (!string) {
      return item;
    }
    return string;
  });

  return fizBuzzArray.join(', ')
};

const createArray = (input: number) => {
  const array = [];
  for (let i = 1; i <= input; i++) {
    array.push(i);
  }
  return array;
};
