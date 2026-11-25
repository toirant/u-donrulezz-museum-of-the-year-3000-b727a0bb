// Museum of the Year 3000 — make.fun entry
// https://make.fun/bounty/u-donrulezz-museum-of-the-year-3000-b727a0bb
//
// The program writes exactly one line to /output/entry.txt: the museum
// label a museum in the year 3000 places beside a parking meter from
// today. The joke is the year-3000 misreading: the curators assume the
// meter rented out the ground itself, since the car was already parked
// on it. Deadpan, dated like a real label, no explanation of the joke.
//
// The output is a fixed string, so every run writes the same bytes.
// The gate allows 1 to 200 characters of UTF-8 text; this label is 101.

import { mkdirSync, writeFileSync } from "node:fs";

const LABEL =
  "Parking Meter, c. 2024. Humans paid coins to borrow the ground their vehicle was already standing on.";

const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

function main(): void {
  // Hold the label to the same gate the sealed scorer applies: 1 to 200
  // characters of UTF-8 text, not only whitespace. Fail loudly here
  // rather than shipping a line the judge would never see.
  if (LABEL.length < 1 || LABEL.length > 200 || LABEL.trim().length === 0) {
    throw new Error(`label fails the 1-200 char gate: ${LABEL.length} chars`);
  }
  // Create the output directory if the grader has not mounted one yet.
  // Never remove it: the grader mounts it and deleting it fails the run.
  mkdirSync(OUT_DIR, { recursive: true });
  writeFileSync(OUT_FILE, LABEL, "utf8");
  console.log(`wrote ${LABEL.length} chars to ${OUT_FILE}`);
}

main();
