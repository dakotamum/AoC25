import { readInput } from "../utils/readInput";

export function part1() {
  const input = readInput(__dirname);
  let maxSums = 0;
  input.split('\n').forEach((line) => {
    let max = 0;
    for (let i = 0; i < line.length - 1; i++)
    {
      for (let j = i + 1; j < line.length; j++)
      {
        let num = Number(line[i] + line[j]);
        if (num > max)
          max = num;
      }
    }
    maxSums += max;
  });
  return maxSums;
}

export function part2() {
  const input = readInput(__dirname);
  let sums = 0;
  input.split('\n').forEach((line) => {
    let numbers = Array.from(line).map(char => ({value: Number(char), useMe: false}));
    for (let roundNum = 0; roundNum < 12; roundNum++)
    {
      let currentMaxPos = line.length - (12 - roundNum);
      for (let indexToCheck = currentMaxPos - 1; indexToCheck >= 0; indexToCheck--)
      {
        if (numbers[indexToCheck].useMe)
          break;
        if (numbers[indexToCheck].value >= numbers[currentMaxPos].value)
          currentMaxPos = indexToCheck;
      }
      numbers[currentMaxPos].useMe = true;
    }
    let numStr = "";
    numbers.forEach((num) => {
      if (num.useMe)
        numStr += num.value.toString();
    });
    sums += Number(numStr);
  });
  return sums;
}
