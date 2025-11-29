const btn = document.getElementById("menu-button");
const nav= document.getElementById('navMenu');

btn.addEventListener("click", () => {
    nav.style.display = nav.style.display === "none" ? "block" : "none";
})