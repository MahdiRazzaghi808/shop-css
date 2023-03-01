let img = document.querySelector(".header__left>img")


window.addEventListener("load",() => {
    let width = window.innerWidth;
    
    if (width < 768) {
        img.src = "./image/ready/header/sm/3.jpg"
    }
})

window.addEventListener("resize", (event) => {
    let width = window.innerWidth;
    if (width < 768) {
        img.src = "./image/ready/header/sm/3.jpg"
    }

});
