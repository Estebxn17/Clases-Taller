


class EmpleadoSanitario {
    constructor(numeroEmpleado, nombre, tipo) {
        this.numeroEmpleado = numeroEmpleado;
        this.nombre = nombre;
        this.tipo = tipo;
    }
}


class Medico extends EmpleadoSanitario {
    constructor(numeroEmpleado, nombre, especialidad) {
        super(numeroEmpleado, nombre, 'Medico');
        this.especialidad = especialidad;
    }
}


class Enfermero extends EmpleadoSanitario {
    constructor(numeroEmpleado, nombre) {
        super(numeroEmpleado, nombre, 'Enfermero');
    }
}


class Paciente {
    constructor(numeroHistoriaClinica, nombre, direccion) {
        this.numeroHistoriaClinica = numeroHistoriaClinica;
        this.nombre = nombre;
        this.direccion = direccion;
        this.medicos = [];
        this.enfermeros = []; 
        this.analisis = []; 
    }

    agregarMedico(medico) {
        this.medicos.push(medico);
    }

    agregarEnfermero(enfermero) {
        this.enfermeros.push(enfermero);
    }

    agregarAnalisis(analisis) {
        this.analisis.push(analisis);
    }
}


class Analisis {
    constructor(numeroReferencia, tipoAnalisis, fecha, medico, enfermeros, resultados) {
        this.numeroReferencia = numeroReferencia;
        this.tipoAnalisis = tipoAnalisis;
        this.fecha = fecha;
        this.medico = medico; 
        this.enfermeros = enfermeros; 
        this.resultados = resultados;
    }
}




const medico1 = new Medico('M001', 'Dr. Carlos', 'Cardiología');
const medico2 = new Medico('M002', 'Dra. Maria', 'Neurología');


const enfermero1 = new Enfermero('E001', 'Martin López');
const enfermero2 = new Enfermero('E002', 'Fernanda Martínez');


const paciente = new Paciente('H001', 'Pedro Ruiz', 'Calle False 123');


paciente.agregarMedico(medico1);
paciente.agregarMedico(medico2);
paciente.agregarEnfermero(enfermero1);
paciente.agregarEnfermero(enfermero2);


const analisis1 = new Analisis('A001', 'Sangre', new Date('2024-08-10'), medico1, [enfermero1, enfermero2], 'Todo en orden');


paciente.agregarAnalisis(analisis1);

console.log(paciente);

