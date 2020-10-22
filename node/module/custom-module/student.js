/*var id = "12";
var name = "alamin";

function getName (){
	return "Alamin";
}

module.exports.id = id;
module.exports.getName = getName();*/

/*const student = {
	id: 12,
	name: 'alamin',
	cgpa: 2,
	getName: () => this.name,
	getCgpa: () => this.cgpa
}*/

//module.exports.std = student;

/*module.exports = {
	id: 12,
	name: 'alamin',
	cgpa: 2,
	getName: function(){return this.name},
	getCgpa: function(){return this.cgpa}
}*/


module.exports = function(){

	return {
		id: 12,
		name: 'alamin',
		cgpa: 2,
		getName: function(){return this.name},
		getCgpa: function(){return this.cgpa}
	}
}