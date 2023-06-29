var ubicacionPrincipal = window.scrollY
var $nav = document.querySelector('#nav1')

window.addEventListener('scroll',function(){
     var ubicacionactual=window.scrollY

     console.log(ubicacionactual)

     if(ubicacionPrincipal>=ubicacionactual){
        $nav.style.top= "0px"
     } else{
        $nav.style.top="-80px"
     }

     ubicacionPrincipal=ubicacionactual
})
window.sr=ScrollReveal();
    sr.reveal('.nav ',{
            duration:1500,
            origin: 'bottom',
            distance:'-100px'
    });
    sr.reveal('.titulo ',{
        duration:1500,
        origin: 'bottom',
        distance:'-100px'
});
    sr.reveal('.scroll_banner ',{
        duration:1500,
        origin: 'bottom',
        distance:'-100px'
    });
    sr.reveal('.scroll_nos',{
        duration:1500,
        origin: 'bottom',
        distance:'-100px'
    });


