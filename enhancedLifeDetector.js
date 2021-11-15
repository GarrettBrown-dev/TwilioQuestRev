const argumentValue = process.argv[2];
const treeLifeStatus = Number(argumentValue);

const life = 0;
const flowering = 1;
const shedding = 2;

if (treeLifeStatus === life) {
  console.log("alive");
} else if (treeLifeStatus === flowering) {
  console.log("flowering");
} else if (treeLifeStatus === shedding) {
  console.log("shedding");
} else {
  console.log("other");
}
