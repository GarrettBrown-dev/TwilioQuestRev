const argumentValue = process.argv[2];
const treeLifeStatus = Number(argumentValue);

const lifeNumber = 0;

if (treeLifeStatus === lifeNumber) {
  console.log("alive");
} else {
  console.log("other");
}
