
const navMenu = document.getElementById('nav_menu'),navToggle = document.getElementById('nav_toggle'),
navClose = document.getElementById('nav_close');
// navItems  = document.getElementsByClassName('nav_item');


if(navToggle){
    
    navToggle.addEventListener('click', () => {
            navMenu.classList.add('show_menu');
        
    });
}



if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show_menu');
    });
}



// if(navItems){
//     console.log("navitems",navItems.length);
//     for(var i = 0;i<navItems.length;i++){
//         navItems[i].addEventListener('click',() => {
//             navItems[i].classList.add('.navborderanim'); 
//         });
//     }
   
// }