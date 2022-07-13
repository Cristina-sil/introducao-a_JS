
function changeMode(){
    changesClasses();
    changesTexts();
}

//Modificar as classes

const darkModeClass = 'dark-mode';
function changesClasses(){
    button.classList.toggle(darkModeClass);
    h1.classList.toggle(darkModeClass);
    body.classList.toggle(darkModeClass);
    footer.classList.toggle(darkModeClass);
}

//Modificar os textos
function changesTexts(){
    const LigthMode = 'Ligth Mode';
    const darkMode = 'Dark Mode';
    if (body.classList.contains(darkModeClass)){
        button.innerHTML = LigthMode;
        h1.innerHTML = darkMode + " ON";
        return;
    } 
    button.innerHTML = darkMode;
        h1.innerHTML = LigthMode + " ON";
}

const button = document.getElementById("mode-selector");
const h1 = document.getElementById("page-title");
const body = document.getElementsByTagName("body")[0];
const footer = document.getElementsByTagName("footer")[0];

button.addEventListener("click",changeMode);


