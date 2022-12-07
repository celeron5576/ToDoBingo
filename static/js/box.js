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
    box += '<div>'
    box += '<div class="block_floor">'
    for (let m = 0; m < box_num; m++) {
        box += '<div id="box_input_box' + (n * box_num + m) + '">'
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


function valueChange() {
    var box_num = boxSelect.value
    var box = '<div class="block" id="block">'
    for (let n = 0; n < box_num; n++) {
        box += '<div>'
        box += '<div class="block_floor">'
        for (let m = 0; m < box_num; m++) {
            box += '<div id="box_input_box' + (n * box_num + m) + '">'
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


    for (let x = 0; x < box_num * box_num; x++) {
        var box_id_num = "input_box" + x;
        console.log(box_id_num);
        box_ids[x] = box_id_num;
    }
    
    
    for (var i = 0; i < box_num * box_num; i++) {
        let boxInput = document.getElementById(box_ids[i])
        boxInput.addEventListener('change', function () {
            console.log(this.id);
            console.log(this.value);
            if (this.value != "") {
                inputted_box = '<div class="inputtedbox">'
                + '<i class="fa-solid fa-pen" id="edit_'+ this.id +'"></i>'
                + '<p>'+this.value+'</p>'
                + '</div>'
                console.log(inputted_box)
                document.getElementById("box_"+this.id).innerHTML = inputted_box;
                console.log(this)
            }
        });
    }
}
let boxSelect = document.getElementById('box');
boxSelect.addEventListener('change', valueChange);

//id名を動的に生成して配列に追加
for (let x = 0; x < box_num * box_num; x++) {
    var box_id_num = "input_box" + x;
    console.log(box_id_num);
    box_ids[x] = box_id_num;
}


//配列に入っているid名を使い、値が入った時の処理をする
for (var i = 0; i < box_num * box_num; i++) {
    let boxInput = document.getElementById(box_ids[i])
    boxInput.addEventListener('change', function () {
        if (this.value != "") {
            inputted_box = '<div class="inputtedbox">'
            + '<button onclick="buttonClick("'+this.id+'")"><i class="fa-solid fa-pen edit_btn" id="edit_'+ this.id +'"></i></button>'
            + '<p>'+this.value+'</p>'
            + '</div>'
            console.log(inputted_box)
            document.getElementById("box_"+this.id).innerHTML = inputted_box;
            console.log(this)
        }
    });
    function edit(id){
        console.log(id)
    }
}

function buttonClick(a){
    alert(a);
}