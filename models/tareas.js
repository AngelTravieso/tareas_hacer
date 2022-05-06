const Tarea = require('./tarea');
class Tareas {

    _listado = {};

    get listadoArr() {

        const listado = [];

        Object.keys(this._listado).forEach(key => {
            const tarea = this._listado[key];
            listado.push( tarea );
        });

        return listado;

    }

    constructor() {
        this._listado = {};
    }

    cargarTareasFromArray( tareas = [] ) {
        tareas.forEach((tarea) => {
            this._listado[tarea.id] = tarea;             
        });
    }

    crearTarea( desc = '' ) {
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }

    listadoCompeto() {

        console.log();

        this.listadoArr.forEach((tarea, i) => {
            const index = `${i + 1}`.green;
            const { desc, completadoEn } = tarea;
            
            const status = completadoEn !== null 
                    ? 'Completada'.green 
                    : 'Pendiente'.red;

            console.log(`${index}. ${desc} :: ${status}`);
        });
    }

    listarPendientesCompletadas( completadas = true ) {

        console.log();
        let contador = 0;

        this.listadoArr.forEach(tarea => {

            const { desc, completadoEn } = tarea;
            const status = ( completadoEn )
                    ? 'Completada'.green 
                    : 'Pendiente'.red;

            if(completadas) {
                if (completadoEn) { 
                    contador += 1;
                    console.log(`${contador.toString().green}. ${desc} :: ${status}`);
                }
            } else {
                
                if (!completadoEn) { 
                    contador += 1;
                    console.log(`${contador.toString().green}. ${desc} :: ${status}`);
                }

            }
        
        });

    }

}

module.exports = Tareas;