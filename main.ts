// Soft Reboot — Fortune Cookie Wisdom for Developers
// make.fun entry: one original fortune-cookie line for a software developer.
// The program is fully deterministic: it always writes the same single line
// to /output/entry.txt, so every grading run sees the identical entry.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";

// The fortune. Invented for this entry: an estimate is a promise made
// today that a future self must keep — the promiser and the keeper are
// the same developer, separated only by time. One sentence, one breath,
// 73 characters, well inside the 120-character gate.
export const FORTUNE =
  "Every estimate is a promise your future self has not yet learned to keep.";

export const OUTPUT_PATH = "/output/entry.txt";
export const MAX_CHARS = 120;

export function validateFortune(line: string): void {
  if (typeof line !== "string" || line.length === 0) {
    throw new Error("fortune must be a non-empty string");
  }
  if (line.trim().length === 0) {
    throw new Error("fortune must not be only whitespace");
  }
  if (line.length > MAX_CHARS) {
    throw new Error(
      `fortune is ${line.length} characters, over the ${MAX_CHARS} limit`,
    );
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("fortune must be a single line");
  }
  if (line !== line.trim()) {
    throw new Error("fortune must not start or end with whitespace");
  }
}

export function gateReport(line: string = FORTUNE): {
  chars: number;
  valid: boolean;
  singleLine: boolean;
} {
  const singleLine = !line.includes("\n") && !line.includes("\r");
  const valid =
    line.length >= 1 &&
    line.length <= MAX_CHARS &&
    line.trim().length > 0 &&
    singleLine;
  return { chars: line.length, valid, singleLine };
}

export function writeEntry(
  line: string = FORTUNE,
  outputPath: string = OUTPUT_PATH,
): string {
  validateFortune(line);
  mkdirSync(dirname(resolve(outputPath)), { recursive: true });
  writeFileSync(outputPath, line + "\n", "utf8");
  // Read it back and confirm what landed on disk is exactly the line.
  const written = readFileSync(outputPath, "utf8");
  if (written !== line + "\n") {
    throw new Error("round-trip check failed: entry.txt does not match");
  }
  return written;
}

function main(): void {
  const report = gateReport();
  if (!report.valid) {
    throw new Error(`fortune fails the gate: ${JSON.stringify(report)}`);
  }
  const written = writeEntry();
  const chars = written.trimEnd().length;
  console.log(`Wrote ${chars} characters to ${OUTPUT_PATH}`);
  console.log(written.trimEnd());
}

main();
