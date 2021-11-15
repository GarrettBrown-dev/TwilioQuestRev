class Materializer {
  constructor(targetName) {}
}

const m = new Materializer("Kevin");
console.log(m.activated);

m.activate();
console.log(m.activated);

console.log(materialize());
