var apple = "<div class='item changeSize '> <div class='apple itemApple'></div> </div>";
var orange = "<div class='item changeSize '> <div class='orange itemApple'></div> </div>";
var matrizFruit = document.createElement('div');
var table;
var checkApple=false;





var pushApple=document.getElementsByClassName("pointerApple");
pushApple[0].addEventListener('click', function(){insertApple("Apple");}, false);

var pushOrange=document.getElementsByClassName("pointerOrange");
pushOrange[0].addEventListener('click', function(){insertApple("Orange");}, false);


function insertApple(fruit){
	if (fruit==="Apple"){
		if (checkApple==true){
		var deleteElement = document.getElementsByClassName('matrizApple');
		deleteElement[0].remove();
		checkApple = false;
		return;
		}
		var fruity=apple;
		checkApple = true;
	} else if (fruit==="Orange") {
		var fruity = orange;
	}

	table = "<div class='matriz"+fruit+"'><table>";
	for (i=0;i<3;i++){
		table += "<tr>";
		for (z=0;z<3;z++){		
			table+="<td>" + fruity + "</td>";
		}
		table+="</tr>";
	}
	table+="</table></div>";
	matrizFruit.innerHTML += table;
	document.getElementById('cake').appendChild(matrizFruit);
}

	

