<?php
require 'header.php'; 
?>

<main class="contenedor contenedor-registro contenedor-reg">

<h1>Registro a <Span>Mi Presupuesto Personal</Span></h1>

<div class="formu">

    <form>
        <fieldset>

        <legend>Información Personal</legend>

        <label for="nombre">Nombre:</label>
        <input type="text" placeholder="Tu nombre">

        <label for="correo ">E-mail:</label>
        <input type="email" placeholder="Tu E-mail">

        <label for="telefono">Teléfono:</label>
        <input type="number" placeholder="Tu número telefónico">
        
        <label for="password">Crea una contraseña:</label>
        <input type="password" placeholder="Tu contraseña">

        <div class="boton-campo">
        <input type="submit" value="Registrarme" class="boton">
        </div>

    </fieldset>
    </form>
    </div>

</main>

<?php
require 'footer.php'; 
?>