var name;
function func1(){
    name = prompt("Hello!!" + "\n\n Enter your name");
    alert("Hello " + name + "\n\nWelcome to the site");
}

function getTheDate(){
    var d = new Date();
    var dd = d.getDate();
    var year = d.getFullYear();
    
    var m=["January", "February", "March", "April", "May", "June", "July", "August","September", "October", "November", "December"];
    
    var month = m[d.getMonth()];
    
    var display = month + " " + dd + ", " + year;
    document.getElementById("datespace").innerHTML=display;
    
    var hours=d.getHours();
    if(hours>=0 && hours<4 || hours>=21 && hours<=23)
        document.getElementById("greeting").innerHTML=("Good Night " + name);
    if(hours>=4 && hours<12)
        document.getElementById("greeting").innerHTML=("Good Morning " + name);
    if(hours>=12 && hours<16)
        document.getElementById("greeting").innerHTML=("Good Afternoon " + name);
    if(hours>=16 && hours<21)
        document.getElementById("greeting").innerHTML=("Good Evening " + name);
}

function lastMod(){
    var mod= document.lastModified;
    document.getElementById("modified").innerHTML=mod;
}