var name = "Jacob";

setInterval(() => {
var today = moment().format('dddd, MMMM D, YYYY');
var time = moment().format('h:mm:ss A');
document.getElementById("app").innerHTML = `My name is ${name}<br><br>Today is ${today}<br>Current time: ${time}`;
}, 1000);
