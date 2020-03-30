

var curTime;
var c_hr, c_min, c_sec, c_ampm;
var el_clock = document.getElementById('clock');

var hr   = document.getElementById('alarmhrs');	
var min  = document.getElementById('alarmmins');		
var ap   = document.getElementById('ampm');
var test = document.getElementById('test');
var debugr =  document.getElementById('dbug');
var alarm;
var ctime;

var msg = "";

function update() { 
  curTime  = moment().format('MMM D YYYY'+ ",  " + 'hh:mm:ss A');  
  el_clock.innerHTML = curTime; 
  ctime  = moment().format('hh:mm:A');
  check(); 
};

setInterval(update, 1000);
//===================================
 
//=====================================
function check(){
  var zh =  moment().format('hh');
  var qh = parseInt(zh);
  var zm =  moment().format('mm');
  var qm = parseInt(zm);
  var za = moment().format('A');
  
  var myhr = hr.options[hr.selectedIndex].value;
  var mymin = min.options[min.selectedIndex].value;
  var myap =  ap.options[ap.selectedIndex].value;
  // reset option select to current time ( only minutes needed here?)
   if ( qh > myhr || qm > mymin || za > myap ) {
     bump();
   }
  
  // check if alarm time is met
    /*
	 if (alarm === ctime) {	
      var audio = document.getElementById( 'timer-beep' );
      audio.volume = 0.2;
      audio.play();
	  test.innerHTML = 'Timer Done!';
      alarmClear();     
		};
	*/
};

// ==== reset drop down times ===

function bump(){  
  // -------- reset hours ---------
  var tempH = moment().format('hh');
  var t =  parseInt(tempH); 
  for(var i, j = 0; i = hr.options[j]; j++) {
    if(i.value == t) {
      hr.selectedIndex = j;
      break;
    };
  };
  // -------- reset mins ---------
  var tempM = moment().format('mm');
  var t2 =  parseInt(tempM); 
  for(var k, l = 0; k = min.options[l]; l++) {
    if(k.value == t2) {
      min.selectedIndex = l;
      break;
    };
  };
 
 // -------- reset am/pm ---------
  var tempA = moment().format('A'); 
  for(var x, y = 0; x = ap.options[y]; y++) {
    if(x.value == tempA) {
      ap.selectedIndex = y;
      break;
    };
  };
 
}; // end bump
bump(); // on first load

// populate select options dropdowns

function hoursMenu(){
	var select = document.getElementById('alarmhrs');
	var hrs = 12
	for (i=1; i <= hrs; i++) {
		select.options[select.options.length] =
      new Option( i < 10 ? "0" + i : i, i);		
	}; 
};
hoursMenu();

function minMenu(){
	var select = document.getElementById('alarmmins');
	var mins = 59;
	for (i=0; i <= mins; i++) {
		select.options[select.options.length] =
      new Option(i < 10 ? "0" + i : i, i);
	};
};
minMenu();




function addZero(num){
     return(num < 10 ? "0" + num : num);
};


function alarmSet() {    
    var selectedHour = hr.options[hr.selectedIndex].value;
    var selectedMin = min.options[min.selectedIndex].value;   
    var selectedAP = ap.options[ap.selectedIndex].value;
    var alarmTime = addZero(selectedHour) + ":" +
        addZero(selectedMin) + ":" + selectedAP;
    alarm = alarmTime; 
    test.innerHTML = "Alarm set to -  " + alarm;
  
    // disable the alarm till reset
    document.getElementById('alarmhrs').disabled = true;
	document.getElementById('alarmmins').disabled = true;	
	document.getElementById('ampm').disabled = true;
	
	notifyBackgroundPage(alarm);
  
};

function alarmClear(){
  alarm = "";
  test.innerHTML = "No Alarm set ";
  document.getElementById('alarmhrs').disabled = false;
	document.getElementById('alarmmins').disabled = false;	
	document.getElementById('ampm').disabled = false;
	
	notifyBackgroundPage("clear");
	
	location.reload(); 
};

// ===============================================================================

function handleResponse(message) {
  //console.log(`Message from the background script:  ${message.response}`);
  debugr.innerHTML = "Response: " + message.response;
}

function handleError(error) {
  //console.log(`Error: ${error}`);
   debugr.innerHTML = "Error: \n" + error ;
}

function notifyBackgroundPage(mess) {
 
  var sending = browser.runtime.sendMessage({
    greeting: mess
  });
  sending.then(handleResponse, handleError);  
}


function handleMessage(request, sender, sendResponse) {
    if(request.greet) {
	   debugr.innerHTML = "Req greet: " + request.greet;
	   if( request.greet === "Cleared") {
		   location.reload(); 
	   }
		 
	}
}
browser.runtime.onMessage.addListener(handleMessage);

// ====================================================================================
function getClick(e) {
  var e_id = e.target.id; 
  if(e_id == "setButton") {
     alarmSet()
  }
  if(e_id == "clearButton") {
     alarmClear()
  }
}

window.addEventListener("click", getClick);
