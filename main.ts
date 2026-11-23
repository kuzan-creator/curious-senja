// The Brass Scale — one impossibility, tested every morning for eleven years.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "At the pasar senja, the brass scale settles at exactly one kilo every morning — a sack of rice, a single dried chilli, it makes no difference. The stall keeper has checked the weights, the hinge, the table. It has done this for eleven years. Tomorrow she will weigh the rain.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
