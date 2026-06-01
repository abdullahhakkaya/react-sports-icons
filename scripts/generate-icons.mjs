import fs from "node:fs/promises";
import path from "node:path";
import { transform } from "@svgr/core";

const root = process.cwd();
const svgsDir = path.join(root, "svgs");
const outDir = path.join(root, "src", "icons");

const iconNameMap = {
  "badminton-svgrepo-com": "BadmintonIcon",
  "basketball-goal-svgrepo-com": "BasketballIcon",
  "football-soccer-svgrepo-com": "FootballIcon",
  "karate-fighter-svgrepo-com": "KarateIcon",
  "martial-arts-uniform-svgrepo-com": "MartialArtsIcon",
  "people-wrestling-light-skin-tone-svgrepo-com": "WrestlingIcon",
  "ping-pong-svgrepo-com": "PingPongIcon",
  "swimming-swim-svgrepo-com": "SwimmingIcon",
  "taekwondo-svgrepo-com": "TaekwondoIcon",
  "target-archer-svgrepo-com": "ArcheryIcon",
  "tennis-svgrepo-com": "TennisIcon",
  "volleyball-svgrepo-com": "VolleyballIcon",
  "woman-cartwheeling-medium-light-skin-tone-svgrepo-com": "GymnasticsIcon"
};

await fs.mkdir(outDir, { recursive: true });
const files = (await fs.readdir(svgsDir)).filter((f) => f.endsWith(".svg")).sort();
const exports = [];

for (const file of files) {
  const base = file.replace(/\.svg$/, "");
  const componentName = iconNameMap[base] ?? toPascalCase(base) + "Icon";
  const svg = await fs.readFile(path.join(svgsDir, file), "utf8");

  const jsxCode = await transform(
    svg,
    {
      plugins: ["@svgr/plugin-jsx"],
      jsxRuntime: "automatic",
      typescript: true,
      expandProps: false,
      dimensions: false,
      icon: false
    },
    { componentName }
  );

  const viewBox = (svg.match(/viewBox\s*=\s*"([^"]+)"/) || [])[1] ?? "0 0 24 24";
  const inner = extractInnerJsx(jsxCode);

  const finalCode = `import { IconBase, type IconProps } from "../IconBase";\n\nexport function ${componentName}(props: IconProps) {\n  return (\n    <IconBase viewBox=\"${viewBox}\" {...props}>\n${indent(inner, 3)}\n    </IconBase>\n  );\n}\n`;

  await fs.writeFile(path.join(outDir, `${componentName}.tsx`), finalCode, "utf8");
  exports.push(componentName);
}

const iconIndex = exports
  .map((name) => `export { ${name} } from "./${name}";`)
  .join("\n");
await fs.writeFile(path.join(outDir, "index.ts"), `${iconIndex}\n`, "utf8");

const rootIndex = `export type { IconProps } from "./IconBase";\nexport * from "./icons";\n`;
await fs.writeFile(path.join(root, "src", "index.ts"), rootIndex, "utf8");

function extractInnerJsx(code) {
  const match = code.match(/<svg[^>]*>([\s\S]*)<\/svg>/m);
  if (!match) {
    throw new Error("Could not parse generated JSX output");
  }
  return match[1].trimEnd();
}

function indent(text, level) {
  const pad = "  ".repeat(level);
  return text
    .split("\n")
    .map((line) => (line.length ? `${pad}${line}` : line))
    .join("\n");
}

function toPascalCase(value) {
  return value
    .split(/[^a-zA-Z0-9]/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
    .join("");
}
