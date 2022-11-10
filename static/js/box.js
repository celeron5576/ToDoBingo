var box_num = 3
function valueChange(){
    var box_num = boxSelect.value
    var box = '<div class="block">'
for (let n = 0; n < box_num; n++) {
    box += '<div>'
    box += '<div class="block_floor">'
    for (let m = 0; m < box_num; m++) {
        box += '<div>'
        box += '<div class="box">'
        if (n * box_num + m + 1 == (box_num * box_num - 1)/2+1){
            box += '<input id="input_box" type="text" value="FREE" placeholder="ToDoを入力">'
        }else{
            box += '<input id="input_box" type="text" placeholder="ToDoを入力">'
        }
        box += '</div>'
        box += '</div>'
    }
    box += '</div>'
    box += '</div>'
}
+ '</div>'
document.getElementById('wrap').innerHTML = box;
}

let boxSelect = document.getElementById('box');
boxSelect.addEventListener('change', valueChange);


var box = '<div class="block">'
for (let n = 0; n < box_num; n++) {
    box += '<div>'
    box += '<div class="block_floor">'
    for (let m = 0; m < box_num; m++) {
        box += '<div>'
        box += '<div class="box">'
        if (n * box_num + m + 1 == (box_num * box_num - 1)/2+1){
            box += '<input id="input_box" type="text" value="FREE" placeholder="ToDoを入力">'
        }else{
            box += '<input id="input_box" type="text" placeholder="ToDoを入力">'
        }
        box += '</div>'
        box += '</div>'
    }
    box += '</div>'
    box += '</div>'
}
+ '</div>'
document.getElementById('wrap').innerHTML = box;