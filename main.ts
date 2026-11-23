import { writeFileSync } from "node:fs";

const text = "There is a room with one chair, one lamp, and one book open to a page that has never been turned. The book is about you. It stops, mid-sentence, at the exact moment you started reading it. The next page is blank.";

writeFileSync("/output/entry.txt", text, "utf8");
