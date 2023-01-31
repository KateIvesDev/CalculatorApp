
const toggle = document.getElementById('toggle')
const body = document.querySelector('body')
const radioButtons = document.querySelectorAll('input[name="theme"]');
radioButtons.forEach(button => {
    button.addEventListener('click', switchTheme)
})

if (window.matchMedia) {
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
        body.className = "theme-1-theme"
    } else {
        body.className = "theme-2-theme"
    }
  } else {
      body.className = localStorage.getItem("theme")

  }

function switchTheme(){
    let selectedTheme;
    for (const radioButton of radioButtons){
        if(radioButton.checked){
            selectedTheme = radioButton.value;
        }
    }
    if (selectedTheme === "theme1"){
        toggle.style.left = "5px";
        body.className = "theme-1-theme"
        localStorage.setItem('theme', "theme-1-theme")
    }
    if (selectedTheme === "theme2"){
        toggle.style.left = "30px";
        body.className = "theme-2-theme"
        localStorage.setItem('theme', "theme-2-theme")
    }
    if (selectedTheme === "theme3"){
        toggle.style.left = "55px";
        body.className = "theme-3-theme"
        localStorage.setItem('theme', "theme-3-theme")
    }
}