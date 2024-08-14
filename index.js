"use strict";
let fullname = document.querySelector("#label");
let email = document.querySelector("#email");
let message = document.querySelector("#text");
let login = document.querySelector(".display-log");
let login2 = document.querySelector(".section-rel");
let closeLogin = document.querySelector(".exit");
let menu_button = document.querySelector("#menu-button");
let side_nav = document.querySelector(".side-nav");
let side_nav_exit = document.querySelector(".exit");
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

function showLog1() {
  login2.style.display = "block";
}
function showLog() {
  login.style.display = "block";
}
function closeLog1() {
  login2.style.display = "none";
}
function closeLog() {
  side_nav.style.display = "none";
  login.style.display = "none";
}

function showsidenav() {
  side_nav.style.display = "block";
}
function closesidenav() {
  side_nav.style.display = "none";
}
