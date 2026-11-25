import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Fixed: sleep no longer crashes at 3 a.m. The 'just one more episode' exploit has been patched; waking up rested is now expected behavior.";

if (ENTRY.length < 1 || ENTRY.length > 160 || ENTRY.includes("\n")) {
  throw new Error(
    `entry must be 1-160 chars on a single line, got ${ENTRY.length}`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
