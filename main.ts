// The Eleventh Leaf — a shoot grows where no water ever goes.
// In the back room of the sawah hut, the farmer counts leaves each morning.
// Ten yesterday, eleven today; the door was locked all night long.
// Eleven leaves today, and the pot has never once been watered.
import { writeFileSync, mkdirSync } from "node:fs";
const text = "In the back room of the sawah hut, where no window opens and no one carries water, a green shoot grows from a cracked clay pot. Each morning it has one more leaf. The farmer counts them, closes the door, and locks it. This morning there were eleven. Yesterday there were ten.";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
