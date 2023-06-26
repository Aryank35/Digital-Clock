const hours = document.getElementById("hour");
const mins = document.getElementById("mins");
const secs = document.getElementById("sec");
const dates = document.getElementById("date");
setInterval(function(){
    let a = new Date();
    let hour = a.getHours();
    let min = a.getMinutes();
    let sec = a.getSeconds();
    let date = a.getDate();
    let month = a.getMonth();
    let year = a.getFullYear();
    // console.log(`${date} date, ${hour} Hour, ${min} Minutes ${sec} Seconds`);
    hours.innerHTML = `<h1>${hour}</h1>`;
    mins.innerHTML = `<h1>${min}</h1>`;
    secs.innerHTML = `<h1>${sec}</h1>`;
    dates.innerHTML = `<p>${date}/${month}/${year}</p>`;
},1000);
