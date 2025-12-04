import { readInput } from "../utils/readInput";

export function part1() {
  const input = readInput(__dirname);
  let rows = input.split('\n');
  let numAccessibleRolls = 0;
  for (let i = 0; i < rows.length; i++)
  {
    for (let j = 0; j < rows[i].length; j++)
    {
      let numRollNeighbors = 0;
      if (rows[i][j] === '@')
      {
        // check row above
        if (i > 0)
        {
          if (j > 0 && rows[i-1][j-1] === '@')
            ++numRollNeighbors;
          if (rows[i-1][j] === '@')
            ++numRollNeighbors;
          if (j < rows[i].length - 1 && rows[i-1][j+1] === '@')
            ++numRollNeighbors;
        }
        // check row below
        if (i < rows.length - 1)
        {
          if (j > 0 && rows[i+1][j-1] === '@')
            ++numRollNeighbors;
          if (rows[i+1][j] === '@')
            ++numRollNeighbors;
          if (j < rows[i].length - 1 && rows[i+1][j+1] === '@')
            ++numRollNeighbors;
        }
        // check left
        if (j > 0 && rows[i][j-1] === '@')
          ++numRollNeighbors;
        // check right
        if (j < rows[i].length - 1 && rows[i][j+1] === '@')
          ++numRollNeighbors;

        if (numRollNeighbors < 4)
          ++numAccessibleRolls;
      }
    }
  }
  return numAccessibleRolls;
}

export function part2() {
  const input = readInput(__dirname);
  let rows = input.split('\n').map((str) => str.split(""));
  let removedRolls = false;
  let numRemovedRolls = 0;

  do
  {
    removedRolls = false;
    for (let i = 0; i < rows.length; i++)
    {
      for (let j = 0; j < rows[i].length; j++)
      {
        let numRollNeighbors = 0;
        if (rows[i][j] === '@')
        {
          // check row above
          if (i > 0)
          {
            if (j > 0 && rows[i-1][j-1] === '@')
              ++numRollNeighbors;
            if (rows[i-1][j] === '@')
              ++numRollNeighbors;
            if (j < rows[i].length - 1 && rows[i-1][j+1] === '@')
              ++numRollNeighbors;
          }
          // check row below
          if (i < rows.length - 1)
          {
            if (j > 0 && rows[i+1][j-1] === '@')
              ++numRollNeighbors;
            if (rows[i+1][j] === '@')
              ++numRollNeighbors;
            if (j < rows[i].length - 1 && rows[i+1][j+1] === '@')
              ++numRollNeighbors;
          }
          // check left
          if (j > 0 && rows[i][j-1] === '@')
            ++numRollNeighbors;
          // check right
          if (j < rows[i].length - 1 && rows[i][j+1] === '@')
            ++numRollNeighbors;

          if (numRollNeighbors < 4)
          {
            rows[i][j] = '.';
            ++numRemovedRolls;
            removedRolls = true;
          }
        }
      }
    }
  }
  while(removedRolls);
  return numRemovedRolls;
}
