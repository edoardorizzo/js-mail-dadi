/*
Mail
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.

Mail Bonus
Usiamo un input e un bottone per inserire la mail e poi mostriamo i risultati in pagina.
*/

// Chiedi all’utente la sua email
let submit = document.getElementById('submit');
let validMail = ['@gmail.com', '@libero.com', '@hotmail.com']
let message = document.getElementById('message');


submit.addEventListener('click', function(event){
    event.preventDefault();
    let userMail = document.getElementById('email_input').value;
    let valid = false;

    for (let i = 0; i < validMail.length; i++) {
        if (userMail.endsWith(validMail[i])) {
        valid = true;
        }
    }
    
    if (valid) {
        message.innerHTML = `Benvenuto! ${userMail}`;
        message.style.color = 'green';
        diceSection.style.display = 'block';
    }   else {
        message.innerHTML = 'Il tuo indirizzo e-mail non risulta valido, riprova.';
        message.style.color = 'red';
    }
})

let diceSection = document.getElementById ('dice_game')
let randomNumber = document.querySelector('.dice')
randomNumber.addEventListener('click', function(event){
    
    let myNumber = Math.floor(Math.random()* 6) + 1;
    let webNumber = Math.floor(Math.random()* 6) + 1;
    let numberMessage = document.querySelector('.number_message') 

    if (myNumber > webNumber) {
        numberMessage.innerHTML = `Hai fatto ${myNumber}! Il computer solamente ${webNumber}. Complimenti, hai vinto.`;
        numberMessage.style.color = 'green';
        console.log(myNumber, webNumber);
    } else if (myNumber < webNumber) {
        numberMessage.innerHTML = ` Hai fatto ${myNumber}, il computer vince con ${webNumber}. Riprova.`;
        numberMessage.style.color = 'red';
        console.log(myNumber, webNumber);
    } else {
        numberMessage.innerHTML = `Pareggio! Riprova ora.`;
        console.log(myNumber, webNumber);
        numberMessage.style.color = 'white';
    }
})