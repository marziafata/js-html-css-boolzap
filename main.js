$(document).ready(function() {

    // intercetto il click sull'icona dell'invio
    $('.invio').click(invia_messaggio);


    // intercetto l'input digitato dall'utente
    $('.testo_messaggio').keypress(function(event){
        // verifico se ha digitato "enter"
            if(event.which == '13'){
                // se sì eseguo la funzione
                invia_messaggio();
            }
    })

    // quando scrivo nell'imput, l'icona del microfono cambia in aeroplanino
    // aggancio l'elemento su cui clicco
    $('.testo_messaggio').focus(function(){
        // quando clicco cambia l'icona
        $('.footer_right .icona.invio i').toggleClass('fa-microphone fa-paper-plane');
    });

    // quando esco dal focus, cambia di nuovo
    $('.testo_messaggio').blur(function(){
        // quando clicco cambia l'icona
        $('.footer_right .icona.invio i').toggleClass('fa-paper-plane fa-microphone');
    });

    function invia_messaggio() {
        // leggo il testo inserito dall'utente
        var messaggioDaInviare = $('.testo_messaggio').val().trim();

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

// rendere possibile la ricerca di una persona specifica nella lista dei contatti
// cliccare nell'imput e al click succede qualcosa

// scrivo nell'imput

// invio quello che ho scritto cliccando nella lente

// il sistema controlla la corrispondenza tra quello che ho scritto e i nomi dei contatti


// se corrisponde la lista mi mostra i contatti che matchano con la parola scritta

// se non corrisponde non mostra niente
