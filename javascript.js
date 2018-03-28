var apple = "<div class='item changeSize '> <div class='apple itemFruits'></div> </div>";
var orange = "<div class='item changeSize '> <div class='orange itemFruits'></div> </div>";
var banana = "<div class='item changeSize '> <div class='banana itemFruits'></div><div class='banana-line itemFruits'></div> </div>";
var blueberry = "<div class='item changeSize '> <div class='blueberry itemFruits'></div> </div>";
var cherry = "<div class='item changeSize '> <div class='cherry cherry1 itemFruits'></div><div class='cherry cherry2 itemFruits'></div> </div>";
var matrizFruit = document.createElement('div');
var table;
var checkApple=false;
var checkOrange = false;
var checkBanana = false;
var checkBlueberry = false;
var checkCherry = false;


var pushApple=document.getElementsByClassName("pointerApple");
pushApple[0].addEventListener('click', function(){insertFruit("Apple");}, false);

var pushOrange=document.getElementsByClassName("pointerOrange");
pushOrange[0].addEventListener('click', function(){insertFruit("Orange");}, false);

var pushBanana=document.getElementsByClassName("pointerBanana");
pushBanana[0].addEventListener('click', function(){insertFruit("Banana");}, false);

var pushBlueberry=document.getElementsByClassName("pointerBlueberry");
pushBlueberry[0].addEventListener('click', function(){insertFruit("Blueberry");}, false);


var pushCherry=document.getElementsByClassName("pointerCherry");
pushCherry[0].addEventListener('click', function(){insertFruit("Cherry");}, false);


function insertFruit(fruit){
	if (fruit==="Apple"){
		while (checkApple==true){
		var deleteElement = document.getElementsByClassName('matrizApple');
		deleteElement[0].remove();
		checkApple = false;
		return;
		}
		var fruity=apple;
		checkApple = true;
		settingFruits(fruit,fruity);
	} else if (fruit==="Orange") {
		while (checkOrange==true){
		var deleteElement = document.getElementsByClassName('matrizOrange');
		deleteElement[0].remove();
		checkOrange = false;
		return;
		}
		var fruity = orange;
		checkOrange = true;
		settingFruits(fruit,fruity);
	}
	else if (fruit==="Banana") {
		while (checkBanana==true){
		var deleteElement = document.getElementsByClassName('matrizBanana');
		deleteElement[0].remove();
		checkBanana = false;
		return;
		}
		var fruity = banana;
		checkBanana = true;
		settingFruits(fruit,fruity);
	}
	else if (fruit==="Blueberry") {
		while (checkBlueberry==true){
		var deleteElement = document.getElementsByClassName('matrizBlueberry');
		deleteElement[0].remove();
		checkBlueberry = false;
		return;
		}
		var fruity = blueberry;
		checkBlueberry = true;
		settingFruits(fruit,fruity);
	}

	else if (fruit==="Cherry") {
		while (checkCherry==true){
		var deleteElement = document.getElementsByClassName('matrizCherry');
		deleteElement[0].remove();
		checkCherry = false;
		return;
		}
		var fruity = cherry;
		checkCherry = true;
		settingFruits(fruit,fruity);
	}
	/*
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
	*/
}


// fruit --> Matching the string of the fruit to a class name to set the single matrix
// fruity --> Matching the single divs of the fruit to each td of the table

function settingFruits(fruit,fruity){
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

	

