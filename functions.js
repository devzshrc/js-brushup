function greet(name) {
  console.log(`Hello : ${name}`);
}

greet('Dev');
greet('blue');
greet('batman');

let globalVar = 'I am global';
function modifyGlobal() {
  globalVar = 'I am modified';
  console.log(globalVar);

  let blockScopeVar = 'I am block scoped';
  console.log(blockScopeVar);
}
// console.log(`blockScopeVar outside block: ${blockScopeVar}`);

modifyGlobal();
