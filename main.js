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

$('.testo_messaggio').keypress(function(event){
            var keycode = (event.keyCode ? event.keyCode : event.which);
            if(keycode == '13'){
                // alert('You pressed a "enter" key in textbox');
                // leggo il testo inserito dall'utente
                var messaggioDaInviare = $('.testo_messaggio').val();

                // copio l'elemento template
                var nuovo_messaggio = $('.template .fumetto_verde.primo').clone();

                // inserisco il testo letto dall'input_footer
                nuovo_messaggio.text(messaggioDaInviare);

                // appendo il nuovo messaggio
                $(nuovo_messaggio).appendTo('.riga_messaggio.out');

            }
})

// creo una funzione per il testo del messaggio
function input_messaggio(testo) {
    // leggo il testo inserito dall'utente
    var messaggioDaInviare = $('.testo_messaggio').val();

    // copio l'elemento template
    var nuovo_messaggio = $('.template .fumetto_verde.primo').clone();

    // inserisco il testo letto dall'input_footer
    nuovo_messaggio.text(messaggioDaInviare);

    // appendo il nuovo messaggio
    $(nuovo_messaggio).appendTo('.riga_messaggio.out');

}

})
