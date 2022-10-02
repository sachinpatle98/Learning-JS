let flag = 2;

function controller(x){
    flag += x;
slideshow(flag)

    //  if i click left arrow--->
    // flag = 2 + (-1) = 1
    //  if i click right arrow--->
    // flag = 2 + (1) = 3

}
slideshow(flag);

function slideshow(num){
    let slides = document.getElementsByClassName('slide');

    if(num == slides.length){
        flag = 0;
        num = 0;
    }
    if(num < 0){
        flag = slides.length-1;
        num = slides.length-1;
    }

    for(let y of slides){
        y.style.display = "none"
    }

    slides[num].style.display = 'block';
}