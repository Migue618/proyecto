<?php
require 'header.php'; 
?>

<main class="contenedor contenedor-log contenedor-xl">
<h1>Ingresa a tu Cuenta</h1>
    <div class="formulario-log">

    <form >
        <fieldset >

        <!-- <legend>Información Personal</legend> -->

        <label for="correo">E-mail:</label>
        <input type="email" placeholder="Tu E-mail">
        
        <label for="password">Escribe Tu contraseña:</label>
        <input type="password" placeholder="Tu contraseña">

        <div class="boton-campo">
        <input type="submit" value="Ingresar" class="boton">
        </div>

        </fieldset>
    </form>
    </div>

</main>

<?php
require 'footer.php'; 
?>