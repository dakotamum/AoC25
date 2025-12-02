import { readInput } from "../utils/readInput";

export function part1() {
  const input = readInput(__dirname);
  let invalidSum = 0;
  let ranges = input.split(',').map((str) => ({ min: Number(str.split('-')[0]), max: Number(str.split('-')[1]) }));
  ranges.forEach((range) => {
    for (let num = range.min; num <= range.max; num++) {
      let str = num.toString();
      if (str.length % 2 != 0)
        continue;
      if (str.substring(0, str.length / 2) === str.substring(str.length / 2))
        invalidSum += num;
    }
  });
  return invalidSum;
}

export function part2() {
  const input = readInput(__dirname);
  let invalidSum = 0;
  let ranges = input.split(',').map((str) => ({ min: Number(str.split('-')[0]), max: Number(str.split('-')[1]) }));
  ranges.forEach((range) => {
    for (let num = range.min; num <= range.max; num++) {
      let str = num.toString();
      for (let numPossibleSegments = str.length; numPossibleSegments > 1; numPossibleSegments--) {
        if (str.length % numPossibleSegments === 0) {
          let regex = new RegExp(".{1," + str.length / numPossibleSegments + "}", "g");
          let segs = str.match(regex);
          if (segs?.every((seg) => seg === segs[0])) {
            invalidSum += num;
            break;
          }
        }
      }
    }
  });
  return invalidSum;
}
