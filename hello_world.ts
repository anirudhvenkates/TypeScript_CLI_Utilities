console.log("Hello World!");

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question("What is your name? ", (name) => {
  readline.question("Where are you located? ", (location) => {
    console.log(`Hello, ${name}! You are from ${location}.`);
    readline.close();
  });
});
