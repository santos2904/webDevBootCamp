


//PS2
function isUniform(array){
	var arr = array[0];
	for (var i = 0; i < array.length; i++) {
		if(array[i] !== arr) {
			return false;
		}
	}
	return true;
}
isUniform([1,2,3,4])
isUniform([1,1,1,1])


//PS3
function sumArray(array){
	var sum = 0;
	array.forEach(function(add) {
		sum += add;
	});
	return sum;
}
sumArray([1,2,3,4])

//PS4
function maxArray(array){
	var max = array[0];
	array.forEach(function(index){
		if(array[index] > index){
			max = array[index];
		}
	});
	return max;
}
maxArray([10,20,100,30])