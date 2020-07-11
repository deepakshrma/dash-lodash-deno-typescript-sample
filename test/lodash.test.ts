import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { unique } from "../src/lodash.ts";

Deno.test("unique #1", () => {
  assertEquals(typeof unique, "function", "Unique is not defined!");
});

Deno.test("unique #2", () => {
  const uniqueValues = unique([1, 2, 3, 1]);
  assertEquals(uniqueValues.length, 3, "Unique is not working");
  assertEquals(uniqueValues, [1, 2, 3]);
  console.log("✅ All looks good");
});
