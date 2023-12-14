'use strict';
let fullname = document.querySelector("#label");
let email = document.querySelector("#email");
let message = document.querySelector("#text");
let login = document.querySelector('.section');
let closeLogin = document.querySelector('.exit');
// let inputs = document.getElementsByTagName('input');
function move() {
  fullname.style.top = "-10px";
}
function move2() {
  email.style.top = "70px";
}
function move3() {
  message.style.top = "140px";
}
function back() {
  fullname.style.top = "0px";
}
function back2() {
  email.style.top = "80px";
}
function back3() {
  message.style.top = "160px";
}


function showLog(){
  login.style.display = 'block';
}
function closeLog(){
  login.style.display = 'none';
}