<?php
	

	$data = $_GET['data'];
	$json = json_decode($data);

	echo $json->name;


	//echo "done";

	/*$data = '{
		"name" : "alamin",
		"age"  : 12
	}';*/

	/*
	$data = [
		"name" => "alamin",
		"age" => 12
	];

	header('Content-type: application/json');
	$json = json_encode($data);
	echo $json;	*/

	/*[
		{
			"name" => "alamin",
			"age" => 12
		},
		{
			"name" => "alamin",
			"age" => 12
		}
	]*/


?>

