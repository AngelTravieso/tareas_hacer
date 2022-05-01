require('colors');
const { inquirerMenu, pausa, leerInput } = require('./helpers/inquirer');
const Tareas = require('./models/tareas');

const main = async() => {

    let opt = '';
    const tareas = new Tareas();

    do {
        opt = await inquirerMenu();

        switch(opt) {
            case '1':
                // Crear opocion
                const desc = await leerInput('Descripción:');
                tareas.crearTarea( desc );

            break;
            case '2':
                // Listar las opciones
                console.log(tareas._listado);
            break;
        }

        await pausa(); 

    } while (opt !== '0');

    // pausa();

}


main();