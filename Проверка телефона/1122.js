let a = "8(-49-5)12-31-252";
let b = "+7-4-9-5-1-2-3-1-2-5-2";
let c = "12(312)5(2)";
let d = "8999999";
let a_clean = "";
let b_clean = "";
let c_clean = "";
let d_clean = "";
let flag_b = false
let flag_c = false
let flag_d = false

function verif() {
    a_clean = a.replace("+7", 8)
    for (let i = 0; i < a.length; i++) {
        a_clean = a_clean.replace("-", "").replace(")", "").replace("", "").replace("(", "");
    }
    b_clean = b.replace("+7", 8)
    for (let i = 0; i < b.length; i++) {
        b_clean = b_clean.replace("-", "").replace(")", "").replace("", "").replace("(", "");
    }
    c_clean = c.replace("+7", 8)
    for (let i = 0; i < c.length; i++) {
        c_clean = c_clean.replace("-", "").replace(")", "").replace("", "").replace("(", "");
    }
    d_clean = d.replace("+7", 8)
    for (let i = 0; i < d.length; i++) {
        d_clean = d_clean.replace("-", "").replace(")", "").replace("", "").replace("(", "");
    }

    if (a_clean.length <= 7) {
        a_clean = 8495 + a_clean
    }
    if (b_clean.length <= 7) {
        b_clean = 8495 + b_clean
    }
    if (c_clean.length <= 7) {
        c_clean = 8495 + c_clean
    }
    if (d_clean.length <= 7) {
        d_clean = 8495 + d_clean
    }

    for (let i = 0; i < b_clean.length; i++) {
        if (a_clean[i] == b_clean[i]) {
            flag_b = true
        } else {
            flag_b = false
        }
    }

    for (let i = 0; i < c_clean.length; i++) {
        if (a_clean[i] == c_clean[i]) {
            flag_c = true
        } else {
            flag_c = false
        }
    }

    for (let i = 0; i < d_clean.length; i++) {
        if (a_clean[i] == d_clean[i]) {
            flag_d = true
        } else {
            flag_d = false
        }
    }

    if (flag_b === true) {
        console.log("YES")
    } else {
        console.log("NO")
    }

    if (flag_c === true) {
        console.log("YES")
    } else {
        console.log("NO")

    }if (flag_d === true) {
        console.log("YES")
    } else {
        console.log("NO")
    }
}