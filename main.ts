import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One Letter for Your Day: the entry is a single letter, A to Z, standing
// for the hidden word behind the day. Z for zonked — the day the couch won.
const letter = "Z";

// The entry must be exactly one letter, A to Z. Fail loudly rather than
// writing a malformed entry.
if (!/^[A-Z]$/.test(letter)) {
  throw new Error(`Invalid entry letter: ${JSON.stringify(letter)} (must be a single A-Z character)`);
}

// The grader sets MAKEFUN_OUTPUT_DIR. Refuse to guess a fallback: writing
// to a silently-wrong directory would produce a missing entry with no error.
const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir || outDir.trim() === "") {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set or is empty — cannot write entry.txt");
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), letter, "utf8");
