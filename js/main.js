function resultsOfSum(numberOne,numberTwo){
    return Number(numberOne) + Number(numberTwo);
}

function isGreaterThanTen(){
    var valueOne = document.getElementById('valueOne');
    var valueTwo = document.getElementById('valueTwo');

    if(resultsOfSum(valueOne.value,valueTwo.value)>10){
        exampleModalLabel.innerHTML = '<h2>É maior que 10! (:</h2>'
        result.innerHTML = valueOne.value+' + '+valueTwo.value+' = '+resultsOfSum(valueOne.value,valueTwo.value);
    }else{
        exampleModalLabel.innerHTML = '<h2>É menor que 10! ):</h2>'
        result.innerHTML = valueOne.value+' + '+valueTwo.value+' = '+resultsOfSum(valueOne.value,valueTwo.value);
    }
}