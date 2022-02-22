const searchBtn = document.getElementById("Search-btn");

const searchInput = document.querySelector("input");

searchBtn.addEventListener("click", function(){
    searchInput.classList.toggle("active-search");
})

document.querySelector('main').addEventListener("click", function(){
    searchInput.classList.remove("active-search");
})