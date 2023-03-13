/*
Mail
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.

Mail Bonus
Usiamo un input e un bottone per inserire la mail e poi mostriamo i risultati in pagina.
*/

// Chiedi all’utente la sua email
let submit = document.querySelector('button');
let validMail = ['@gmail.com', '@libero.com', '@hotmail.com']
let message = document.getElementById('message');


submit.addEventListener('click', function(event){
    event.preventDefault();
    let userMail = document.querySelector('input').value;
    let valid = false;

    for (let i = 0; i < validMail.length; i++) {
        if (userMail.endsWith(validMail[i])) {
        valid = true;
        }
    }
    
    if (valid) {
        message.innerHTML = 'Benvenuto!';
    }   else {
        message.innerHTML = 'Il tuo indirizzo e-mail non risulta valido, riprova.';
    }
})


