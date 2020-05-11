$(document).ready(function() {


$('.invio').click(function(){
    // leggo il testo inserito dall'utente
    var messaggioDaInviare = $('.testo_messaggio').val();

    // copio l'elemento template
    var nuovo_messaggio = $('.template .fumetto_verde.primo').clone();

    // inserisco il testo letto dall'input_footer
    nuovo_messaggio.text(messaggioDaInviare);

    // appendo il nuovo messaggio
    $(nuovo_messaggio).appendTo('.riga_messaggio.out');
})

});
