box_ids = []

//id名を動的に生成して配列に追加
for (let x = 0; x < box_num * box_num; x++) {
    var box_id_num = "input_box" + x;
    console.log(box_id_num);
    box_ids[x] = box_id_num;
}


//let boxInput = document.getElementById('input_box0');
//boxInput.addEventListener('change', valueInput);



//INPUT BOXを動的に生成するプログラム
var box_num = 3;
var box = '<div class="block" id="block">'
for (let n = 0; n < box_num; n++) {
    box += '<div class="line3">'
    box += '<div class="block_floor">'
    for (let m = 0; m < box_num; m++) {
        box += '<div id="box_input_box' + (n * box_num + m) + '" class="input_box_out">'
        box += '<div class="box">'
        if (n * box_num + m + 1 == (box_num * box_num - 1) / 2 + 1) {
            box += '<input id="input_box' + (n * box_num + m) + '" class="input_box" name="input_box" type="text" value="FREE" placeholder="ToDoを入力">'
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


//セレクトボックスで変更したときにボックスサイズを変更するプログラム
function valueChange() {
    var box_num = boxSelect.value
    var box = '<div class="block" id="block">'
    for (let n = 0; n < box_num; n++) {
        box += '<div class="line' + box_num + '">'
        box += '<div class="block_floor">'
        for (let m = 0; m < box_num; m++) {
            box += '<div id="box_input_box' + (n * box_num + m) + '" class="input_box_out">'
            box += '<div class="box">'
            if (n * box_num + m + 1 == (box_num * box_num - 1) / 2 + 1) {
                box += '<input id="input_box' + (n * box_num + m) + '" class="input_box" name="input_box" type="text" value="FREE" placeholder="ToDoを入力">'
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
}
let boxSelect = document.getElementById('box');
boxSelect.addEventListener('change', valueChange);


//boxidを配列に保管するプログラム
for (let x = 0; x < box_num * box_num; x++) {
    var box_id_num = "input_box" + x;
    console.log(box_id_num);
    box_ids[x] = box_id_num;
}


//id名を動的に生成して配列に追加
for (let x = 0; x < box_num * box_num; x++) {
    var box_id_num = "input_box" + x;
    console.log(box_id_num);
    box_ids[x] = box_id_num;
}

//配列に入っているid名を使い、値が入った時の処理をする
//for文で動的にIDを生成、動的に生成したIDとchangeを使って状態が変わったらHTMLを書き換えてテキスト状態にする
for (var i = 0; i < box_num * box_num; i++) {
    let boxInput = document.getElementById(box_ids[i])
    boxInput.addEventListener('change', function () {
        if (this.value != "") {
            console.log("//////////////////////////////////////////////////")
            console.log(this.value)
            console.log(this.id)
            inputted_box = '<div class="box">'
                + '<button type="button" value="' + this.id + '"class="' + this.value + '" onclick="buttonClick(this.value ,this.className)" class="print_hide inputted_box inputted">'
                + '<i class="fa-solid fa-pen edit_btn" id="edit_' + this.id + '"></i>'
                + '</button>'
                + '<p>' + this.value + '</p>'
                + '</div>'
            console.log(inputted_box)
            document.getElementById("box_" + this.id).innerHTML = inputted_box;
            console.log(this)
        }
    });
}

function buttonClick(id, value) {
    console.log(id)
    console.log(value)
    edit_box = '<div class="box">'
        + '<input id="' + id + '" class="input_box" name="input_box" type="text" value="' + value + '" placeholder="ToDoを入力">'
        + '</div>'
    console.log(edit_box);
    document.getElementById("box_" + id).innerHTML = edit_box;
    console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
    console.log(this);
    console.log(this.value)



    var inputChange = document.getElementsByClassName('input_box');
    console.log(inputChange)
    //inputChange.addEventListener('change', input_change);

    for (var i = 0; i < inputChange.length; i++) {
        inputChange[i].addEventListener("change", input_change);
    }
}




function input_change() {
    for (var i = 0; i < box_num * box_num; i++) {
        let boxInput = document.getElementById(box_ids[i])
        //boxInput.addEventListener('change', function () {
        console.log(this.id);
        console.log(this.value);
        if (this.value != "") {
            inputted_box = '<div class="box">'
                + '<div class="input_box">'
                + '<i class="fa-solid fa-pen" id="edit_' + this.id + '" class="print_hide"></i>'
                + '<p>' + this.value + '</p>'
                + '</div>'
                + '</div>'
            console.log("a")
            console.log(inputted_box)
            document.getElementById("box").innerHTML = inputted_box;
            console.log(this)
        }
        //});
    }
}
var inputChange = document.getElementsByClassName('input_box');
console.log(inputChange)
//inputChange.addEventListener('change', input_change);



for (var i = 0; i < inputChange.length; i++) {
    inputChange[i].addEventListener("change", input_change);
}