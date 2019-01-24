var url = "https://api.somafm.com/channels.json" ;
var num = 0;
var i = 0;
var active = 0;

var x = function load()  // function n a variable so you can use.... setInterval
{   if( i >= 31)
    { clearInterval( x ); 
      return;
    }
     $.getJSON(url , function(data) 
     { 
        var imgs = data.channels[i].image;          
        var elem = document.createElement("img");
        elem.src = imgs;  
        elem.setAttribute("id",  i);
        elem.setAttribute("height",  "100");
        elem.setAttribute("width",  "100");
        elem.setAttribute("onclick" ,  "chng(" +i+ ")" );      
        document.getElementById("imgMain").appendChild(elem); 
        ++i;      
     });         
}

function play()
{
   
    $.getJSON(url , function(data) 
    {  var id = data.channels[num].id;
       var chan = data.channels[num].title;
       var last = data.channels[num].lastPlaying;
       var img = data.channels[num].image;
       var indx = last.indexOf(" - ");
       var artist =  last.substring(0,indx);
       var song =  last.substring(indx+2);
       var myObj = "<h2>" + chan + "</h2><br> " + artist + " : " + song;
       $("#pix").attr("src", img);
       $(".two").html(myObj); 
       var width = window.innerWidth
       || document.documentElement.clientWidth|| document.body.clientWidth; 
       $(".three").html("Width: " + width); 
     
       var aud = "http://ice1.somafm.com/" + id + "-128-mp3";
      
       $('audio#audiosample').attr('src', aud );
     if(active)
     {         
       $('audio#audiosample').attr('autoplay', "true" );
     }
    }); 
 
}

function chng(clicked_id)
{ var btn = document.getElementById(clicked_id);
  num = btn.id; 
  active = 1;
  play();
}

// load new station every 10th of a second till done
// used instead of FOR .. because need for a pause
 setInterval(x,100); 
 play();