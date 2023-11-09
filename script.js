var name = "Jacob";
var today = moment().format('MMMM Do YYYY');
var time = moment().format('h:mm A');
document.getElementById("app").innerHTML = `My name is ${name}<br><br>Today is ${today}<br>Current time: ${time}`;
