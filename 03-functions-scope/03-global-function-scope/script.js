// alert('Hello');
// console.log(innerWidth);

// Global scope variable
const x = 100;

console.log(x, 'in global');

function run() {
  // Access global vars in functions
  console.log(window.innerHeight);
  console.log(x, 'in function');
}

run();

// Access global vars in blocks
if (true) {
  console.log(x, 'in block');
}

function add() {
  const x = 1;
  const y = 50;
  console.log(x + y);
}

console.log(y);

add();
