const menu_icon = document.querySelector(".menu_icon")
const navBox = document.querySelector("nav ul")

menu_icon.addEventListener("click", () => {
    navBox.classList.toggle("visible_nav_box")
})