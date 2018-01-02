console.log('sanity check cash')
const calc = calculator()



let operator = null


    document.getElementById('one');
    one.addEventListener("click", function (){
    document.getElementById("display").innerHTML += "1"
    });


    document.getElementById('two');
    two.addEventListener("click", function (){
    document.getElementById("display").innerHTML += "2"
});

    document.getElementById('three');
    three.addEventListener("click", function (){
    document.getElementById("display").innerHTML += "3"    
});

    document.getElementById('four');
    four.addEventListener("click", function (){
    document.getElementById("display").innerHTML += "4"
});

    document.getElementById('five');
    five.addEventListener("click", function (){
    document.getElementById("display").innerHTML += "5" 
});

    document.getElementById('six');
    six.addEventListener("click", function (){
    document.getElementById("display").innerHTML += "6"
});

    document.getElementById('seven');
    seven.addEventListener("click", function (){
    document.getElementById("display").innerHTML += "7"
});

    document.getElementById('eight');
    eight.addEventListener("click", function (){
    document.getElementById("display").innerHTML += "8"
});

    document.getElementById('nine');
    nine.addEventListener("click", function (){
    document.getElementById("display").innerHTML += "9"   
});

    document.getElementById('zero');
    zero.addEventListener("click", function (){
    document.getElementById("display").innerHTML += "0"
});

    document.getElementById("doubleZero");
    doubleZero.addEventListener("click", function (){
    document.getElementById("display").innerHTML += "00"
})



    document.getElementById('period');
    period.addEventListener("click", function(){
    document.getElementById("display").innerHTML += "."
    });

    document.getElementById('plus');
    plus.addEventListener("click", function(){
    var plusNums = +display.innerHTML
    calc.load(+display.innerHTML);
    operator = 'add'
    document.getElementById('display').innerHTML = ''
    });

    document.getElementById('subtract');
    subtract.addEventListener("click", function (){
    let subtractNums = +display.innerHTML;
    calc.load(subtractNums);
    operator = 'subtract'
    document.getElementById('display').innerHTML = ''
    });

    document.getElementById('divide');
    divide.addEventListener("click", function (){
    let divideNums = +display.innerHTML;
    calc.load(divideNums);
    operator = 'divide'
    document.getElementById('display').innerHTML = ''
    });

    document.getElementById('multiply');
    multiply.addEventListener("click", function (){
    let multiplyNums = +display.innerHTML;
    calc.load(multiplyNums);
    operator = 'multiply'
    document.getElementById('display').innerHTML = ''
    });

  
    document.getElementById('equal');
    equal.addEventListener("click", function (){
        if (operator === 'add'){ 
           calc.add(+display.innerHTML);
           document.getElementById("display").innerHTML = calc.getTotal();
        } else if (operator === 'subtract'){
            calc.subtract(+display.innerHTML);
            document.getElementById("display").innerHTML = calc.getTotal();
        } else if (operator === 'divide'){
            calc.divide(+display.innerHTML);
            document.getElementById("display").innerHTML = calc.getTotao();
        } else if (operator === 'multiply'){
            calc.multiply(+display.innerHTML);
            document.getElementById("display").innerHTML = calc.getTotal();
        }
    });

    document.getElementById('clear');
    clear.addEventListener("click", function(){
    document.getElementById("display").innerHTML = ''
})

document.getElementById('balance').addEventListener("click", function (){
    document.getElementById('display').innerHTML = calc.recallMemory();
})

document.getElementById('deposit').addEventListener("click", function(){
    let total = display.innerHTML;
    calc.load(total);
    calc.addMemory();
    document.getElementById("display").innerHTML = "0"

})

document.getElementById('withdraw').addEventListener("click", function(){
    let total = display.innerHTML;
    calc.load(total);
    calc.subtractMemory();
    document.getElementById("display").innerHTML = "0"

})