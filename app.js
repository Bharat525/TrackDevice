window.addEventListener('scroll' , function(){
    let content = document.querySelector('.flex-container');
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 1.2
    if(contentPosition < screenPosition){
        content.classList.add('active');
    }else{
        content.classList.remove('active')
    }
    
})

window.addEventListener('scroll' ,function(){
    let content2 = document.querySelector('.main-container3');
    let contentPosition2 = content2.getBoundingClientRect().top;
    let screenPosition2 = window.innerHeight;
    if(contentPosition2 < screenPosition2){
        content2.classList.add('active')
    }else{
        content2.classList.remove('active')
    }
})



window.addEventListener('scroll' , function(){
    let content3 = document.querySelector('.main-container4');
    let contentPosition3 = content3.getBoundingClientRect().top;
    let screenPosition3 = window.innerHeight;
    if(contentPosition3 < screenPosition3){
        content3.classList.add('active');
    }else{
        content3.classList.remove('active');
    }
})


window.addEventListener('scroll' , function(){
    let content4 = document.querySelector('.flex-containerC')
    let contentPosition4 = content4.getBoundingClientRect().top;
    let screenPosition4 = window.innerHeight;
    if(contentPosition4 < screenPosition4){
        content4.classList.add('active2');
    } else{
        content4.classList.remove('active2')
    }
})

window.addEventListener('scroll', function(){
let contentBtn = document.querySelector('.btn')
let contentPosition5 = contentBtn.getBoundingClientRect().top;
let screenPosition5 = window.innerHeight;
if(contentPosition5 < screenPosition5){
    contentBtn.classList.add('active3');

}   else{
    contentBtn.classList.remove('active3')
} 
})


window.addEventListener('scroll' ,function(){
    let content6 = document.querySelector('.main-container5');
    let contentPosition = content6.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;
    if(contentPosition < screenPosition){
        content6.classList.add('active');
    }else{
        content6.classList.remove('active')
    }
})


const humBurger = document.querySelector('.humbuger');

console.log(humBurger);
const links = document.querySelector('.linkLis');





function humchange(e){
    e.classList.toggle('change');
    links.classList.toggle('activeLinks');


}