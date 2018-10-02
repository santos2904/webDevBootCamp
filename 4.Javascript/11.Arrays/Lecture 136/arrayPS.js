// PS1 
function printReverse(array){
	for (var i = array.length - 1; i >= 0; i--){
		console.log(array[i])
	}
}
printReverse([1,2,3,4])

//PS2
function isUniform(array){
	var num = array[0];
	for(var i = 0; i < array.length; i++){
		if (array[i] !== num) {
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

/*function sumArray(array){
	var total = 0;
	for (i = 0; i < array.length; i++){
		total += array[i];
	}
	return total;
}*/

//PS4
function maxArray(array){
	var max = array[0];
	for(var i = 0; i < array.length; i++){
		if(array[i] > i){
			max = array[i];
		}
	}
	return max;
}
maxArray([10,20,100,30])

/*function maxArray(array){
	var max = array[0];
	array.forEach(function(index){
		if(array[index] > index){
			max = array[index];
		}
	});
	return max;
}*/
