const [diagnostics, emit, ...rest] = await Deno.bundle(
  "src/lodash.ts",
  undefined,
  {
    target: "es2015",
    lib: ["deno.ns"],
    sourceMap: true,
    moduleResolution: "node",
  }
);
await Deno.writeTextFileSync("lib/index.js", emit);
// console.log(emit, rest);
