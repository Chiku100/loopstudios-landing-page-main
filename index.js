let toggler = document.querySelector(".toggler");
toggler.addEventListener("click", () => {
    toggler.style.display="none";
    document.querySelector(".x").style.display="block";
    document.querySelector(".y").style.display="block";
    document.querySelector("header").style.padding="1.25rem";
})
document.querySelector("nav button").addEventListener("click",()=>{
    toggler.style.display="block";
    document.querySelector(".x").style.display="none";
    document.querySelector(".y").style.display="none";    
    document.querySelector("header").style.padding="0";
})