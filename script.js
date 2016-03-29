//JS.script code originally from UMK Games (https://www.youtube.com/channel/UCfZ-bziQo3R24uHoV4nI7Yw)

var box=document.getElementById('display');


function addtoscreen(x)
{
	box.value +=x;
	//+= para ang input sa textfield ay di ma overwrite
	
	if(x=='c'){
		box.value = '';
	}
	//para pag clinick ang C na button, ma reset or ma clear ang value ng textbox.
}

function answer()
{
	x=box.value;
	x=eval(x);
	box.value=x;
}

//x=box.value means whatever values are exist on textbox it will be move to x variable. eval() is pre-defined JavaScript method to evaluates the arguments.
//ex. eval(x);
//    if x=10+2-5 means eval(10+2-5)
//    then it will evaluate the argument and execute 7 because 10 +2-5 = 7


function backspace()
{
	var number=box.value;
	var len=number.length-1;
	var newnumber=number.substring(0,len);
	box.value=newnumber;
}

//substring() method ini a output lang kung ano ang dineclare sa parameter. ex. var str = "Sakurai Sho" var newStr = substring(0,6); Result: Sakura. Start ang reading sa 0. parang array lang. 
//sa case ng backspace() ung len, naka assign don ung kung ilan ang ititira. gawa ng formula na number.length-1. so ang ginamit na sa parameter ng substring ay (0,len) so ang reading niyan ex. naginput sa calcu. 789. box.value. 789 number-1 78. dahil ang reading 0,1,2 i priprint ang 78. box.value. new number 78.

function power(y)
{
	x=box.value;
	x=Math.pow(x,y);
	box.value=x;
}

//math.pow built in method for power.

//********************************************************************************************************//

