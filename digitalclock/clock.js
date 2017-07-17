var clock = document.getElementById('clockdisplay');
	
//  Here I need to declare variables for my id
function displayTime(){
// Here I need to create variables for hours minutes seconds and the date
	var time = new Date();
	var h = (time.getHours() % 12).toString()// 0-23
	var m = time.getMinutes().toString()// 0-59
	var s = time.getSeconds().toString()// 0-59 
	if (h.length < 2 ) { h = "0" + h;}
	
	if (m.length < 2 ) { m = "0" + h;}// if statements are so each set of numbers has 2 corresponding decimal points
	
	if (s.length < 2 ) { s = "0" + s;}
	
	var clock = "#"+ h + m + s; //Here I changed the original clock which was both time and hex to merge and become one clock.
	
	clockdisplay.innerHTML = clock; //Here I created the innerHTML as my variable clock which is the actual hours minutes seconds
	setTimeout('displayTime()', 1000); //setTimeout is to call the function and set it to 1 second intervals and continue on infinite.
	
	document.body.style.backgroundColor = clock;//here I accessed the body and style for the background color and set it to change with the time.

} displayTime();//here I called the function

