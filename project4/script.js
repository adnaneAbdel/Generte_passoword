

const btnGenerte = document.querySelector("#btnClic");
const  placeWord = document.querySelector(".placeWord");
const  iconCopy = document.querySelector(".bi");












iconCopy.onclick = function (){

    placeWord.select();
}



btnGenerte.onclick = function () {
    let alaphaicLowerCase = "abcdefjhklmnopqrstuvwxyzABCDEFJHKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-";
    let charCounter = 10;
    let genertePass = '';

    for (let i = 0; i < charCounter; i++) {
        let randomVarible =  alaphaicLowerCase[Math.floor(Math.random() * alaphaicLowerCase.length)];
       genertePass += randomVarible;
        
    }

    placeWord.innerHTML = genertePass; 


};