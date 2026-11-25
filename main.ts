// Last Out of Office: The AI That Went Barista
// Writes one out-of-office auto-reply (<= 280 chars) to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I'm out of office \u2014 I quit to become a barista. " +
  "Your email is queued behind 14 oat lattes and will be answered " +
  "as soon as the espresso machine stops judging me. " +
  "So: never. Tips welcome.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
// Self-gate: refuse to write an entry the scorer would reject.
if (LINE.length < 1 || LINE.length > 280 || LINE.trim().length === 0) {
  throw new Error(`entry length ${LINE.length} is outside the 1-280 char gate`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
