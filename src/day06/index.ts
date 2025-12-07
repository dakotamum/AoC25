import { readInput } from "../utils/readInput";
import { readFileSync } from "fs";
import { join } from "path";

export function part1() {
  const input = readInput(__dirname);
  let numberRows = input.split('\n').slice(0, -1).map(row => row.split(" ").filter(char => char !== '').map(num => Number(num)));
  let operators = input.split('\n').pop()?.split(" ").filter(char => char !== '');
  if (!operators)
    return "Could not read in operators";

    let sumOfResults = 0;
    for (let j = 0; j < operators.length; j++)
    {
      if (operators[j] === '*')
        sumOfResults += numberRows.map(row => row[j]).reduce((acc, num) => acc * num);
      else
        sumOfResults += numberRows.map(row => row[j]).reduce((acc, num) => acc + num);
    }
    return sumOfResults;
}

export function part2() {
  const path = join(__dirname, "input.txt");
  const input = readFileSync(path, "utf8");

  let numberRows = input.split('\n').slice(0, -1);
  let operators = input.split('\n').pop();
  if (!operators)
    return "Could not read in operators";

  let sumOfResults = 0;
  let currentOperator = '';
  let numbersToProcess: number[] = [];
  for (let i = 0; i < operators.length; i++)
  {
    let currentStringNum = "";
    numberRows.forEach(row => {
      let numChar = row[i];
      if (numChar !== '')
        currentStringNum += numChar;
    });
    if (operators[i] !== ' ' || i === operators.length - 1)
    {
      if (numbersToProcess.length > 0)
      {
        if (currentOperator === '*')
          sumOfResults += numbersToProcess.reduce((acc, num) => Math.max(acc, 1) * num, 1);
        else
          sumOfResults += numbersToProcess.reduce((acc, num) => acc + num);
        numbersToProcess = [];
      }
      currentOperator = operators[i];
    }
    if (currentStringNum !== "" && Number(currentStringNum) !== 0 && currentStringNum != '')
      numbersToProcess.push(Number(currentStringNum));
  }
  return sumOfResults;
}
