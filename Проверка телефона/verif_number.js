function verif() {
    let a = "8(-49-5)12-31-252";
    numberInput = document.getElementById("number_1").value;
    let b = numberInput;
    let a_clean = "";
    let b_clean = "";
    let flag_b = false;
    let i = 0;

    a_clean = a.replace("+7", 8);
    for (let i = 0; i < a.length; i++) {
        a_clean = a_clean.replace("-", "").replace(")", "").replace("", "").replace("(", "");
    }
    console.log("Номер 'a' очищенный: " + a_clean)


    b_clean = b.replace("+7", 8);
    for (let i = 0; i < b.length; i++) {
        b_clean = b_clean.replace("-", "").replace(")", "").replace("", "").replace("(", "");
    }
    console.log("Номер 'b' очищенный: " + b_clean)


    if (b_clean.length <= 7) {
        b_clean = 8495 + b_clean;
    }
    console.log("Номер 'b' с добавлением: " + b_clean)

    // for (let i = 0; i < b_clean.length; i++) {
    //     if (a_clean[i] != b_clean[i]) {
    //         flag_b = false
    //         break
    //     } else {
    //         flag_b = true
    //     }
    // }

    while (i < 11) {
        if (a_clean[i] != b_clean[i]) {
             flag_b = false
             break
        } else {
             flag_b = true
             i++
        }
    }

    if (flag_b == true) {
        console.log("YES")
        result.innerHTML = "Номер соотвтетствует";
    } else {
        console.log("NO")
        result.innerHTML = "Введен некорректный номер";

    }
    
}