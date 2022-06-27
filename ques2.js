// Ques.2 : Write a program to show the current date in DD-MM-YYYY HH:MM:SS format.

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();

var currentOffset = today.getTimezoneOffset();
var ISTOffset = 330;   
var ISTTime = new Date(today.getTime() + (ISTOffset + currentOffset)*60000);
var HH = ISTTime.getHours()
var MM = ISTTime.getMinutes()
var SS = ISTTime.getSeconds()



today = dd + '-' + mm + '-' + yyyy;
console.log(today);
time = HH + ":" + MM + ":"+ SS;
console.log(time)


