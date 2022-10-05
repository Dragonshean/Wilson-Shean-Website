//手機介面右側頁面選項
let navLinks = document.getElementById('navLinks')
function showMenu() {
    navLinks.style.right = '0px'    
}
function hideMenu() {
    navLinks.style.right = '-200px'
}


//Scroll animation
window.addEventListener('scroll', () => {
    let plate = document.getElementById('reveal');
    let platePosition = plate.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;
    let revealPoint = 100;
    if (platePosition < screenPosition - revealPoint) {
        plate.classList.add('active')
    }else {
        plate.classList.remove('active')
    }
});
window.addEventListener('scroll', () => {
    let plate = document.getElementById('reveal2');
    let platePosition = plate.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;
    let revealPoint = 100;
    if (platePosition < screenPosition - revealPoint) {
        plate.classList.add('active')
    }else {
        plate.classList.remove('active')
    }
});



// function reveal() {
//     let reveals = document.querySelectorAll('.reveal')

// for (let i = 0; i < reveals.length; i++) {
//     const windowHeight = window.innerHeight;
//     const revealTop = reveals[i].getBoundingClientRect().top;
//     const revealPoint = 200;

//     if (revealTop < windowHeight - revealPoint) {
//         reveals[i].classList.add('active');
//     } else {
//         reveals[i].classList.remove('active');
//     }
// }

    // reveals.forEach( plate => {
    //     let windowHeight = window.innerHeight;
    //     let revealTop = reveals[plate].getBouncingClientRect();
    //     let revealPoint = 200;
        
    //     (revealTop.left < windowHeight - revealPoint) ? reveals[plate].classList.add('active') 
    //     : reveals[plate].classList.remove('active') 

    // });
