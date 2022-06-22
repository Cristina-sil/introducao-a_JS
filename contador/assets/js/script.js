
const CURRENT_NUMBER_WRAPPER = document.getElementById('currentNumber');
//Variável auxiliar que vai armazenar a contagem do número
let couter = 0;

function increment() {
	couter++;
    if (couter<=10){
        CURRENT_NUMBER_WRAPPER.innerHTML = couter;
    }  else {
        couter = 0;
    }
    cor();
}

function decrement() {
	couter--;
    CURRENT_NUMBER_WRAPPER.innerHTML = couter;
	/*if (couter>=0){
        CURRENT_NUMBER_WRAPPER.innerHTML = couter;
    }  else {
        couter = 0;
    }*/
    cor();
}

function cor (){
    if (couter < 0){
        CURRENT_NUMBER_WRAPPER.style.color = "red";
    } else {
        CURRENT_NUMBER_WRAPPER.style.color = "brown";
    }
}
