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

        // appendo il nuovo messaggio nella chat che ho attiva
        nuovo_messaggio.appendTo('.dialogo.active');

        // cancello l'imput
        var messaggioDaInviare = $('.testo_messaggio').val('');

        // risposta automatica dopo 1 secondo dall'invio del messaggio

        setTimeout(function(){
            // copio l'elemento template fumetto di risposta
            var fumetto_risposta = $('.template .riga_messaggio.in').clone();

            // individuo l'elemento in cui devo scrivere il testo e contemporaneamente lo scrivo dentro
            fumetto_risposta.find('p.testo.risposta').text('Ok!')

            // appendo il messaggio di risposta nella chat che ho attiva
            fumetto_risposta.appendTo('.dialogo.active');}, 1000);
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

// // METODO 1 DI VISUALIZZAZIONE CHAT CORRENTE: .INDEX()
// // QUESTO METODO NON é FLESSIBILE PERCHé NON POSSO SPOSTARE GLI ELEMENTI
// // intercettare il click sul contatto
// $('div.amici').click(function() {
//     //recupero la chat attiva
//     var chat_attiva = $('.dialogo.active');
//     //recupero il contatto attivo = corrispondente
//     var contatto_attivo = $('.amici.active');
//
//     // tolgo la classe active alla chat attiva
//     chat_attiva.removeClass('active');
//     // tolgo la classe active al contatto attivo
//     contatto_attivo.removeClass('active');
//
//     //aggiungo la classe active al contatto su cui ho cliccato
//     $(this).addClass('active');
//     //recupero la chat corrispondente al contatto dove ho cliccato e per farlo devo sapere la posizione del contatto dove ho cliccato
//     var posizione = $(this).index();
//
//     // adesso recupero la chat con la stessa posizione
//     var chat_da_mostrare = $('div.dialogo').eq(posizione);
//
//     chat_da_mostrare.addClass('active');
// })//fine funzione

//METODO 2 DI VISUALIZZAZIONE CHAT CORRENTE: ATTRIBUTI DATA
//METODO FLESSIBILE: POSSO SPOSTARE COSE
$('div.amici').click(function() {
    // tolgo la classe active a tutti i contatti e tutte le chat che eventualmente ce l'hanno
    $('div.dialogo').removeClass('active');
    $('div.amici').removeClass('active');

    // mi recupero il DATA del contatto
    var codice_contatto = $(this).data('contatto');

    //recupero la chat corrispondente al contatto che ho cliccato tramite l'attributo DATA
    var chat_da_mostrare = $('div.dialogo[data-nome-contatto="' + codice_contatto + '"]');

    // mostro la chat corrispondente aggungendo la classe active e aggiungo la classe anche al contatto cliccato per selezionarlo
    chat_da_mostrare.addClass('active');
    $(this).addClass('active');

    //cambio nome del contatto attivo nell'header
    //recupero il nome del contatto su cui ho cliccato
    var nome_contatto = $(this).find('.dati_contatto .riga1 p.nome').text();
    //inserisco il nome nell'header accanto all'immagine
    $('.header_right .avatar_attivo p.nome_chat').text(nome_contatto);

    //cambio l'immagine del contatto nell'header
    //recupero la foto del contatto su cui ho cliccato impostando il percorso dell'immagine nella parte di destra dei contatti
    var src_contatto = $(this).find('.cerchio img').attr('src')
    //la inserisco nell'header sfruttando l'attributo
    $('.avatar_attivo img').attr('src', src_contatto);
})//fine funzione

//Menù a tendina messaggio
//mostro la freccetta al passaggio del mouse
$('.container_chat').on('mouseover', '.fumetto',function(){
    $(this).find('.fa-chevron-down').show();
});//fine funzione

//tolgo la freccetta se il mouse esce dal fumetto
$('.container_chat').on('mouseleave', '.fumetto',function(){
    $(this).find('.fa-chevron-down').hide();
});//fine funzione

//al click sulla freccetta voglio aprire il dropdown
$('.container_chat').on('click', '.accessori .fa-chevron-down',function(){
    // visualizzo il div menu_tendina corrispondente al messaggio su cui ho cliccato
    $(this).siblings('.menu_tendina').toggleClass('active');
});//fine funzione

//tolgo dropdown se il mouse esce dal fumetto
$('.container_chat').on('mouseleave', '.fumetto',function(){
    $(this).find('.menu_tendina.active').removeClass('active');
});//fine funzione


//cancella messaggio per me (lo rimuove dalla chat)
//intercetto il click sulla voce cancella messaggio
$('.container_chat').on('click', 'div.menu_tendina > ul > li:nth-child(2)',function(){
    $(this).closest('.riga_messaggio').remove();
});//fine funzione


//cancella messaggio oer tutti (appare la scritta messaggio eliminato)
//intercetto il click sulla voce cancella messaggio
$('.container_chat').on('click', 'div.menu_tendina > ul > li:nth-child(3)',function(){
    $(this).closest('.accessori').siblings().text('Hai eliminato questo messaggio');
});//fine funzione




}) //fine document ready
