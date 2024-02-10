function menuFunction(){

    const menuBtn= document.getElementById("nav-menu")
    if(menuBtn.className==="nav_menu"){
        // menuBtn.className += " responsive";
        menuBtn.classList.add("responsive");
    }
    else{
        menuBtn.className = "nav_menu";
    }

}

window.onscroll = function(){navShadow()}

function navShadow(){
    const navbar = document.getElementById("navbar");

    if(document.body.scrollTop > 50||document.documentElement.scrollTop > 50){

    navbar.style.boxShadow = "0 1px 6px rgba(0,0,0,0.1)";
    navbar.style.height = "70px";
    navbar.style.lineHeight = "70px";

    }else{
        navbar.style.boxShadow = "none";
        navbar.style.height = "90px";
        navbar.style.lineHeight = "90px";
    }
}