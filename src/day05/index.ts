import { readInput } from "../utils/readInput";

export function part1() {
  const input = readInput(__dirname);
  let numFreshIngredients = 0;
  let ranges = (input.split("\n\n")[0]).split('\n').map((range) => ({min: Number(range.split('-')[0]), max: Number(range.split('-')[1])}));
  let ingredients = input.split("\n\n")[1].split('\n').map(ingredient => Number(ingredient));

  for (let ingredient of ingredients)
  {
    if (ranges.some((range) => ingredient >= range.min && ingredient <= range.max))
      ++numFreshIngredients;
  }
  return numFreshIngredients;
}

export function part2() {
  const input = readInput(__dirname);
  let ranges = (input.split("\n\n")[0]).split('\n').map((range) => ({min: Number(range.split('-')[0]), max: Number(range.split('-')[1])}));
  let didConsolidate = false;
  do
  {
    didConsolidate = false;
    let indexToRemove = -1;
    for (let i = 0; i < ranges.length - 1; i++)
    {
      for (let j = i + 1; j < ranges.length; j++)
      {
        let myRange = ranges[i];
        let otherRange = ranges[j];
        if (myRange.min >= otherRange.min && myRange.min <= otherRange.max ||
          myRange.max >= otherRange.min && myRange.max <= otherRange.max ||
          otherRange.min >= myRange.min && otherRange.min <= myRange.max ||
          otherRange.max >= myRange.min && otherRange.max <= myRange.max)
        {
          let newMin = Math.min(myRange.min, otherRange.min);
          let newMax = Math.max(myRange.max, otherRange.max);
          ranges[j] = {min: newMin, max: newMax};
          indexToRemove = i;
          break;
        }
      }
      if (indexToRemove >= 0)
        break;
    }
    if (indexToRemove >= 0)
    {
      ranges.splice(indexToRemove, 1);
      didConsolidate = true;
    }
  }while(didConsolidate);
  let numFreshIngredients = ranges.reduce((acc, range) => acc + (range.max - range.min) + 1, 0);
  return numFreshIngredients;
}
