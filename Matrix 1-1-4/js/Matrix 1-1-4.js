/* fork of: https://codepen.io/t3h2mas/pen/EKYOWO/
*/
var low = 0, high = 15;
var tog;
var speed = 40;
var ChaarSet ;
var rainColor = "#0F0"; 
var drawer;
var c = document.getElementById("c");
var ctx = c.getContext("2d");
//making the canvas full screen
c.height = window.innerHeight;
c.width = window.innerWidth;

var kanji = "丐丑丒专且丕世〓丘丙业乂乃乄久乆乇么义乊之乌乍乎丛东丝丞丟丠両丢丣两严並丧丩个丫丬中丮丯亰亱亲儾￯";
var chinese = "田由甲申甴电甶男甸甹町画甼甽甾甿畀畁畂畃畄畅畆畇畈畉畊畋界畍畎畏畐畑";  
var burmese = "ကခဂဃငစဆဇဈဉညဋဌဍဎဒဓနပဖဗယရလဟဠအဢဣဤဥဦဧဨဩဪါာိီုူေဲဳဴဵံ့း္်ျြွှဿ၀၁၂၃၄၅၆၇၈၉၊။၌၍၎၏ၐၑၒၓၔၕၖၗၘၙၚၛၜၝၞၟၠၡၢၣၤၥၦၧၨၩၪၫၬၭၮၯၰၱၲၳၴၵၶၷၸၹၺၻၼၽၾၿႀႁႂႃႄႅႆႇႈႉႊႋႌႍႎႏ";
var mtrx1 = "zʎxʍʌnʇsɹbdouɯlʞɾıɥƃ ɟǝpɔqɐбвгдежзийклмнопрстуфхцшщъыьэюяѐёђѓєѕіїјљњћќѝў1234567890";
var mtrx2 = "♦▀▄█▌▐░▒▬♦◊◘◙◦☼♠♣▣▤▥▦▩◘◙LÞxÔ@ŽŒà@žÞ1234567890,L¦Ò:Œ1234567890~°Ü";
var mtrx3 = "♦▀▄█▌▐░▒▬♦◊◘◙◦☼♠♣▣▤▥▦▩◘◙1234567890甼甽甾甿畀畁畂畃畄畅畆畇畈畉1234567890ɯlʞɾıɥƃ ɟǝpɔqɐбвгдежзийклмнопрပဖဗယ1234567890ရလဟဠအဢဣဤဥဦဧဨဩ1234567890乄久乆乇么义乊之乌乍乎丛东丝丞丟1234567890Œà@žÞ1234567890,L¦Ò:";
//converting the string into an array of single characters
kanji = kanji.split("");
chinese = chinese.split("");
burmese = burmese.split("");
mtrx1 = mtrx1.split("");
mtrx2 = mtrx2.split("");
mtrx3 = mtrx3.split("");
var test;
var CharSet = "kj"; 
var font_size = 10; 
var columns = c.width / font_size; //number of columns for the rain

//an array of drops - one per column
var drops = [];
//x below is the x coordinate
//1 = y co-ordinate of the drop(same for every drop initially)
for (var x = 0; x < columns; x++)
