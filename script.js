console.log("js ok")


/* 
1- Aggiungere in HTML il tag con l'id da richiamare
2- Richiamare l'id 
3- Dichiare la variabile "message" e assegnarle il valore "La tua password è:"
4- Dichiarare la variabile "number" e assegnarle il valore "23" (numero o stringa?)
5- Chiedere all'utente il nome (prompt)
6- Dichiarare la variabile "firstname" e assegnarle il valore in risposta al promt
7- Chiedere all'utente il cognome (prompt)
8- Dichiarare la variabile "lastname" e assegnarle il valore in risposta al promt
9- Chiedere all'utente il colore preferito (prompt)
10- Dichiarare la variabile "color" e assegnarle il valore in risposta al promt
11- Dichiarare la variabile "password" e assegnarle il valore "nome+cognome+colore+number"
12- Unire "message" e "password" (mettendo il grassetto alla password)
*/ 

//TODO: #1-2
const paragraph = document.getElementById("password-generate");
console.log(paragraph);


//TODO: #3 #4
const message = "La tua password è: ";
console.log(message);

const number = 23;
console.log(number);
/* A volte le password richiedono caratteri speciali o/e numeri al loro interno, per questo secondo me in questo caso è considerato numero e non stringa*/

//TODO: #5-6 
const firstname = prompt("Qual è il tuo nome?", "erica");
console.log(firstname);

//TODO: #7-8
const lastname = prompt("Qual è il tuo cognome?", "marzi");
console.log(lastname);

//TODO: #9-10
const color = prompt("Qual è il tuo colore preferito?", "teal");
console.log(color);

//TODO: #11
const password = firstname + lastname + color + number;
console.log(password);

//TODO: #12
paragraph.innerHTML = message + `<strong>${password}</strong>`;