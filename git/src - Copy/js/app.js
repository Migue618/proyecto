function operacion(id1, id2, total) {

    var numero1 = parseInt(document.getElementById(id1));
    var numero2 = parseInt(document.getElementById(id2));
   
    var resultadoS = parseInt(numero1 - numero2);
    
    (resultadoS == null || resultadoS == isNaN() || resultadoS == undefined || resultadoS == "") ? 0 : document.getElementById(total).innerHTML = resultadoS;

    // document.getElementById(total).innerHTML = resultadoS;

    console.log(typeof(numero1));
    console.log(typeof(numero2));
    console.log(typeof(resultadoS));
}

function hoja() {
    // value = parseInt(value);

    // operacion('monto-r1', 'monto-a2', 'proof' );
    // operacion('ingreso', 'monto-a1', 'proof1');

    operacion('ingreso', 'monto-a1', 'monto-r1');
    operacion('monto-r1', 'monto-a2', 'monto-r2' );
    operacion('monto-r2', 'monto-a3', 'monto-r3' );
    operacion('monto-r3', 'monto-a4', 'monto-r4' );
    operacion('monto-r4', 'monto-a5', 'monto-r5' );
    operacion('monto-r5', 'monto-a6', 'monto-r6' );
    operacion('monto-r6', 'monto-a7', 'monto-r7' );
    operacion('monto-r7', 'monto-a8', 'monto-r8' );
    operacion('monto-r8', 'monto-a9', 'monto-r9' );
}