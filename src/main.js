const openButton = document.querySelector(".header__mobile-menu-btn")
const closeButton = document.querySelector(".header__mobile-close")
const mobileMenu = document.querySelector(".header__mobile-menu")
const body = document.querySelector('body')


function openMenu(){
    mobileMenu.style.display = "flex";
    openButton.style.display ="none"
    body.style.overflow = "hidden";
}

function closeMenu() {
    mobileMenu.style.display = "none";
    openButton.style.display ="inline-block"
    body.style.overflow = "visible";
}


openButton.addEventListener("click", openMenu);
closeButton.addEventListener("click", closeMenu);


const featuresItems = document.querySelectorAll(".features__item")

for (const item of featuresItems) {
    item.addEventListener("click", ()=>{
        for (const currentItem of featuresItems){
            currentItem.classList.remove("active")
        }
        
    item.classList.add("active")
    })
}

const contents =  document.querySelectorAll(".content")
const tabs = document.querySelectorAll(".tab")

for (const content of contents) {
    content.addEventListener("click", () =>{
        console.log("Нажали вкладку");
    })

}
for (const tab of tabs){
    tab.addEventListener("click", ()=>{
         console.log("Нажали вкладку");
    })

}