var inputChange = document.getElementsByClassName('input_box');
var parent = document.getElementById('box_0');
var parentWidth = parent.offsetWidth;
var inputted_texts = document.getElementsByClassName('inputted_text');
var pens = document.getElementsByClassName('fa-pen');
for (let i = 0; i < inputted_texts.length; i++) {
    let inputted_text = inputted_texts[i];
    let pen = pens[i]

    pen.style.fontSize = `${parentWidth / 12}px`;
    inputted_text.style.fontSize = `${parentWidth / 10}px`;
}