const {readFileSync, writeFileSync} = require("fs")
console.log("START")

const first = readFileSync("./content/subfolder/first.txt", "utf8")
const second = readFileSync("./content/subfolder/second.txt", "utf8")

writeFileSync("./content/subfolder/result-sync.txt", `Here is the result: ${first}, ${second}`, {flag: "a"})

console.log("done with the task")
console.log("starting the next one")