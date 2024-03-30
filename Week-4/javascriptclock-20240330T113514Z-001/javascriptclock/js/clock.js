const myName = document.querySelector("#myName");
const myClock = document.querySelector("#myClock");

let nameData = prompt("Lütfen İsminizi Giriniz!");
myName.innerHTML = nameData;

function myClockTime() {
    let timeData = new Date();
    let day = timeData.getDay();

    switch (day) {
        case 1:
            day = "Pazartesi";
            break;
        case 2:
            day = "Salı";
            break;
        case 3:
            day = "Çarşamba";
            break;
        case 4:
            day = "Perşembe";
            break;
        case 5:
            day = "Cuma";
            break;
         case 6:
            day = "Cumartesi";
            break;
        case 7:
            day = "Pazar";
            break;
    }
    myClock.innerHTML = timeData.toLocaleTimeString() + " " + day;
}
setInterval(myClockTime, 1000);
myClockTime();



