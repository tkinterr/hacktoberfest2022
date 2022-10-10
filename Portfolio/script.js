$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }
        else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scrollbtn').addClass("show");
        }
        else{
            $('.scrollbtn').removeClass("show"); 
        }
    });
    $('.scrollbtn').click(function(){
        $('html').animate({scrollTop: 0});
    });

    var typed=new Typed(".typing",{
        strings: ["Student","Developer","Designer"],
        typeSpeed: 80,
        backSpeed: 40,
        loop: true
    });
    var typed=new Typed(".typin",{
        strings: ["Student","Developer","Designer"],
        typeSpeed: 80,
        backSpeed: 40,
        loop: true
    });
});
const scriptURL = 'https://script.google.com/macros/s/AKfycby4xcywLBfhQtw1ZtECrI40VgHtJH5MpSv0ubvykd9VZsIH93ENux84SjwaI_HsRjN6dA/exec'
const form = document.forms['messageform']
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
});
