let pasta =document.getElementsByClassName('pasta')
let pasta_btn=document.getElementById('pasta_btn')
let burger=document.getElementsByClassName('burger')
let burger_btn=document.getElementById('burger_btn')
let pizza=document.getElementsByClassName('pizza')
let pizza_btn=document.getElementById('pizza_btn')
pasta_btn.addEventListener('click',function(){
    pasta[0].style.display="block"
    pasta[1].style.display="block"
    burger[0].style.display="none"
    burger[1].style.display="none"
    burger[2].style.display="none"
    pizza[0].style.display="none"
    pizza[1].style.display="none"

})
burger_btn.addEventListener('click',function(){
    pasta[0].style.display="none"
    pasta[1].style.display="none"
    burger[0].style.display="block"
    burger[1].style.display="block"
    burger[2].style.display="block"
    pizza[0].style.display="none"
    pizza[1].style.display="none"

})
pizza_btn.addEventListener('click',function(){
    pasta[0].style.display="none"
    pasta[1].style.display="none"
    burger[0].style.display="none"
    burger[1].style.display="none"
    burger[2].style.display="none"
    pizza[0].style.display="block"
    pizza[1].style.display="block"

})


