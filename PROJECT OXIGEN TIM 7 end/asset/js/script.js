//toggle class active 
const navbarnav = document.querySelector('.navbar-nav');

//ketika menu di klik 
document.querySelector('#menu1').onclick = ( ) => {
    navbarnav.classList.toggle('active');
};

//click di luar navbar untuk menghilangkan menu 
const menu1 = document.querySelector('#menu1');

document.addEventListener('click', function(e){
    if(!menu1.contains(e.target) && !navbarnav.contains(e.target)){
        navbarnav.classList.remove('active');
    }
});