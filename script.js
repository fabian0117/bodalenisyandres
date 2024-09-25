<script>
    document.getElementById('confirmation-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Evita que el formulario se envíe de la manera predeterminada

        // Aquí puedes agregar código para enviar los datos a un servidor si lo necesitas
        // Por ahora, solo redirigiremos a la página de agradecimiento

        window.location.href = 'gracias.html'; // Redirige a la página de agradecimiento
    });
</script>
