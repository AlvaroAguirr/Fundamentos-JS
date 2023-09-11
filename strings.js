// Strings en JS

let miString="Este Es uN TeXTO" +'de PrUeBa';
console.log(miString);

console.log(miString.charAt(5));
console.log(miString.endsWith("a"));
console.log(miString.length);
console.log(miString.repeat(2));
console.log(miString.toLowerCase());
console.log(miString.toUpperCase());

console.log ("i'm Alvaro ");

console.log ('i\'m Alvaro');

// Strings multilena 
const menu = `
1 - Opcion 1
2 - Opcion 2
3 - Opcion 3 
`;

console.log(menu);

// Strings Tmeplates
// placeholders ${}

const name = "peter";
const superhero =' Spiderman';
const age =20;

console.log("soy" + name+ "soy " + superhero + "y tengo " + age +"años")
console.log(`soy ${name} soy ${superhero} y tengo ${age} años`);