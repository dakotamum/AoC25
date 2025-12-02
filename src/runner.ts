async function main() {
  const dayArg = process.argv[2];
  if (!dayArg) {
    console.error("Usage: npm run day -- <dayNumber>");
    process.exit(1);
  }

  const day = dayArg.toString().padStart(2, "0"); // "1" -> "01"
  const modulePath = `./day${day}/index.ts`;

  const dayModule = await import(modulePath).catch((err) => {
    console.error(`Could not load day ${day}:`, err);
    process.exit(1);
  });

  if (typeof dayModule.part1 === "function") {
    const result1 = await dayModule.part1();
    console.log(`Day ${day} — Part 1:`, result1);
  } else {
    console.log(`Day ${day} — Part 1: (no part1 function)`);
  }

  if (typeof dayModule.part2 === "function") {
    const result2 = await dayModule.part2();
    console.log(`Day ${day} — Part 2:`, result2);
  } else {
    console.log(`Day ${day} — Part 2: (no part2 function)`);
  }
}

main();
