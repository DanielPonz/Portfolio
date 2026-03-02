var darkMode;
var body;

window.onload = function(){
    darkMode = document.querySelector(".dark-mode");
    body = document.body;

    darkMode.addEventListener("click", ()=>{
        body.classList.toggle("active");
    });
};

