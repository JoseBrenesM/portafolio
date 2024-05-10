
    $('#fbutton').click(function () {
        // Obtener el valor del correo electrónico y del mensaje
        var email = $('#email').val();
        var message = $('#message').val();

        // Verificar si los campos no están vacíos
        if (email.trim() !== '' && message.trim() !== '') {
            // Mostrar el SweetAlert
            Swal.fire({
                title: "Mensaje enviado!",
                text: "Gracias por contactarme",
                icon: "success",
                showConfirmButton: true,
                confirmButtonColor: "#f00000" // Color personalizado del botón "Ok"
            }).then((result) => {
                if (result.isConfirmed) {
                    location.reload(); // Recargar la página
                }
            });
        } else {
            // Mostrar un SweetAlert de advertencia si los campos están vacíos
            Swal.fire({
                title: "¡Error!",
                text: "Por favor completa todos los campos.",
                icon: "warning",
                confirmButtonText: "Ok",
                confirmButtonColor: "#f00000" // Color personalizado del botón "Ok"
            });
        }
    });
