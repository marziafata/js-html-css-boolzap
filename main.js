$(document).ready(function() {

// Invio nuovo messaggio e risposta automatica dell'utente

    // intercetto il click sull'icona dell'invio
    $('.invio').click(invia_messaggio);
    //fine funzione agganciata su .click

    // intercetto l'input digitato dall'utente
    $('.testo_messaggio').keypress(function(event){
        // verifico se ha digitato "enter"
            if(event.which == '13'){
                // se sì eseguo la funzione
                invia_messaggio();
            }
    }) //fine funzione agganciata su .keypress

// quando scrivo nell'imput, l'icona del microfono cambia in aeroplanino

    // aggancio l'elemento su cui clicco
    $('.testo_messaggio').focus(function(){

        // quando clicco cambia l'icona
        $('.footer_right .icona.invio i').toggleClass('fa-microphone fa-paper-plane');
    });//fine funzione agganciata su .focus

    // quando esco dal focus, cambia di nuovo
    $('.testo_messaggio').blur(function(){

        // quando clicco cambia l'icona
        $('.footer_right .icona.invio i').toggleClass('fa-paper-plane fa-microphone');
    }); //fine funzione agganciata su .blur

//funzione per inviare il messaggio + risposta automatica

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
    } //fine funzione invia messaggio

// rendere possibile la ricerca di una persona specifica nella lista dei contatti

    // inizia a cercare non appena inizia a scrivere
    $('input.ricerca').keyup(function() {

        // leggere quello che viene scritto nell'input
        var testo_ricerca = $('input.ricerca').val().trim().toLowerCase();

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
        } //fine if-else
    }) //fine funzione keyup

// quando clicco su un contatto, mi mostra la chat corrispondente

//intercettare il click sul contatto
$('div.amici').click(function() {
    //recupero la chat attiva
    var chat_attiva = $('.dialogo.active');
    //recupero il contatto attivo = corrispondente
    var contatto_attivo = $('.amici.active');

    // tolgo la classe active alla chat attiva
    chat_attiva.removeClass('active');
    // tolgo la classe active al contatto attivo
    contatto_attivo.removeClass('active');

    //aggiungo la classe active al contatto su cui ho cliccato
    $(this).addClass('active');
    //recupero la chat corrispondente al contatto dove ho cliccato e per farlo devo sapere la posizione del contatto dove ho cliccato
    var posizione = $(this).index();

    // adesso recupero la chat con la stessa posizione
    var chat_da_mostrare = $('div.dialogo').eq(posizione);

    chat_da_mostrare.addClass('active');
})

}) //fine document ready
