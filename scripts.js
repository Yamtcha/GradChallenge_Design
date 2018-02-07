/*
The javascript file should hide/display content when the button is clicked as per the example given.
Use straight javascript and avoid JQuery. You can use any resource to set this up. 
Some hints are given below but you can use any structure or approach of your choosing.

*/

document.getElementById("button").addEventListener("click", function(){
    if (document.getElementById("button").innerHTML === "Show Content"){
        document.getElementById("button").innerHTML = "Hide Content";
        document.getElementById("flexbox" ).style.display = "flex";
    }else{
        document.getElementById("flexbox" ).style.display = "none";
        document.getElementById("button").innerHTML = "Show Content";
    }  
});