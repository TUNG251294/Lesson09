function checkBMI() {
    let weight = Number(document.getElementById('weight').value);

    let height = Number(document.getElementById('height').value);
    let result, BMI;

    BMI = weight / Math.pow(height,2);
    //Hàm mũ 2 không được nhập ^2
    if (BMI < 18.5){result = "Under Weight";
    }
    else if (BMI<25){result ="Normal";
    }
    else if (BMI<30){result = "Over Weight";
    }
    else {result = "Obese";}
    /*console.log(weight)
    console.log(height)
    console.log(result)
     Câu lệnh kiểm lỗi*/
    //alert(result);
    document.getElementById('result').innerHTML = result;
}

