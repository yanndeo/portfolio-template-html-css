//alert('merci papa GOD');

const menuBtn = document.getElementById('menuBtn');
const sideNav = document.getElementById('sideNav');

sideNav.style.right = "-250px";

menuBtn.addEventListener('click', function(){
    
    if(sideNav.style.right == "-250px"){
        sideNav.style.right = 0;
    }else{
        sideNav.style.right ="-250px";
    }
})


// All animations scrol
var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true
});
