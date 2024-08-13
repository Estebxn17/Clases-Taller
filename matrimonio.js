
class Persona {
    constructor(nombre, apellidos, edad, sexo, domicilio) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.sexo = sexo;
        this.domicilio = domicilio;
    }

    mostrarDatos() {
        return `Nombre: ${this.nombre} ${this.apellidos}, Edad: ${this.edad}, Sexo: ${this.sexo}, Domicilio: ${this.domicilio}`;
    }
}


class Autoridad {
    constructor(nombre, apellidos, cargo) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.cargo = cargo;
    }

    mostrarDatos() {
        return `Nombre: ${this.nombre} ${this.apellidos}, Cargo: ${this.cargo}`;
    }
}


class Matrimonio {
    constructor(fecha, lugar, contrayente1, contrayente2, testigo1, testigo2, autoridad) {
        this.fecha = fecha;
        this.lugar = lugar;
        this.contrayente1 = contrayente1;
        this.contrayente2 = contrayente2;
        this.testigo1 = testigo1;
        this.testigo2 = testigo2;
        this.autoridad = autoridad;
    }

    mostrarDatos() {
        return `
        Fecha: ${this.fecha}
        Lugar: ${this.lugar}
        Contrayente 1: ${this.contrayente1.mostrarDatos()}
        Contrayente 2: ${this.contrayente2.mostrarDatos()}
        Testigo 1: ${this.testigo1.mostrarDatos()}
        Testigo 2: ${this.testigo2.mostrarDatos()}
        Autoridad: ${this.autoridad.mostrarDatos()}
        `;
    }
}


const contrayente1 = new Persona("Juan", "Murillo", 30, "Masculino", "Calle False 345");
const contrayente2 = new Persona("Andrea", "López", 28, "Femenino", "Calle False 123");
const testigo1 = new Persona("Carlos", "Rivera", 35, "Masculino", "Calle True 456");
const testigo2 = new Persona("María", "Rodríguez", 32, "Femenino", "Calle True 789");
const autoridad = new Autoridad("José", "Sanchez", "Juez ");

const matrimonio = new Matrimonio("2024-08-12", "Morelia", contrayente1, contrayente2, testigo1, testigo2, autoridad);

console.log(matrimonio.mostrarDatos());
