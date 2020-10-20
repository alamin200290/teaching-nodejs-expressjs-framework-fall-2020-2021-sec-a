"use strict"

function ajax(){

	var data = {
		'name' 	: 'alamin',
		'id'	: '1234',
		'dept'	: 'CS'
	};

	var json = JSON.stringify(data);
	
	var xhttp = new XMLHttpRequest();
	xhttp.open('GET', 'abc.php?data='+json, true);
	xhttp.send();
	
	xhttp.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200){
			//var data = JSON.parse(this.responseText);
			//alert(data.name);
			alert(this.responseText);
		}
	}
}
