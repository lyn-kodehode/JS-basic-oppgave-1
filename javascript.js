/******************************************************************************
OPPGAVE 1

Din første oppgave er å koble denne JavaScript-filen til index.html-filen
ved å bruke en av metodene vi viste i første forelesning.

<-- Finn index.html-filen i filutforskeren og koble den til denne filen,
javascript.js
******************************************************************************/

// Løs denne oppgaven i index.html

/******************************************************************************
OPPGAVE 2

I forrige undervisning lærte vi hvordan man lager variabler som kan holde ulike
typer verdier. Lag noen variabler med følgende datatyper:
- String (tekst)
- Number (tall)
- Boolean (sann/usann)
- Array (liste)

Du kan velge hva innholdet i variablene skal være. Prøv å bruke både let og 
const når du definerer variablene.
******************************************************************************/

// Skriv koden for oppgave 2 her
const sentence1 = "Let's";
const sentence2 = "The answer is";
let num1 = 10;
let num2 = 2;
const isInArray = true;
let operatorWordList = [
  "ADD",
  "SUBTRACT",
  "MULTIPLY",
  "DIVIDE",
  "INCREMENT",
  "DECREMENT",
];
let answer;
/******************************************************************************
OPPGAVE 3

Prøv ut noen av operatorene vi så på i forrige forelesning:
- Matematiske operatorer: +, -, /, *
- Forkortede operatorer: ++, --, +=, -=

Skriv noen eksempler der du tester disse operatorene.
******************************************************************************/

// Skriv koden for oppgave 3 her
console.log(sentence1, operatorWordList[0]);
console.log(`${num1} + ${num2}`);
answer = num1 + num2;
console.log(sentence2, answer);

console.log(sentence1, operatorWordList[1]);
console.log(`${num1} - ${num2}`);
answer = num1 - num2;
console.log(sentence2, answer);

console.log(sentence1, operatorWordList[2]);
console.log(`${num1} * ${num2}`);
answer = num1 * num2;
console.log(sentence2, answer);

console.log(sentence1, operatorWordList[3]);
console.log(`${num1} / ${num2}`);
answer = num1 / num2;
console.log(sentence2, answer);

console.log(`${sentence1} ${operatorWordList[4]} by 1`);
console.log(`${num1} increments by 1`);
num1++;
console.log(sentence2, num1);

console.log(`${sentence1} ${operatorWordList[5]} by 1`);
console.log(`${num2} decrements by 1`);
num2--;
console.log(sentence2, num2);

console.log(`${sentence1} ${operatorWordList[4]} by 1`);
console.log(`${num1} increments by ${num2}`);
num1 += num2;
console.log(sentence2, num1);

console.log(`${sentence1} ${operatorWordList[5]} by 1`);
console.log(`${num1} decrements by ${num2}`);
num1 -= num2;
console.log(sentence2, num1);

/******************************************************************************
OPPGAVE 4

Skriv en IF/ELSE-betingelse som sjekker følgende:
1. At userName ikke er tom ("").
2. At userAge er 18 eller eldre.
3. At userIsBlocked er false.

(TIPS: Bruk && (logisk OG) for å sjekke alle tre betingelsene i én IF-setning.)

- Hvis alle disse betingelsene er oppfylt, skal du sette variabelen
userIsLoggedIn til true og goToPage til "/home". Deretter skriver du ut en 
velkomstmelding med console.log.

- Hvis noen av betingelsene IKKE er oppfylt, skal du skrive ut en feilmelding
med console.log.

Prøv å endre verdiene på variablene for å sikre at IF/ELSE-setningen din 
håndterer alle tilfeller korrekt.
******************************************************************************/

let userName = "";
let userAge = 18;
let userIsLoggedIn = false;
let userIsBlocked = "";
let goToPage = "";

// Skriv koden for oppgave 4 her
// STRICT EQUALITY ON userISBlocked
// NO ACCESS is given
if (userName !== "" && userAge >= 18 && userIsBlocked === false) {
  userIsLoggedIn = true;
  goToPage = "/home";
  console.log(`https://my_website.com${goToPage}`);
  console.log("Welcome to your homepage!");
} else console.log("Sorry! You cannot log-in.");

// IMPLICIT EQUALITY ON userISBlocked
// ACCESS is still given
if (userName !== " " && userAge >= 18 && !userIsBlocked) {
  userIsLoggedIn = true;
  goToPage = "/home";
  console.log(`https://www.my_website.com${goToPage}`);
  console.log("Welcome to your homepage!");
} else console.log("Sorry! You cannot log-in.");

/******************************************************************************
OPPGAVE 5

Lag en variabel kalt userTitle og sett innholdet til å være:
- "Mr." hvis userMale er true, eller
- "Mrs." hvis userMale er false.

Bruk en ternary conditional for dette:

const variabel = betingelse ? "hvis sann" : "hvis usann";

Prøv å endre userMale til både true og false og bruk console.log for å sjekke
at betingelsen din fungerer som den skal.
******************************************************************************/

// Skriv koden for oppgave 5 her
const userMale = true;

const userTitle = userMale ? "Mr." : "Mrs.";
console.log(`Your title is ${userTitle}`);
