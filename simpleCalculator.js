function display(value) {
    document.getElementById("result").value += value;
}

function clearScreen() {
    document.getElementById("result").value = "";
}

function calculate() {
    let p = document.getElementById("result").value;
    document.getElementById("result").value = eval(p);  //Hàm eval thực thi các lệnh JavaScript được miêu tả trong chuỗi

}