var apple = "<div class='itemApple'> <div class='apple'></div> </div>";
var matrizFruit = document.createElement('div');
insertApple();

function insertApple(){
	matrizFruit.innerHTML="<div class='matriz'><table>";
	for (i=0;i<3;i++){
		matrizFruit.innerHTML= matrizFruit.innerHTML + "<tr>";
		for (z=0;z<3;z++){		
			matrizFruit.innerHTML+="<td>" + apple + "</td>";
			alert(matrizFruit.innerHTML);
		}
		matrizFruit.innerHTML+="</tr>";
	}
	
}

	matrizFruit.innerHTML+="</table></div>";
	alert(matrizFruit.innerHTML);

document.getElementById('cake').appendChild(matrizFruit);