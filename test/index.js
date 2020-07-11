const { unique } = require("../lib/lodash");

const uniqueValues = unique([1, 2, 3, 1]);

if (uniqueValues.length === 4) throw new Error("Unique is not working");

console.log("✅ All looks good");
