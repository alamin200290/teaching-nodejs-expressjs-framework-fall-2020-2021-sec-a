"use strict"


$(document).ready(function(){
	

	/*$('input').click(function(){
		$('h1').html('test');
	});*/

	/*$('input').on('keyup', function(){
		//$('body>h1').html('test');
		//$('#head1').html('test');
		//$('.head1').html('test');
		$('body>h1').html($('#name').val());
	});*/

	$('#button').click(function(){

		$.ajax({
			url: 'abc.php',
			type: 'POST',
			data: {name:'alamin', id:'12'},
			success: function(response){
				alert(response);
			},
			error: function(error){

			}
		});
	});
});
