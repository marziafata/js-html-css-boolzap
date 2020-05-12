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
// intercettare il click sul pulsante di ricerca
$('input.ricerca').keyup(function() {
    // leggere quello che viene scritto nell'input
    var testo_ricerca = $('input.ricerca').val().trim().toLowerCase();
    console.log('ho scritto: ' + testo_ricerca);
    //verifico che ci sia scritto qualcosa
    if (testo_ricerca != '') {
        // per ogni nome dei contatti verifico la corrispondenza con il testo della ricerca
        $('div.amici').each(function() {
            // prima estrapolo il nome
            var nome_contatto = $(this).find('p.nome').text().toLowerCase();

            // se quello che ho scritto corrisponde tutto o in parte a uno o più nomi dei contatti
            if (nome_contatto.includes(testo_ricerca)) {
                // mi mostra la "scheda contatto corrispondente"
                $(this).show();
            } else {
                // e nasconde tutte le altre
                $(this).hide();
            }
        })

    } else {
        // il campo è vuoto e si resetta la ricerca => mostro tutto
        $('div.amici').show();
    }


    // se corrisponde la lista mi mostra i contatti che matchano con la parola scritta

    // se non corrisponde non mostra niente
})
