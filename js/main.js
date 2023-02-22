(function(){
    const header= document.querySelector(".header")
    window.onscroll=()=>{
        if(window.pageYOffset>100){
            header.classList.add("header__activ")
        }else{
            header.classList.remove("header__activ")
        }
    }
}())

(function(){
    const headerBurger=document.querySelector('.header__burger')
    const headerNav=document.querySelector('.header__nav')
    const headerNavClose=document.querySelector('.header-nav__close')
    headerBurger.addEventListener('click', ()=>{
        headerNav.classList.add('header__nav_active')
    })

    headerNavClose.addEventListener('click', ()=>{
        headerNav.classList.remove('header__nav_active')
    })
}())

