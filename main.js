$(document).ready(function() {


$('.invio').click(function(){
    // leggo il testo inserito dall'utente
    var messaggioDaInviare = $('.testo_messaggio').val();

    // copio l'elemento template
    var nuovo_messaggio = $('.template .riga_messaggio.out').clone();

    // inserisco il testo letto dall'input_footer
    nuovo_messaggio.text(messaggioDaInviare);

    // appendo il nuovo messaggio
    $(nuovo_messaggio).appendTo('.container_chat');

    // cancello l'imput
    var messaggioDaInviare = $('.testo_messaggio').val('');

    // risposta automatica dopo l'invio del messaggio
    setTimeout(function(){
        // copio l'elemento template
        var risposta = $('.template .riga_messaggio.in').clone();

        // inserisco il testo letto dall'input_footer
        risposta.text('Ok!');

        // appendo il messaggio di risposta
        $(risposta).appendTo('.container_chat');}, 1000);

})

$('.testo_messaggio').keypress(function(event){
            var keycode = (event.keyCode ? event.keyCode : event.which);

            // if (event.keyCode) {
            //     keycode = event.keyCode;
            // } else {
            //     keycode = event.witch;
            // }

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

                // risposta automatica dopo l'invio del messaggio
                setTimeout(function(){
                    // mostro il fumetto di risposta
                    $('.risposta').show();}, 1000);

            }
})

})
