let isim = prompt("isminizi giriniz")
console.log(isim)

let deger = (isim.length > 0) ? `${isim}` : "yabancı"

 let myName =  document.querySelector("#myName")
 myName.innerHTML = `${myName.innerHTML} ${deger}`


 function saatGoster() {
    var date = new Date()
    var gunler = ["pazar", "pazartesi", "salı", "çarşamba", "perşembe", "cuma", "cumartesi"]
    var gun = gunler[date.getDay()]
    var saat = date.getHours()
    var dakika = date.getMinutes()
    var saniye = date.getSeconds()


    saniye = saniye < 10 ? "0" + saniye : saniye;
    dakika = dakika < 10 ? "0" + dakika : dakika;

    var currentTime = saat + ":" + dakika + ":" + saniye + " " + gun

    document.getElementById("myClock").innerText = currentTime
}

saatGoster();
setInterval(saatGoster,1000)