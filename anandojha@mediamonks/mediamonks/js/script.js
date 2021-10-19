var slideIndex=1;
showSlide(slideIndex);

function plusslides(n){
          showSlide(slideIndex+=n);
}

function currentslide(n){
        showSlide(slideIndex=n);
}
//logic for slides
function showSlide(n){
    var i;
    var slides= document.getElementsByClassName("myslide");
    var dots = document.getElementsByClassName("dot")
    if(n>slides.length){
        slideIndex=1;

    }
    if(n<1){
        slideIndex=slides.length;
    }
    for(i=0; i<slides.length;i++)
    {
        slides[i].style.display="none";

    }
    slides[slideIndex-1].style.display="block";
    
}
