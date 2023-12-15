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

function count_2() {
    let currentDate = new Date();
    console.log ("с 1 января 1970 г.: " + Math.floor((currentDate)) + " в мил-сек.");
    console.log ("с 1 января 1970 г.: " + Math.floor((currentDate)/1000) + " в сек.");
    console.log ("с 1 января 1970 г.: " + Math.floor((currentDate)/60000) + " в мин.");
    console.log ("с 1 января 1970 г.: " + Math.floor((currentDate)/3600000) + " в час.");
    console.log ("с 1 января 1970 г.: " + Math.floor((currentDate)/86400000) + " в днях.");

    let start = document.getElementById("dateInput_1").value;
    let end = document.getElementById("dateInput_2").value;
    console.log(start)
    console.log(end)
    let a = Date.parse(start);
    let b = Date.parse(end);
    console.log(a);

    let hour = Math.floor(Math.abs(b-a)/(1000*60*60*24)*24);
    let minute = Math.floor(Math.abs(b-a)/(1000*60*60*24)*24*60);
    let second = Math.floor(Math.abs(b-a)/(1000*60*60*24)*24*60*60);

    console.log(hour);
    console.log(minute);
    console.log(console);
    result_2.innerHTML = "Разница в: <" + hour + ":" + minute + ":" + second + ">";
}
