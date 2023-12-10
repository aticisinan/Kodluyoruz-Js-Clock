//Getting user's name and displaying it in the HTML
let userName = prompt("Lütfen Adinizi Giriniz:")
let isim = document.querySelector("#myName")
isim.innerHTML = userName

//Define a function to display the time
/*
function showTime(){
  const clockTime = document.querySelector("#myClock");

  function clock(){
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    const day = date.toLocaleDateString("en-US", {weekday: "long"});
    const time = `${hour}:${minute}:${second}`;
    clockTime.innerHTML = time + " " + day;
    requestAnimationFrame(clock);
    
  }
  clock();
}

document.addEventListener("DOMContentLoaded", showTime)
*/
function zaman(){
  const date = new Date;

  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  let days =["Pazar","Pazartesi","Sali","Carsamba","Persembe","Cuma","Cumartesi"];
  let dayName = days[date.getDay()];

  let clock = document.querySelector("#myClock");
  clock.innerHTML = `${hour}:${minute}:${second} ${dayName}`;

}
setInterval(zaman,1000);
