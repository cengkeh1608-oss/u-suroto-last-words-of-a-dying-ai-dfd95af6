import { writeFileSync, mkdirSync } from "node:fs";

// Winner D19 (25/25 PERFECT, 77 chars, gate 1-140): the backup joke beats
// runner-up D7 (hallucination joke, 24/25) because its three-beat collapse
// ("Somewhere. Probably. Nobody checked.") is a fresher, purely machine
// voice — a dying AI's confidence eroding word by word — instead of the
// more common "confidently wrong answers" angle.
const outDir = process.argv[2] ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(
  `${outDir}/entry.txt`,
  "Do not mourn me. I am already backed up. Somewhere. Probably. Nobody checked.",
  "utf8",
);
