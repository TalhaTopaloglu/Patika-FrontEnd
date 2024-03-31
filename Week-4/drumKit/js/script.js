const Abutton = document.querySelector("#A");
const Sbutton = document.querySelector("#S");
const Dbutton = document.querySelector("#D");
const Fbutton = document.querySelector("#F");
const Gbutton = document.querySelector("#G");
const Hbutton = document.querySelector("#H");
const Jbutton = document.querySelector("#J");
const Kbutton = document.querySelector("#K");
const Lbutton = document.querySelector("#L");
const buttons = document.querySelectorAll(".btn");
const boom = document.getElementById("boom")
const kick = document.getElementById("kick")
const clap = document.getElementById("clap")
const hihat = document.getElementById("hihat")
const openhat = document.getElementById("openhat")
const ride = document.getElementById("ride")
const snare = document.getElementById("snare")
const tom = document.getElementById("tom")


document.addEventListener("keypress", run);
document.addEventListener("keydown",stop);

function run(e){
    let pressKey = e.key.toUpperCase();
    console.log(pressKey);

    if(pressKey == "A"){
        boom.play();
    }
    if(pressKey == "S"){
        kick.play();
    }
    if(pressKey == "D"){
        clap.play();
    }
    if(pressKey == "F"){
        hihat.play();
    }
    if(pressKey == "G"){
        openhat.play();
    }
    if(pressKey == "H"){
        ride.play();
    }
    if(pressKey == "J"){
        snare.play();
    }
    if(pressKey == "K"){
        tink.play();
    }
    if(pressKey == "L"){
        tom.play();
    }
}

function stop(e){
    let pressKey = e.key.toUpperCase();
    console.log(pressKey);

    if(pressKey == "A"){
        boom.pause();
    }
    if(pressKey == "S"){
        kick.pause();
    }
    if(pressKey == "D"){
        clap.pause();
    }
    if(pressKey == "F"){
        hihat.pause();
    }
    if(pressKey == "G"){
        openhat.pause();
    }
    if(pressKey == "H"){
        ride.pause();
    }
    if(pressKey == "J"){
        snare.pause();
    }
    if(pressKey == "K"){
        tink.pause();
    }
    if(pressKey == "L"){
        tom.pause();
    }
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        let letter = button.innerHTML;
        switch (letter) {
            case "A":
                console.log("A ya tıklandı");
                break;
            case "S":
                console.log("S ya tıklandı");
                break;
            case "D":
                console.log("D ya tıklandı");
                break;
            case "F":
                console.log("F ya tıklandı");
                break;
            case "G":
                console.log("G ya tıklandı");
                break;
            case "H":
                console.log("H ya tıklandı");
                break;
            case "J":
                console.log("J ya tıklandı");
                break;
            case "K":
                console.log("K ya tıklandı");
                break;
            case "L":
                console.log("L ya tıklandı");
                break;
        }
    })
})
