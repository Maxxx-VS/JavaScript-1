function count_1() {
    let numberInput = document.getElementById("numberInput").value;
    let time = numberInput;
    let hour = Math.floor (time / 3600);
    let hour_rem = time - (hour * 3600);
    let minute = Math.floor (hour_rem / 60);
    let second = time - (hour * 3600) - (minute * 60);
    result_1.innerHTML = "Время: <" + hour + ":" + minute + ":" + second + ">";

    console.log("Общее время: " + time);
    console.log("Часов: " + hour);
    console.log("Минут: " + minute);
    console.log("Секунд: " + second);

}

