$(document).ready(function(){

$.getJSON("slide.json",  function(data) {

    var diaporama;
    var Diaporama = function(caption, url){
        this.caption = caption;
        this.url = url;
        this.ajouter = function(){
            add();
        }
    } 


    for (var i=0; i=3; i++) {
    var diaporama = new Diaporama(data.pictures[i].caption, data.pictures[i].url);
        diaporama.ajouter();
    }

    function add(){
        $("img").attr('src',(data.pictures[i].url)).fadeIn(800).delay(2000).fadeOut(900).delay(300); 
    }

});
});


        // $.each(data, function bla () {
        //     setInterval(test,4000)
        //     var i = -1
        //         function test(){
        //             i += 1
        //                 if(i === 4) {
        //                     i =0
        //                 }
        //             $("img").attr('src',(data.pictures[i].url)).fadeIn(800).delay(2000).fadeOut(900).delay(300);                
        //         }
        //     console.log()
        // });