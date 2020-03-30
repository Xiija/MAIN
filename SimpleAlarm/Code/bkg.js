// Open Source 2020
var alarm;
var ctime;
var myTimer;
var audio = new Audio('data/5.mp3');
 
function handleMessage(request, sender, sendResponse) {
    
    if(request.greeting == "clear") {
		alarm = "";
		clearInterval(myTimer);
		 audio.pause();		
		 send("Cleared");
	}
	else {
		alarm = request.greeting;
		myTimer = setInterval(update, 1000);
	}
  sendResponse({response: alarm});
}

browser.runtime.onMessage.addListener(handleMessage);

function update() { 
  
  ctime  = moment().format('hh:mm:A');
  // debug - send(ctime);
  
  if (ctime === alarm) {	    
      audio.volume = 0.2;
      audio.play();	
	  alarm = "";
	  send("Cleared");
	};
};

function handleResponse(message) {
  //console.log(`Message from the background script:  ${message.response}`);
  // debugr.innerHTML = message.response;
}

function handleError(error) {
   //console.log(`Error: ${error}`);
   // debugr.innerHTML = "error";
}

function send(mess) { 
  var sending = browser.runtime.sendMessage({
    greet: mess
  });
  sending.then(handleResponse, handleError);  
}




