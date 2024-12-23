//icons

const sunIcon = document.querySelector(".sun");
const moonIcon = document.querySelector(".moon");

//icon toggling
 const iconToggle = ()=>{
    moonIcon.classList.toggle("display-none");
    sunIconIcon.classList.toggle("display-none");
 }


//manual theme switch
const themeSwitch = () =>{
    if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "ligth");
        iconToggle();
        return;
    }
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    iconToggle();
}

//call theme switch on clicking buttons
sunIcon.addEventListener("click", ()=>{
    themeSwitch();
});
moonIcon.addEventListener("click", ()=>{
    themeSwitch();
});



//invoke theme check on initial load
/*themeChecks();*/

//theme vars
/*const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
*/
//initial themes check
/*const themeChecks =() =>{
    if (userTheme === "dark" || (!userTheme && systemTheme)) {
        document.documentElement.classList.add("dark");
        moonIcon.classList.add("display-none");
        return;
    }
    sunIcon.classList.add("display-none");
}
*/