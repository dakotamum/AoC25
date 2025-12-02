import { readInput } from "../utils/readInput";

export function part1() {
  const input = readInput(__dirname);
  let rotations = input.split('\n');
  let dialPosition = 50;
  let zeroCount = 0;
  rotations.forEach((rotation) => {
    let direction = rotation.slice(0, 1);
    let number = Number(rotation.slice(1)) % 100;
    if (direction === 'R')
      dialPosition = (dialPosition + (number)) % 100;
    else {
      dialPosition -= number;
      if (dialPosition < 0)
        dialPosition += 100;
    }
    if (dialPosition === 0)
      ++zeroCount;
  });
  return zeroCount;
}

export function part2() {
  const input = readInput(__dirname);
  let rotations = input.split('\n');
  let dialPosition = 50;
  let passZeroCount = 0;
  rotations.forEach((rotation) => {
    let direction = rotation.slice(0, 1);
    let number = Number(rotation.slice(1));
    if (direction === 'R') {
      let newPos = dialPosition + number;
      passZeroCount += Math.floor(newPos / 100);
      dialPosition = (newPos) % 100;
    }
    else // direction === 'L'
    {
      let oldPos = dialPosition;
      let newPos = dialPosition - (number % 100);
      if (newPos <= 0) {
        if (oldPos != 0) {
          ++passZeroCount;
        }
        newPos = (newPos + 100) % 100;
      }
      passZeroCount += Math.floor(number / 100);
      dialPosition = newPos;
    }
  });
  return passZeroCount;
}
