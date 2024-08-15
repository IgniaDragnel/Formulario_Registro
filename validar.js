document.addEventListener("DOMContentLoaded", function() {
    const inputs = document.querySelectorAll('input[pattern]');
    inputs.forEach(input => {
        const errorId = input.getAttribute('data-error-id');
        const errorSpan = document.getElementById(errorId);
        
        input.addEventListener('input', function() {
            if (!this.validity.valid) {
                errorSpan.style.display = 'block';
            } else {
                errorSpan.style.display = 'none';
            }
        });
    });

    const salarioInput = document.getElementById("salario");
    const salarioError = document.getElementById("salario-error");

    salarioInput.addEventListener("input", function() {
        salarioError.textContent = "";
        if (!validarSalario(this.value)) {
            salarioError.textContent = "El salario está fuera de rango";
        }
    });

    function validarSalario(salario) {
        const salarioNumerico = parseFloat(salario);
        return salarioNumerico >= 450 && salarioNumerico <= 5000;
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const emailInput = document.getElementById("email");
    const emailError = document.getElementById("email-error");

    emailInput.addEventListener("input", function() {
        emailError.textContent = "";
        if (!validarEmail(this.value)) {
            emailError.textContent = "Email inválido";
        }
    });

    function validarEmail(email) {
        const patronEmail = /^[a-zA-Z0-9._%+-]+@(gmail|yahoo|hotmail|espe)\.(com|edu|ec)$/;
        return patronEmail.test(email);
    }

    const sitioWebInput = document.getElementById("sitio_web");
    const sitioWebError = document.getElementById("sitio-web-error");

    sitioWebInput.addEventListener("input", function() {
        sitioWebError.textContent = "";
        if (!validarSitioWeb(this.value)) {
            sitioWebError.textContent = "URL inválida";
        }
    });

    function validarSitioWeb(url) {
        const patronURL = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
        return patronURL.test(url);
    }

    const contraseñaInput = document.getElementById("contraseña");
    const contraseñaError = document.getElementById("contraseña-error");

    contraseñaInput.addEventListener("input", function() {
        validarContraseña(this.value);
    });

    function validarContraseña(contraseña) {
        const patronContraseña = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,12}$/;
        
        if (patronContraseña.test(contraseña)) {
            contraseñaError.textContent = "";
        } else {
            contraseñaError.textContent = "Contraseña inválida";
        }
    }
});


