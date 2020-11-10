const sumLargestNumbers = function(data) {
    var highestInt = 0;
    var secondHighestInt = 0;
    var answer = 0;
    for (var i=0; i < data.length; i++) {
        if (data[i] > highestInt) {
            secondHighestInt = highestInt;
            highestInt = data[i]; 
        }
        else if(data[i] === highestInt || data[i] > secondHighestInt) {
            secondHighestInt = data[i];
        }
    }
    answer = highestInt + secondHighestInt;
    return answer;
}
console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));