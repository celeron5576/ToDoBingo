for (let x = 0; x < box_num * box_num; x++){
    var box_id_num = "input_box" + x;
    console.log(box_id_num);
    let boxInput = document.getElementById(box_id_num);
    boxInput.addEventListener('change',function() {
        valueInput(box_id_num);
    });
}

//let boxInput = document.getElementById('input_box0');
//boxInput.addEventListener('change', valueInput);



//INPUT BOXを動的に生成するプログラム
var box_num = 3;
var box = '<div class="block">'
for (let n = 0; n < box_num; n++) {
    box += '<div>'
    box += '<div class="block_floor">'
    for (let m = 0; m < box_num; m++) {
        box += '<div>'
        box += '<div class="box">'
        if (n * box_num + m + 1 == (box_num * box_num - 1)/2+1){
            box += '<input id="input_box'+( n * box_num + m )+'" class="input_box" name="input_box" type="text" value="FREE" placeholder="ToDoを入力">'
        }else{
            box += '<input id="input_box'+( n * box_num + m )+'" class="input_box" name="input_box" type="text" placeholder="ToDoを入力">'
        }
        box += '</div>'
        box += '</div>'
    }
    box += '</div>'
    box += '</div>'
}
+ '</div>';
document.getElementById('wrap').innerHTML = box;


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
            box += '<input id="input_box'+( n * box_num + m )+'" class="input_box" name="input_box" type="text" value="FREE" placeholder="ToDoを入力">'
        }else{
            box += '<input id="input_box'+( n * box_num + m )+'" class="input_box" name="input_box" type="text" placeholder="ToDoを入力">'
        }
        box += '</div>'
        box += '</div>'
    }
    box += '</div>'
    box += '</div>'
}
+ '</div>';
document.getElementById('wrap').innerHTML = box;


//BOX INPUTに値が入っているかを判別する処理
function valueInput(box_id_num) {
    var box_input = document.getElementById(box_id_num).value
    if(box_input != ""){
        console.log(box_input)
    }
}

for (let x = 0; x < box_num * box_num; x++){
    var box_id_num = "input_box" + x;
    console.log(box_id_num);
    let boxInput = document.getElementById(box_id_num);
    boxInput.addEventListener('change',function() {
        valueInput(box_id_num);
    });
}

//let boxInput = document.getElementById('input_box0');
//boxInput.addEventListener('change', valueInput);

for (let x = 0; x < box_num * box_num; x++){
    var box_id_num = "input_box" + x;
    let boxInput = document.getElementById(box_id_num);
    boxInput.addEventListener('change',function() {
        valueInput(box_id_num);
    });
}

}
let boxSelect = document.getElementById('box');
boxSelect.addEventListener('change', valueChange);



//BOX INPUTに値が入っているかを判別する処理
function valueInput(box_id_num) {
    const box_input = document.getElementById(box_id_num).value
    if(box_input != ""){
        console.log(box_input)
    }
}

/*
for (let x = 0; x < box_num * box_num; x++){
    var box_id_num = "input_box" + x;
    console.log(box_id_num);
    let boxInput = document.getElementById(box_id_num);
    boxInput.addEventListener('change',function() {
        valueInput(box_id_num);
    });
}
*/
let boxInput = document.getElementById(this);
boxInput.addEventListener('change', valueInput);