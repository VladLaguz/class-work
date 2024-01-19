const myNumbers = [3, 5, -4, 8, 11, -1];
const sum = 10;
const findPairs = (nums, target) => {
  // Основной цикл
  for (let i = 0; i < nums.length; i++) {
    const numFirst = nums[i];
    // Вложенный цикл
    for (let j = i + 1; j < nums.length; j++) {
      const numSecond = nums[j];
      // Условие
      if (numFirst + numSecond === target) {
        // Условие выполняется
        return [numFirst, numSecond];
      }
    }
  }
  return [];
};

const result = findPairs(myNumbers, sum);

console.log(result);
