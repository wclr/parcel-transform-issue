/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
//@ts-check
const { transformEnums } = require(".")

const sample = `
enum Type {
  PropA,
  PropB,

  PropO = "Other",

  PropZ
}
`

const expected = `
enum Type {
  PropA = "PropA",
  PropB = "PropB",
  
  PropO = "Other",

  PropZ = "PropZ"
}
`

const actual = transformEnums(sample)
const removeSpaces = (t) => t.replace(/\s/g, "")

if (removeSpaces(actual) !== removeSpaces(expected)) {
  console.log("actual: " + removeSpaces(actual) + "|")
  console.log("expect: " + removeSpaces(expected) + "|")
  throw "Test failed."
}
