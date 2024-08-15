<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $nombre = $_POST["nombre"];
    $apellido = $_POST['apellido'];
    $cedula = $_POST['cedula'];
    $telefono = $_POST['telefono'];
    $fecha_nac = $_POST['fecha_nac'];
    $salario = $_POST['salario'];
    $email = $_POST['email'];
    $sitio_web = $_POST['sitio_web'];
    $contraseña = hash("sha256", $_POST['contraseña']);
    

    // Conexión a la base de datos
    $conexion = new mysqli("localhost", "root", "", "login");

    // Verifica la conexión
    if ($conexion->connect_error) {
        die("Error en la conexión: " . $conexion->connect_error);
    }

    // Prepara la consulta y ejecuta la inserción
    $consulta = "INSERT INTO usuario (nombre, apellido, cedula, telefono, fecha_nac, salario, email, sitio_web, contraseña) 
    VALUES ('$nombre', '$apellido', '$cedula', '$telefono', '$fecha_nac', '$salario', '$email', '$sitio_web', '$contraseña')";
    
    if ($conexion->query($consulta) === TRUE) {
        // Registro exitoso, redirige a ingreso.php
    header("Location: ingreso.php");
    exit;
    } else {
        echo "Error en el registro: " . $conexion->error;
    }

    // Cierra la conexión
    $conexion->close();
}
?>

<?php
if(isset($_POST['submit'])){
    $cedula = $_POST['cedula'];
    if (strlen($cedula) != 10 && strlen($cedula) != 14) {
        $alert = '<p class="msg_error">Debe tener 10 dígitos si es Cédula o 14 si es RUC</p>';
    } else {
        if (strlen($cedula) == 10) { // Verificamos si es una cédula
            $cedula = str_split($cedula); // Transformamos el número ingresado en un vector
            // Resto del código de validación de cédula que proporcionaste
            
            if ($val_cedula == true) {
                // Cédula válida
            } else {
                $alert = '<p class="msg_error">Cédula no válida</p>';
            }
        } elseif (strlen($cedula) == 14) { // Verificamos si es un RUC
            // Código de validación de RUC (si deseas implementarlo)
        }
    }
}
?>

