/**
 * 
 */


const opciones = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        default: 10,
        alias: 'l'
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplcar', opciones)
    .command('crear', 'Crea un archivo con la tabla de multiplicar especificada', opciones)
    .help()
    .argv;


module.exports = {
    argv
}