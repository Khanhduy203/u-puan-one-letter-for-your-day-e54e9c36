import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One Letter for Your Day: the entry is a single letter, A to Z, standing
// for the hidden word behind the day. Z for zonked — the day the couch won.
const letter = "Z";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), letter, "utf8");
