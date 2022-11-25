<?php
require 'header.php';
?>

<div class="contenedor">


    <!-- <p>
        <button id="boton">Click</button>
    </p> -->
    <!-- <div id="divUno">Primer div</div>
    <div id="divDos">Segundo div</div>
    <div id="divTres">Tercer div</div> -->

    <tr>
        <td>RESULTADO</td>
        <td id="proof">HOla</td>
        <td id="proof1">HOla</td>
    </tr>


    <div class="ingreso">

        <h2>Tus Ingresos Mensuales</h2>
        <div class="numero">
            <input id="ingreso" class="campo" type="number" required="required">
            <input onclick="hoja()" type="sumbit" value="Calcular" class="boton">
        </div>
    </div>

    <div class="tabla" >
        <div class="table encabezado">
            <p class="color">Concepto</p>
            <p class="color">Inversiones</p>
            <p class="color">Deudas</p>
            <p class="color">Ahorro</p>
            <p class="color">Despensa</p>
            <p class="color">Gastos Fijos</p>
            <p class="color">Cuidado Personal</p>
            <p class="color">Gustos</p>
            <p class="color">Regalos</p>
            <p class="color">Emergencia</p>
        </div> <!-- .encabezado -->

        <div class="table monto-a">
            <p class="color-t">Monto Asignado</p>
            <input value="0" id="monto-a1" type="number" required="required"> 
            <input value="0" id="monto-a2" type="number" required="required">
            <input value="0" id="monto-a3" type="number" required="required">
            <input value="0" id="monto-a4" type="number" required="required">
            <input value="0" id="monto-a5" type="number" required="required">
            <input value="0" id="monto-a6" type="number" required="required">
            <input value="0" id="monto-a7" type="number" required="required">
            <input value="0" id="monto-a8" type="number" required="required">
            <input value="0" id="monto-a9" type="number" required="required">
        </div> <!-- .monto-a -->

        <div class="table monto-r">
            <p class="color-t">Monto Restante</p>
            <p id="monto-r1"></p>  
            <p id="monto-r2"></p>  
            <p id="monto-r3"></p>  
            <p id="monto-r4"></p>  
            <p id="monto-r5"></p>  
            <p id="monto-r6"></p>  
            <p id="monto-r7"></p>  
            <p id="monto-r8"></p>  
            <p id="monto-r9"></p>  
        </div> <!-- .monto-r -->
        
        <div class="table porcentaje-a">
            <p class="color-t">Porcentaje Asignado</p>
            <p id="porcentaje-a1"></p>
            <p id="porcentaje-a2"></p>
            <p id="porcentaje-a3"></p>
            <p id="porcentaje-a4"></p>
            <p id="porcentaje-a5"></p>
            <p id="porcentaje-a6"></p>
            <p id="porcentaje-a7"></p>
            <p id="porcentaje-a8"></p>
            <p id="porcentaje-a9"></p>
        </div> <!-- .porcentaje-a" -->

        <div class="table porcentaje-r">
            <p class="color-t">Porcentaje Restante</p>
           <p id="porcentaje-r1"></p> 
           <p id="porcentaje-r2"></p>
           <p id="porcentaje-r3"></p>
           <p id="porcentaje-r4"></p>
           <p id="porcentaje-r5"></p>
           <p id="porcentaje-r6"></p>
           <p id="porcentaje-r7"></p>
           <p id="porcentaje-r8"></p>
           <p id="porcentaje-r9"></p>
        </div> <!-- .porcentaje-r" -->
    </div> <!-- .table -->
</div>

<script src="src/js/app.js"></script>
<script src="src/js/practicas.js"></script>

<?php
require 'footer.php';
?>