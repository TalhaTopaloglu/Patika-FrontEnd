
// HTML SAYFASINDAKİ ELEMENTLERİN SEÇİLMESİ
let btnDOM = document.querySelector("#liveToastBtn");
let listDOM = document.querySelector("#list"); 
let taskDOM = document.querySelector("#task"); 


//FONKSİYONLAR
function check() {
    this.classList.toggle("checked"); // toggle("checked")'i kullanarak tıklanan maddenin üstünü çiz ve yanına tik işareti koy demiş olduk.
}

function removeButton() {
    this.parentElement.remove();  // silme işlemi
}

function newElement(text) {
    text = taskDOM.value;
    let checkValue = "";
    for (let i = 0; i < text.length; i++) {  // boşluk kullanımı kontrolü
        if (text[i] != " ") {
            checkValue += text[i];
        }
    }

    if (text == "" || checkValue.length == 0) {  // input değeri boş girildiğinde ve sadece ' ' karakteri girildiğinde 
        $(".error").toast("show"); //error classını kullanarak 
    } else {
        $(".success").toast("show");
        let liDOM = document.createElement('li') //yeni bir li elementi yaratacagımızı ilan edip yaratacagımız li elementini liDOM değişkenine atayacağımızı söyledik.
        listDOM.appendChild(liDOM); // Yaratacağımız liDOM değişkeninin her seferinde mevcut listenin en sonuna eklenmesi gerektiğini tanımladık.
        liDOM.innerHTML = taskDOM.value;
        liDOM.onclick = check;
        let closeButton = document.createElement("span");
        closeButton.textContent = "\u00D7";
        closeButton.classList.add("close");
        closeButton.onclick = removeButton;
        liDOM.append(closeButton);
        listDOM.append(liDOM);
        taskDOM.value = "";
    }
}    