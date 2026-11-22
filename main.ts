// The Drawer That Moves — one 275-character text, written to /output/entry.txt.
import { writeFileSync } from "node:fs";

const text =
  "At the pasar senja, the stall keeper locks a drawer every evening and goes home. Every morning it is locked again, just as she left it. Only one thing is different: the dried lampion petal inside has moved — yesterday to the left, today to the right. No one else has the key.";

writeFileSync("/output/entry.txt", text, "utf8");
