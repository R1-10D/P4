function updateDate(){
    var date =   new Date();//for take the time data
    var setTime =document.getElementById("set_time")
    setTime.innerHTML = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    var setDate = document.getElementById("set_date");
    setDate.innerHTML = date.getDate() + "-" +parseInt( date.getMonth()+1)  + "-" + date.getFullYear();
}
setInterval(updateDate,100)
onload = updateDate();

function getColor(){
var getcolor = document.getElementById("set_color").value;
localStorage.setItem("Color",getcolor);
document.getElementById("time").style.background = localStorage.getItem("Color");
document.getElementById("body").style.background = localStorage.getItem("Color");

}

function setColor(){
document.getElementById("time").style.background = localStorage.getItem("Color");
document.getElementById("body").style.background = localStorage.getItem("Color");
}
setInterval(setColor,100);