/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var homeElement = document.getElementById("home");
var aboutElement = document.getElementById("about");
var contactElement = document.getElementById("contact");

var homeBtn = document.getElementById("homeBtn");
homeBtn.onclick = function(){
    homeElement.style.display = "block";
    aboutElement.style.display = "none";
    contactElement.style.display = "none";
};
var aboutBtn = document.getElementById("aboutBtn");
aboutBtn.onclick = function(){
    aboutElement.style.display = "block";
    homeElement.style.display = "none"; 
    contactElement.style.display = "none";
};
var contactBtn = document.getElementById("contactBtn");
contactBtn.onclick = function(){
    contactElement.style.display = "block";
    homeElement.style.display = "none";
    aboutElement.style.display = "none";   
};


