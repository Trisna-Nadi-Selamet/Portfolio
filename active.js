const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')
const navLogo =document.querySelector('#navbar__logo')

//display mobile menu

const mobileMenu=()=>{
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
}
menu.addEventListener('click',mobileMenu);

//show active menu when scrolling
const highlighMenu =()=>{
    const elem = document.querySelector('.highlight')
    const homeMenu = document.querySelector('#home-page')
    const aboutMenu = document.querySelector('#about-page')
    const projectMenu = document.querySelector('#project-page')
    const contactMenu = document.querySelector('#contact-page')
    let scrollPos = window.scrollY
    console.log(scrollPos);
    if(window.innerWidth > 960 && scrollPos < 600){
        homeMenu.classList.add('heighlight')
        aboutMenu.classList.remove('heighlight')
        return
    }else if(window.innerWidth > 960 && scrollPos < 1400){
        aboutMenu.classList.add('heighlight')
        homeMenu.classList.remove('heighlight')
        projectMenu.classList.remove('highlight')
        return
    }else if(windows.innerWidth > 960 && scrollPos < 2345){
        contactMenu.classList.add('heighlight')
        aboutMenu.classList.remove('heighlight')
    }
if((elem && windows.innerWidth < 960 && scrollPos <600 ) || elem){
    elem.classList.remove('heighlight')
}
}
window.addEventListener('scroll', heighligtMenu)
window.addEventListener('click', heighlightMenu)

const hideMobileMenu = () => {
    const menuBar =document.querySelector('.is-active')
    if(window.innerWidth <= 768 && menuBars){
    menu.classList.toggle('is-active')
    menuLinks.classList.remove('active')
    }
    
}
menuLinks.addEventListener('click',hideMobileMenu);
navLogo.addEventListener('click',hideMobileMenu);