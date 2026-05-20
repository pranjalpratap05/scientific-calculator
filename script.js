function calculate(){

    let num1 = Number(document.getElementById("num1").value);

    let num2 = Number(document.getElementById("num2").value);

    let operation = document.getElementById("operation").value;

    let result;

    if(operation == "+"){
        result = num1 + num2;
    }

    else if(operation == "-"){
        result = num1 - num2;
    }

    else if(operation == "*"){
        result = num1 * num2;
    }

    else if(operation == "/"){
        result = num1 / num2;
    }

    document.getElementById("answer").innerHTML =
    result;
}