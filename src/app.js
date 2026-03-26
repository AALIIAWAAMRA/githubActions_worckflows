function greet(name){
   return "Hello, " + name + "!";
}

module.exports = greet;
if (require.main === module) {
   const name = process.argv[2] || "World";
   console.log(greet(name));
}

console.log(`this is update for  pull request ${["ahmed", "sayed", "ali"].forEach(el => (console.log(el)
))} `);
