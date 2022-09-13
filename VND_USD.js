function ConvertToUSD() {
    var VND = document.getElementById('VND').value
    if (VND === "") {
        alert('Error! Enter Number')
    } else {
        VND = parseFloat(VND)
        if (VND < 0){alert('Error! Enter Number')}
            else
        {
            var USD = VND / 23000
            //alert(USD)
            document.getElementById('ToUSD').innerHTML = USD
        }
    }
//in giá trị biến vào vị trí id trong html

    console.log(typeof USD)
}

function ConvertToVND() {
    var USD = document.getElementById('USD').value
    if (USD === "") {
        alert('Error! Enter Number')
    } else {
        USD = parseFloat(USD)
        if (USD < 0) {
            alert('Error! Enter Number')
        } else {
            var VND = USD * 23000
            //alert(VND)
            document.getElementById('ToVND').innerHTML = VND
        }
    }
}
console.log(USD)
console.log(VND)
