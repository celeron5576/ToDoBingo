box_ids = []

//id名を動的に生成して配列に追加
for (let x = 0; x < box_num * box_num; x++) {
    var box_id_num = "input_box" + x;
    //console.log(box_id_num);
    box_ids[x] = box_id_num;
}


//let boxInput = document.getElementById('input_box0');
//boxInput.addEventListener('change', valueInput);




submit_value = '<input id="input_box_value-2" class="input_box hide" type="text" value="9" name="box_size">'
submit_value += '<input id="input_box_title" class="input_box hide" type="text" name="box_title">'
for (let x = 0; x < 9; x++) {
    if (x != 4) {
        submit_value += '<input id="input_box_value' + x + '" class="input_box hide"type="text" name="box_value' + x + '">'
    }else{
        submit_value += '<input id="input_box_value' + x + '" class="input_box hide"type="text" value="free" name="box_value4">'
    }
}

window.onload = function(){document.getElementById('submit_value').innerHTML += submit_value};




//INPUT BOXを動的に生成するプログラム
var box_num = 3;
var box = '<div class="block" id="block">'
for (let n = 0; n < box_num; n++) {
    box += '<div class="line3">'
    box += '<div class="block_floor">'
    for (let m = 0; m < box_num; m++) {
        box += '<div id="box_input_box' + (n * box_num + m) + '" class="input_box_out">'
        box += '<div class="box" id="box_' + (n * box_num + m) + '">'
        if (n * box_num + m + 1 == (box_num * box_num - 1) / 2 + 1) {
            box += '<button type="button" id="FREE" value="input_box' + (n * box_num + m) + '" class="print_hide inputted_box inputted" onclick="buttonClick(this.value ,this.id)">'
                + '<i class="fa-solid fa-pen edit_btn inputted" id="edit_' + (n * box_num + m) + '"></i>'
                + '</button>'
                + '<p class="inputted_text">FREE</p>'
        } else {
            box += '<input id="input_box' + (n * box_num + m) + '" class="input_box" name="input_box" type="text" placeholder="ToDoを入力">'
        }
        box += '</div>'
        box += '</div>'
    }
    box += '</div>'
    box += '</div>'
}
+ '</div>';
document.getElementById('wrap').innerHTML = box;


function ChangeFontsize() {
    //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
    var parent = document.getElementById('box_0');
    var parentWidth = parent.offsetWidth;
    var inputted_texts = document.getElementsByClassName('inputted_text');
    //console.log(inputted_texts)
    //console.log(inputted_texts.length)
    var pens = document.getElementsByClassName('fa-pen');
    var input_boxes = document.getElementsByClassName("input_box");
    console.log("サイズ変更入りまーーーーす");
    for (let i = 0; i < inputted_texts.length; i++) {
        let inputted_text = inputted_texts[i];
        let pen = pens[i];
        //console.log(inputted_text);
        inputted_text.style.fontSize = `${parentWidth / 9}px`;
        pen.style.fontSize = `${parentWidth / 12}px`;
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
    }

    console.log(input_boxes)
    for (let i = 0; i < input_boxes.length; i++) {
        let input_box = input_boxes[i]
        input_box.style.fontSize = `${parentWidth / 8}px`;
    }
}

//セレクトボックスで変更したときにボックスサイズを変更するプログラム
function valueChange() {
    var box_num = boxSelect.value
    var box = '<div class="block" id="block">'
    for (let n = 0; n < box_num; n++) {
        box += '<div class="line' + box_num + '">'
        box += '<div class="block_floor">'
        for (let m = 0; m < box_num; m++) {
            box += '<div id="box_input_box' + (n * box_num + m) + '" class="input_box_out">'
            box += '<div class="box" id="box_' + (n * box_num + m) + '">'
            if (n * box_num + m + 1 == (box_num * box_num - 1) / 2 + 1) {
                box += '<button type="button" id="FREE" value="input_box' + (n * box_num + m) + '" class="print_hide inputted_box inputted" onclick="buttonClick(this.value ,this.id)">'
                    + '<i class="fa-solid fa-pen edit_btn inputted" id="edit_' + (n * box_num + m) + '"></i>'
                    + '</button>'
                    + '<p class="inputted_text">FREE</p>'
            } else {
                box += '<input id="input_box' + (n * box_num + m) + '" class="input_box" name="input_box" type="text" placeholder="ToDoを入力">'
            }
            box += '</div>'
            box += '</div>'
        }
        box += '</div>'
        box += '</div>'
    }
    + '</div>';
    document.getElementById('wrap').innerHTML = box;
    change_observer();


    submit_value = '<input id="input_box_value-2" class="input_box hide" type="text" value="' + (box_num * box_num) + '" name="box_size">'
                 + '<input id="input_box_title" class="input_box hide" type="text" name="box_title">'
    for (let x = 0; x < (box_num * box_num); x++) {
        if (x != (box_num * box_num + 1) / 2 - 1) {
            submit_value += '<input id="input_box_value' + x + '" class="input_box hide"type="text" name="box_value' + x + '">'
        }else{
            submit_value += '<input id="input_box_value' + x + '" class="input_box hide"type="text" value="free" name="box_value' + x + '">'
        }
    }
    submit_value += '<button type="submit" class="btn btn-danger print_hide">保存する</button>'

    console.log(submit_value);
    document.getElementById('submit_value').innerHTML = submit_value;
    //window.onload = function(){document.getElementById('submit_value').innerHTML = submit_value};
}
let boxSelect = document.getElementById('box');
boxSelect.addEventListener('change', valueChange);


