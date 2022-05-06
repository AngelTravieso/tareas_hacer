require('colors');

const { 
    guardarDB,
    leerDB
 } = require('./helpers/guardarArchivo');
const { 
    inquirerMenu,
    pausa,
    leerInput 
} = require('./helpers/inquirer');
const Tareas = require('./models/tareas');

const main = async() => {

    console.clear();

    let opt = '';
    const tareas = new Tareas();

    const tareasDb = leerDB();

    if(tareasDb) {
        tareas.cargarTareasFromArray(tareasDb);
    }

    do {
        // Imprimir el menú
        opt = await inquirerMenu();

        switch(opt) {
            case '1':
                // Crear opocion
                const desc = await leerInput('Descripción:');
                tareas.crearTarea( desc );
            break;
            case '2':
                tareas.listadoCompeto();
            break;
            case '3':
                tareas.listarPendientesCompletadas(true);
            break;
            case '4':
                tareas.listarPendientesCompletadas(false);
                break;
        }

        guardarDB( tareas.listadoArr );

        await pausa(); 

    } while (opt !== '0');

    // pausa();

}


main();