"use strict";

// let d = document;

// let zagolovok1 = d.getElementById("test");
// let zagolovok2 = test;
// let zagolovok3 = d.getElementsByTagName("h2");
// let zagolovok4 = d.getElementsByClassName("head__title");
// let zagolovok5 = d.querySelector(".example__item");
// let allLi = d.querySelectorAll("li");
// console.log(allLi);
// console.log(zagolovok1);
// console.log(zagolovok2);
// console.log(zagolovok3);
// console.log(zagolovok4);
// console.log(zagolovok5);

let d = document;
let allLi = d.getElementsByClassName("example__item");
let active = d.querySelector(".example_item--active");
let parent = active.parentElement;
let parent2 = active.parentNode;
console.dir(allLi);
console.log(allLi[3]);
console.dir(active.parentElement);
