var socket = io();

// ON escuchar informacion 
socket.on('connect', function() {
    console.log('Conectado al servidor');

});

socket.on('disconnect', function() {
    console.log('Se ha perdido la conexion al servidor');

});

// Emit enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Hector',
    mensaje: 'Hola socket'
}, function(resp) {
    console.log('respuesta server: ', resp);

});

socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);

});