/**
 * 
 */

// tipos de required
//const fs = require('fs'); // -- este se refiere a una libreria propia de node
//const fs = require('express'); -- express por ejemplo es un paquete que debe ser instalado previamente
//const fs = require('./fs'); -- estos son archivos que nosotros mismos hemos creado 

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')

const argv = require('./config/yargs').argv

const colors = require('colors');





let comando = argv._[0];

switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite)
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => {
                console.log(`Archivo ${colors.green(archivo)} creado`);
            })
            .catch(error => {
                console.log(error);
            })
        break;

    default:
        console.log('Comando no reconocido');

}


//console.log(process.argv);
//let argv2 = process.argv;

// console.log(argv.base);
// console.log(argv.limite);





// let parametro = argv[2];
// let base = parametro.split('=')[1];




// crearArchivo(base)
//     .then(archivo => {
//         console.log('Archivo creado');
//     })
//     .catch(error => {
//         console.log(error);
//     })