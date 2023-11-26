// // alert('Привет Мир')
// // alert(5/2)

// var a;
// let x;
// x = "Hello"
// const y = 10;
// a = null;

// console.log(x, y, a)
// console.log(typeof x);
// console.log(5/2, 5%2);
// console.log(4 ** (1/2));
// let s = "my" + "string"
// console.log(s);

// let year = 2015;
// if (year == 2015) console.log('2015');
// if (year == 2012) {
//     console.log("Good")
//     console.log("Buy")
// }else if (year > 2015){
//     console.log("> 2015");
// }else{
//     console.log("Vau");
// }

// let age = 19;
// let TreanrOperator = (age > 18) ? true : false;
// console.log(TreanrOperator)

// let user;
// console.log(user ?? "Аноним")

// let a = 10;
// while (a>0){
//     console.log(a)
//     a--;
// }

// for(let i = 0; i < 10; i++){
//     console.log(i)
// }

// let c = 2 + 2;
// switch (c){
//     case 3:
//         console.log("Мало");
//         break;
//     case 4:
//         console.log("Норм");
//         break;
//     case 5:
//         console.log("Много");
//         break;
//     default:
//         console.log("Нет такого")
// }

// function showMessage(){
//     console.log("dfgjdgj")
// }
// showMessage();
// showMessage();
// showMessage();

// let xyz = prompt("Как тебя зовут")
// console.log(xyz)

// let x = prompt("Первое число")
// let y = prompt("Второе число")

// console.log(x.charAt(0))
// console.log(y.charAt(0))


// if (x.charAt(0) == y.charAt(0)) {
//     console.log('Совпадают');
// }else{
//     console.log("Не совпадают");
// }


// let a = prompt("Введите строку")
// s = a.length

// for (let i = s; i>0; i--){
//     console.log(a.charAt(i))
// }


// function coll(){
//     let a = prompt("Число для Гипотезы Коллатца")
//     while (a != 1){
//         if (a % 2 == 0){
//             a = a / 2
//         }else{
//             a = ((a * 3) + 1)
//         }
//     console.log(a)
// }
// }


// let name = prompt("Напишите имя")
// let age = prompt("Уточните возраст")

// function name_age(){

//     l = name + " имеет возраст " + age + " и он зрелый "
//     console.log(l)
//     coll()
// }
// name_age()



function massif(){
    let flag = true;
    let n = prompt("Введите длину массива: ");
    let num = [];
    for(let i = 0; i < n; i++){
        let m = prompt("Число: ")
        num.push(m)
    }
    for(let j = 0; j < num.length; j++){
        if (num[j] % 2 != 0) {
            flag = false;
            break;
        }
    }

    if (flag == false){
        console.log('Нечетное');
    } else {
        console.log('Все четные');
    }
}

massif()

function massif(){
    let flag = false;
    let n = prompt("Введите длину массива: ");
    let num = [];
    for(let i = 0; i < n; i++){
        let m = prompt("Число: ")
        num.push(m)
    }
    for(let j = 0; j < num.length; j++){
        if (num[j] % 2 != 0) {
            flag = true;
            break;
        }
    }

    if (flag == true){
        console.log('Один элемент нечетный');
    } else {
        console.log('Все элементы четные');
    }
}

massif()

function massif(){
    let flag = false;
    let n = prompt("Введите длину массива: ");
    let num = [];
    let num5 = [];
    for(let i = 0; i < n; i++){
        let m = prompt("Число: ")
        num.push(m)
    }
    for(let j = 0; j < num.length; j++){
        if (num[j] % 5 == 0) {
            num5.push(num[j])
        }
    }
    console.log(num5)

    
}

massif()

