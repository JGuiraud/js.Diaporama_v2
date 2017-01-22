$(document).ready(function(){

$.getJSON("slide.json",  function(data) {
    var i, counter, diaporama1;
    var pic = data.pictures;
    var Diaporama = function(caption, url){
        this.caption = caption;
        this.url = url;
        this.slideShow = function slider (){
            $("img").attr('src', pic[i].url).fadeIn(800).delay(2000).fadeOut(900).delay(300); 
            };
        };

        function diaporama (){
        i = 0;
        counter = setInterval(diapo, 4000);
            function diapo(){
                diaporama1 = new Diaporama(pic[i].name, pic[i].url);
                diaporama1.slideShow();
                i+=1;
                if (i === pic.length) {
                    i = 0;
                }
            };
        } 
        diaporama();


});
});
