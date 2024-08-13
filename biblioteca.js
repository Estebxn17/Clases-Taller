class Autor {
    constructor(nombre, nacionalidad, fechaNacimiento) {
        this.nombre = nombre;
        this.nacionalidad = nacionalidad;
        this.fechaNacimiento = fechaNacimiento;
    }
}

class Libro {
    constructor(nombre, tipo, editorial, año, autor) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.editorial = editorial;
        this.año = año;
        this.autor = autor;
    }
}

class Copia {
    constructor(id, libro) {
        this.id = id;
        this.libro = libro;
        this.estado = 'en biblioteca'; 
    }

    cambiarEstado(nuevoEstado) {
        this.estado = nuevoEstado;
    }
}

class Lector {
    constructor(nombre) {
        this.nombre = nombre;
        this.librosPrestados = [];
        this.multaDias = 0;
    }

    prestarLibro(copia) {
        if (this.librosPrestados.length < 3 && !this.tieneMulta() && copia.estado === 'en biblioteca') {
            copia.cambiarEstado('prestada');
            this.librosPrestados.push(copia);
            return true;
        }
        return false;
    }

    devolverLibro(copia) {
        for (let i = 0; i < this.librosPrestados.length; i++) {
            if (this.librosPrestados[i] === copia) {
                this.librosPrestados.splice(i, 1); 
                break;
            }
        }
        
        if (copia.estado === 'con retraso') {
            this.multaDias += this.diasRetraso(copia) * 2;
        }
        copia.cambiarEstado('en biblioteca');
    }

    tieneMulta() {
        return this.multaDias > 0;
    }

    diasRetraso(copia) {
        
        return copia.diasRetraso ? copia.diasRetraso() : 0;
    }
}

class Biblioteca {
    constructor() {
        this.copias = [];
        this.lectores = [];
    }

    agregarCopia(copia) {
        this.copias.push(copia);
    }

    agregarLector(lector) {
        this.lectores.push(lector);
    }

    realizarPrestamo(lector, copia) {
        if (lector.prestarLibro(copia)) {
            console.log(`El libro ${copia.libro.nombre} ha sido prestado a ${lector.nombre}.`);
            return true;
        }
        console.log(`No se pudo prestar el libro ${copia.libro.nombre} a ${lector.nombre}.`);
        return false;
    }

    recibirDevolucion(lector, copia) {
        lector.devolverLibro(copia);
        console.log(`El libro ${copia.libro.nombre} ha sido devuelto por ${lector.nombre}.`);
    }
}


const autor = new Autor("Autor1", "Colombiana", new Date(1927, 2, 6));
const libro = new Libro("Libro1", "Novela", "Sudamericana", 1967, autor);
const copia = new Copia("C1", libro);
const lector = new Lector("Estebxn 19");
const biblioteca = new Biblioteca();

biblioteca.agregarCopia(copia);
biblioteca.agregarLector(lector);

biblioteca.realizarPrestamo(lector, copia); 
biblioteca.recibirDevolucion(lector, copia); 
