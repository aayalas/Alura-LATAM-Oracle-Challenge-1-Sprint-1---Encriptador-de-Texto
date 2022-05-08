// `La letra "a" es convertida para "ai"`
// `La letra "e" es convertida para "enter"`
// `La letra "i" es convertida para "imes"`
// `La letra "o" es convertida para "ober"`
// `La letra "u" es convertida para "ufat"`
// Por ejemplo:
// "gato" => "gaitober"
// gaitober" => "gato"

const inputText = document.querySelector(".textarea-encrypt");
const outputText = document.querySelector(".textarea-decrypt");

function btnEncrypt(){
    const textEncrypt = encriptar(inputText.value);
    outputText.value = textEncrypt;
}

function encriptar(stringEncrypt) {
    let vowels = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncrypt = stringEncrypt.toLowerCase();
    for (let i = 0; i < vowels.length; i++) {
        if (stringEncrypt.includes(vowels[i][0])){
            stringEncrypt = stringEncrypt.replaceAll(vowels[i][0],vowels[i][1]);
        } 
    }
    return stringEncrypt;
}

function btnDecrypt(){
    const textDecrypt = desencriptar(inputText.value);
    outputText.value = textDecrypt;
}

function desencriptar(stringDecrypt) {
    let vowels = [["enter","e"],["imes","i"],["ai","a"],["ober","o"],["ufat","u"]];
    stringDecrypt = stringDecrypt.toLowerCase();
    for (let i = 0; i < vowels.length; i++) {
        if (stringDecrypt.includes(vowels[i][0])){
            stringDecrypt = stringDecrypt.replaceAll(vowels[i][0],vowels[i][1]);
        } 
    }
    return stringDecrypt;
}

let button = document.querySelector('#button');
let msg = document.querySelector('#copy');
let textarea = document.querySelector('#content');
let div = document.querySelector('#img');

button.addEventListener('click', ()=>{
    textarea.classList.toggle('reveal');  
    msg.classList.toggle('reveal');
    div.classList.toggle('hide');
});


document.getElementById("copy").onclick = function() {
    var text = document.getElementById("content").value;
 
    navigator.clipboard.writeText(text);
}

function eraseText() {
    document.getElementById("content").value = "";
}