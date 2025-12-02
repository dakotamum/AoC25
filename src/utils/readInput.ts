import { readFileSync } from "fs";
import { join } from "path";

export function readInput(dir: string): string {
  const path = join(dir, "input.txt");
  return readFileSync(path, "utf8").trimEnd();
}
