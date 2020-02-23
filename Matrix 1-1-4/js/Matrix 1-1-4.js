
/* ---------------------------------- */

function myFunction() // Options button
{ document.getElementById("myDropdown").classList.toggle("show");
}

function linkit() //can do with html?
{ window.open("https://codepen.io/Xiija/#");   
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e)
{
    if (!e.target.matches('.dropbtn')) 
    {  var myDropdown = document.getElementById("myDropdown");
       if (myDropdown.classList.contains('show')) 
       {  myDropdown.classList.remove('show');
       }
    }
}

// stop dropdown from closing after a click ...so user can keep changing speed etc
document.getElementById("myDropdown").addEventListener("click", function(e) 
{  e.stopPropagation();   
}); 

// NOTE: STILL need to toggle "options" button .. can click and NOT choose.. stays green "hover" bkg
$(".dropdown").hover(
    function(event)
    { // The mouse has entered the element, can reference the element via 'this'
      // console.log(" mouse IN");
    },
    function (event)
    {  // The mouse has left the element, can reference the element via, 'this'
       // console.log(" mouse OUT");
      if (myDropdown.classList.contains('show')) 
       {  myDropdown.classList.remove('show');
       }
    }
 );

// ===============================
var myVar = setInterval(function(){ myTimer() }, 1000);
function myTimer() {
    var d = new Date();
    var t = d.toLocaleTimeString();
    document.getElementById("demo").innerHTML = t;
}

function set(){
  var audio = document.getElementById("audiosample");
   audio.volume = 0.02;
}
window.onresize = reload;
window.onload = set;
