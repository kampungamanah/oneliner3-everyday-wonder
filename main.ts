import { writeFileSync, mkdirSync } from "node:fs";

function writeEntry(): void {
  const parts: string[] = [
    "At 2 a.m. the fridge light comes on like a private sunrise,",
    "and the leftovers briefly believe it is morning.",
  ];
  const sentence = parts.join(" ");
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", sentence, { encoding: "utf8" });
}

writeEntry();
