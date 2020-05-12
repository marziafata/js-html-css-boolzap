$(document).ready(function() {

    // intercetto il click sull'icona dell'invio
    $('.invio').click(function(){
        // eseguo la funzione
        invia_messaggio();
    })


    // intercetto l'input digitato dall'utente
    $('.testo_messaggio').keypress(function(event){
        // verifico se ha digitato "enter"
            if(event.which == '13'){
                // se sì eseguo la funzione
                invia_messaggio();
            }
    })


    function invia_messaggio() {
        // leggo il testo inserito dall'utente
        var messaggioDaInviare = $('.testo_messaggio').val();

        // copio l'elemento template
        var nuovo_messaggio = $('.template .riga_messaggio.out').clone();

        // individuo l'elemento in cui devo scrivere il testo e contemporaneamente lo scrivo dentro
        nuovo_messaggio.find('p.testo.out').text(messaggioDaInviare);

        // appendo il nuovo messaggio nella chat
        nuovo_messaggio.appendTo('.container_chat');

        // cancello l'imput
        var messaggioDaInviare = $('.testo_messaggio').val('');

        // risposta automatica dopo 1 secondo dall'invio del messaggio

        setTimeout(function(){
            // copio l'elemento template fumetto di risposta
            var fumetto_risposta = $('.template .riga_messaggio.in').clone();

            // individuo l'elemento in cui devo scrivere il testo e contemporaneamente lo scrivo dentro
            fumetto_risposta.find('p.testo.risposta').text('Ok!')

            // appendo il messaggio di risposta
            fumetto_risposta.appendTo('.container_chat');}, 1000);
    }

})
