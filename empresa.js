
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    mostrarDatos() {
        return `Nombre: ${this.nombre}, Edad: ${this.edad}`;
    }
}


class Empleado extends Persona {
    constructor(nombre, edad, sueldoBruto) {
        super(nombre, edad);
        this.sueldoBruto = sueldoBruto;
    }

    mostrarDatos() {
        return `${super.mostrarDatos()}, Sueldo Bruto: ${this.sueldoBruto}`;
    }
}


class Directivo extends Empleado {
    constructor(nombre, edad, sueldoBruto, categoria) {
        super(nombre, edad, sueldoBruto);
        this.categoria = categoria;
        this.subordinados = [];
    }

    agregarSubordinado(empleado) {
        this.subordinados.push(empleado);
    }

    mostrarDatos() {
        let subordinadosDatos = '';
        for (let i = 0; i < this.subordinados.length; i++) {
            subordinadosDatos += this.subordinados[i].mostrarDatos();
            if (i < this.subordinados.length - 1) {
                subordinadosDatos += "; ";
            }
        }
        return `${super.mostrarDatos()}, Categoría: ${this.categoria}, Subordinados: [${subordinadosDatos}]`;
    }
}


class Cliente extends Persona {
    constructor(nombre, edad, telefono) {
        super(nombre, edad);
        this.telefono = telefono;
    }

    mostrarDatos() {
        return `${super.mostrarDatos()}, Teléfono: ${this.telefono}`;
    }
}




const empleado1 = new Empleado("Juan Pérez", 30, 3000);
const empleado2 = new Empleado("Ana López", 25, 2500);
const directivo1 = new Directivo("Carlos Gómez", 45, 5000, "Director General");
directivo1.agregarSubordinado(empleado1);
directivo1.agregarSubordinado(empleado2);

const cliente1 = new Cliente("María Rodríguez", 40, "555")
