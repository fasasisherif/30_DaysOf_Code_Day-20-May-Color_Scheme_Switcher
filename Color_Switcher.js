var body = document.getElementById("body");
var ham = document.getElementsByClassName("ham");
var nav = document.getElementsByTagName("nav");
var two1 = document.getElementsByClassName("two1");
var drop1 = document.getElementsByClassName("drop1");
var one01 = document.getElementsByClassName("one01");
var two02 = document.getElementsByClassName("two02");
var three03 = document.getElementsByClassName("three03");
var four04 = document.getElementsByClassName("four04");
var five05 = document.getElementsByClassName("five05");
var six06 = document.getElementsByClassName("six06");
var seven07 = document.getElementsByClassName("seven07");
var eight08 = document.getElementsByClassName("eight08");
var nine09 = document.getElementsByClassName("nine09");
var ten10= document.getElementsByClassName("ten10");
var eleven11 = document.getElementsByClassName("eleven11");
var twelve12 = document.getElementsByClassName("twelve12");
var thirt = document.getElementsByClassName("thirt");
var fourt = document.getElementsByClassName("fourt");
var fift = document.getElementsByClassName("fift");
var sixt = document.getElementsByClassName("sixt");
var sevent= document.getElementsByClassName("sevent");
var eight = document.getElementsByClassName("eight");
var twelve12 = document.getElementsByClassName("twelve12");



ham[0].addEventListener ("click",myfunc)
two1[0].addEventListener ("click",myfunc2)
one01[0].addEventListener ("click",myfunc3)
two02[0].addEventListener ("click",myfunc4)
three03[0].addEventListener ("click",myfunc5)
four04[0].addEventListener ("click",myfunc6)
five05[0].addEventListener ("click",myfunc7)
six06[0].addEventListener ("click",myfunc8)
seven07[0].addEventListener ("click",myfunc9)
eight08[0].addEventListener ("click",myfunc10)
nine09[0].addEventListener ("click",myfunc11)
ten10[0].addEventListener ("click",myfunc12)
eleven11[0].addEventListener ("click",myfunc13)
twelve12[0].addEventListener ("click",myfunc14)
thirt[0].addEventListener ("click",myfunc15)
fourt[0].addEventListener ("click",myfunc16)
fift[0].addEventListener ("click",myfunc17)
sixt[0].addEventListener ("click",myfunc18)
sevent[0].addEventListener ("click",myfunc19)
eight[0].addEventListener ("click",myfunc20)


var a = 0;
function myfunc (){
nav[0].style.height="240px";
nav[0].style.width="auto";
a++;

if (a%2 === 0){
nav[0].style.height="0px";
nav[0].style.width="auto";		
		}
	}

var b = 0;
function myfunc2(){
drop1[0].style.height="240px";
drop1[0].style.width="auto";	
drop1[0].style.border="2px double #aeaeae";			
b++;

if (b%2 === 0){
drop1[0].style.height="0px";
drop1[0].style.width="auto";	
drop1[0].style.border="0px";					
		}
	}
	
function myfunc3(){
body.style.backgroundColor="blue";			
	}	
function myfunc4(){
body.style.backgroundColor="orange";			
	}		
function myfunc5(){
body.style.backgroundColor="green";			
	}		
function myfunc6(){
body.style.backgroundColor="lightblue";			
	}	
function myfunc7(){
body.style.backgroundColor="lightskyblue";			
	}	
function myfunc8(){
body.style.backgroundColor="darkgreen";			
	}		
function myfunc9(){
body.style.backgroundColor="lightgreen";			
	}		
function myfunc10(){
body.style.backgroundColor="grey";			
	}	
function myfunc11(){
body.style.backgroundColor="lime";			
	}	
function myfunc12(){
body.style.backgroundColor="hotpink";			
	}		
function myfunc13(){
body.style.backgroundColor="yellow";			
	}		
function myfunc14(){
body.style.backgroundColor="purple";			
	}	
function myfunc15(){
body.style.backgroundColor="brown";			
	}	
function myfunc16(){
body.style.backgroundColor="cyan";			
	}		
function myfunc17(){
body.style.backgroundColor="magenta";			
	}		
function myfunc18(){
body.style.backgroundColor="red";			
	}	
function myfunc19(){
body.style.backgroundColor="white";			
	}		
function myfunc20(){
body.style.backgroundColor="darkblue";			
	}	