//boxidを配列に保管するプログラム
for (let x = 0; x < box_num * box_num; x++) {
    var box_id_num = "input_box" + x;
    //console.log(box_id_num);
    box_ids[x] = box_id_num;
}


//id名を動的に生成して配列に追加
for (let x = 0; x < box_num * box_num; x++) {
    var box_id_num = "input_box" + x;
    //console.log(box_id_num);
    box_ids[x] = box_id_num;
}

//配列に入っているid名を使い、値が入った時の処理をする
//for文で動的にIDを生成、動的に生成したIDとchangeを使って状態が変わったらHTMLを書き換えてテキスト状態にする
for (var i = 0; i < box_num * box_num; i++) {
    let boxInput = document.getElementById(box_ids[i]);
    //console.log(boxInput);
    if (i != (box_num * box_num - 1) / 2) {
        boxInput.addEventListener('change', function () {
            if (this.value != "") {
                //console.log("//////////////////////////////////////////////////");
                //console.log(this.value);
                //console.log(this.id);
                var lastChar = this.id.slice(9, this.id.length);
                inputted_box = '<div class="box" id="box_' + lastChar + '">'
                    + '<button type="button" id="' + this.value + '" value="' + this.id + '" class="print_hide inputted_box inputted" onclick="buttonClick(this.value ,this.id)">'
                    + '<i class="fa-solid fa-pen edit_btn inputted" id="edit_' + this.id + '"></i>'
                    + '</button>'
                    + '<p class="inputted_text">' + this.value + '</p>'
                    + '</div>'
                //console.log(inputted_box);
                document.getElementById("box_" + this.id).innerHTML = inputted_box;
                //console.log(this);
            }
            let change_submit_value = document.getElementById(`input_box_value` + lastChar);
            change_submit_value.value = this.value;
        });
    }
}

function buttonClick(id, value) {
    //console.log(id)
    //console.log(value)
    //console.log(inputted_box)
    var lastChar = id.slice(9, id.length);
    edit_box = '<div class="box" id="box_' + lastChar + '">'
        + '<input id="' + id + '" class="input_box" name="input_box" type="text" value="' + value + '" placeholder="ToDoを入力">'
        + '</div>'
    //console.log(edit_box);
    document.getElementById("box_" + id).innerHTML = edit_box;
    //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
    //console.log(this);
    //console.log(this.value)



    var inputChange = document.getElementsByClassName('input_box');
    //console.log(inputChange)
    change_observer();
}




function input_change() {
    for (var i = 0; i < box_num * box_num; i++) {
        //let boxInput = document.getElementById(box_ids[i]);
        //boxInput.addEventListener('change', function () {
        //console.log(`id:${this.id}`);
        //console.log(`value:${this.value}`);
        var lastChar = this.id.slice(9, this.id.length);
        if (this.value != "") {
            inputted_box = '<button type="button" id="' + this.value + '" value="' + this.id + '" class="print_hide inputted_box inputted" onclick="buttonClick(this.value ,this.id)">'
                + '<i class="fa-solid fa-pen inputted" id="edit_' + this.id + '" class="print_hide"></i>'
                + '</button>'
                + '<p class="inputted_text">' + this.value + '</p>'

            //console.log("a");
            //console.log(inputted_box);
            //console.log(`数：${lastChar}`)
            //console.log(`box_${lastChar}`)
            //console.log(document.getElementById(`box_${lastChar}`))
            document.getElementById(`box_${lastChar}`).innerHTML = inputted_box;
            //console.log(this);
            let change_submit_value = document.getElementById(`input_box_value` + lastChar);
            change_submit_value.setAttribute("value", this.value);
        }
        //});
    }
    ChangeFontsize();
}

var inputChange = document.getElementsByClassName('input_box');


title = document.getElementById("InputTitle")
title.addEventListener("change", function(){
    var title_value = document.getElementById("input_box_title")
    title_value.setAttribute("value", this.value);
}, false);


function change_observer() {
    ChangeFontsize();
    for (var i = 0; i < inputChange.length; i++) {
        inputChange[i].addEventListener("change", input_change);
        inputChange[i].addEventListener("change", ChangeFontsize);
    }
}

change_observer();