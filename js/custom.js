
// Accordion js code
const accItem = document.getElementsByClassName('accordionItem');
const accTL = document.getElementsByClassName('accordion-title');
for (i = 0; i < accTL.length; i++) {
    accTL[i].addEventListener('click', toggleItem, false);
}
function toggleItem() {
    var itemClass = this.parentNode.className;
    for (i = 0; i < accItem.length; i++) {
        accItem[i].className = 'accordionItem close';
    }
    if (itemClass == 'accordionItem close') {
        this.parentNode.className = 'accordionItem open';
    }
}

// Toggle Navbar

const smNav = document.getElementById("smNav");
const bars = document.getElementById("bar");
const barClose = document.getElementById("close");


bars.addEventListener('click', menutoggle, false);
barClose.addEventListener('click', menutoggle, false);

    
function menutoggle(){
    const smNavbar = smNav.className;
    if (smNavbar == 'smNav navClose') {
        smNav.className = 'smNav navOpen';
        bars.style.display = "none";
        barClose.style.display = "block";
    }else{
        smNav.className = 'smNav navClose';
        barClose.style.display = "none";
        bars.style.display = "block";  
    }
}


// Top To bottom 

const header = document.getElementById("header");
const topBtn = document.getElementById("topBtn");

topBtn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });

window.onscroll = () =>{
    if(window.scrollY > 200){
        header.style.position = "fixed";
        topBtn.style.display = "block";
    }else{
        header.style.position = "static";
        topBtn.style.display = "none";
    }
}
