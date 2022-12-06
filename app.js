function hoja() {
    var n = document.getElementById("ingreso").value;
    var n2 = document.getElementById("monto-a1").value;

    var resta = (parseInt(n) - parseInt(n2));

    document.getElementById("monto-r1").innerHTML = resta;
    var numero1 = parseInt(numero1);
    var numero2 = parseInt(numero2);
    for (let i = 1; i <= 9; i++) {
    numero1 = document.getElementById("monto-r"+[i]);
    numero2 = document.getElementById("monto-a"+[i+1]);
    // }
    if((numero1 && numero2) == null || (numero1 && numero2) == undefined || (numero1 && numero2) == "" || (numero1 && numero2) < 0 || isNaN(numero1 && numero2)){
    console.log(numero1);
    console.log(numero2);
    console.log("Algo anda mal");
    }else{
        suma = (parseInt(numero1) - parseInt(numero2));

        document.getElementById('monto-r'+[i+1]).innerHTML = suma;
        }
    }
}