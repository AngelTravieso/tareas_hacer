const { v4: uuidv4 } = require('uuid');

class Tarea {

    id =  '';
    desc = '';
    completadoEn = null;

    constructor( desc ) {
        this.id = uuidv4();
        this.desc = desc;
        // Esto es redundante
        this.completadoEn = null;
    }

}

module.exports = Tarea;