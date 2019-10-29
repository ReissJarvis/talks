function* generator(i) {
  yield i;
  yield i + 10;
}

var gen = generator(10);

console.log(gen.next().value);
// // output: 10

console.log(gen.next().value);
// output: 20
