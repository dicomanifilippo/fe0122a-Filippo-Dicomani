// Quando il documento è pronto...
$(document).ready(()=>{
    $("#iscr-news").click(function(){
        
        var controllo = $("#nome").val();
        var controllo1 =$("#email-1").val();
        var controllo2=$("#email-2").val();

        if(controllo =="" || controllo == undefined){

         $("span").next().text("richiesto")
        }else{$("span").text("")}
if(controllo2){
    ("#email-1").next().next("*richiesto")


}else{$("#email-1").next().next("")}
        
    })
})
    //gestisco il click sul pulsante Iscriviti
    
        // inizializzo una variabile di controllo a true
        
        // utilizzo una dichiarazione if e se il valore di nome è presente altrimenti devo scrivere *Richiesto
        
        // nell'else uso next e text per impostare l'elemento span adiacente
        
        // assegno a due variabili il valore dei due campi email
        
        // ripeto la condizione nel nome anche per l'email
        
        // nella verifica devo mettere una ulteriore condizione se le email inserite sono diverse

        //invio del form se tutti i campi sono validi

    //gestisco il click sul pulsante Pulisci il form, i campi devono essere vuoti e 
    //posizionare un asterisco per identificare il campo obbligatorio. 
