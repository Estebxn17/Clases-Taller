

class Veterinario {
    constructor(nombre, apellidos, especialidad) {
      this.nombre = nombre;
      this.apellidos = apellidos;
      this.especialidad = especialidad;
      this.clientes = [];
    }
  
    agregarCliente(cliente) {
      this.clientes.push(cliente);
    }
  
    listarClientes() {
      return this.clientes.map(cliente => cliente.codigo);
    }
  
    buscarCliente(codigo) {
      return this.clientes.find(cliente => cliente.codigo === codigo);
    }
  }
  
  
  class Cliente {
    constructor(codigo, apellido, numeroCuentaBancaria, direccion, telefono) {
      this.codigo = codigo;
      this.apellido = apellido;
      this.numeroCuentaBancaria = numeroCuentaBancaria;
      this.direccion = direccion;
      this.telefono = telefono;
      this.personas = [];
      this.mascotas = [];
    }
  
    agregarPersona(persona) {
      this.personas.push(persona);
    }
  
    agregarMascota(mascota) {
      this.mascotas.push(mascota);
    }
  
    listarMascotas() {
      return this.mascotas.map(mascota => mascota.alias);
    }
  
    buscarMascota(alias) {
      return this.mascotas.find(mascota => mascota.alias === alias);
    }
  }
  
  
  class Persona {
    constructor(nombre, dni) {
      this.nombre = nombre;
      this.dni = dni;
      this.clientes = [];
    }
  
    agregarCliente(cliente) {
      this.clientes.push(cliente);
    }
  
    listarClientes() {
      return this.clientes.map(cliente => cliente.codigo);
    }
  }
  
  
  class Mascota {
    constructor(codigo, alias, especie, raza, colorPelo, fechaNacimientoAproximada, pesoMedio, pesoActual) {
      this.codigo = codigo;
      this.alias = alias;
      this.especie = especie;
      this.raza = raza;
      this.colorPelo = colorPelo;
      this.fechaNacimientoAproximada = fechaNacimientoAproximada;
      this.pesoMedio = pesoMedio;
      this.pesoActual = pesoActual;
      this.historialMedico = new HistorialMedico(this);
    }
  
    agregarEnfermedad(enfermedad) {
      this.historialMedico.agregarEnfermedad(enfermedad);
    }
  
    agregarVacuna(vacuna) {
      this.historialMedico.agregarVacuna(vacuna);
    }
  
    obtenerHistorialMedico() {
      return this.historialMedico;
    }
  }
  
  
  class Enfermedad {
    constructor(nombre, fechaInicio) {
      this.nombre = nombre;
      this.fechaInicio = fechaInicio;
      this.mascotas = [];
    }
  
    agregarMascota(mascota) {
      this.mascotas.push(mascota);
    }
  
    listarMascotas() {
      return this.mascotas.map(mascota => mascota.alias);
    }
  }
  
  
  class Vacuna {
    constructor(nombre, fechaAplicacion, enfermedad) {
      this.nombre = nombre;
      this.fechaAplicacion = fechaAplicacion;
      this.enfermedad = enfermedad;
      this.mascotas = [];
    }
  
    agregarMascota(mascota) {
      this.mascotas.push(mascota);
    }
  
    listarMascotas() {
      return this.mascotas.map(mascota => mascota.alias);
    }
  }
  

  class HistorialMedico {
    constructor(mascota) {
      this.mascota = mascota;
      this.enfermedades = [];
      this.vacunas = [];
    }
  
    agregarEnfermedad(enfermedad) {
      this.enfermedades.push(enfermedad);
    }
  
    agregarVacuna(vacuna) {
      this.vacunas.push(vacuna);
    }
  
    obtenerEnfermedades() {
      return this.enfermedades.map(enfermedad => enfermedad.nombre);
    }
  
    obtenerVacunas() {
      return this.vacunas.map(vacuna => vacuna.nombre);
    }
  }

let veterinario = new Veterinario("Pedro", "Paredes", "Medicina general");
let cliente = new Cliente("CLI001", "Salzar", "1234567890", "Calle 1", "555-1234");
let mascota = new Mascota("MAS001", "Lucas", "Perro", "Golden", "Dorado", "2020-01-01", 20, 25);

veterinario.agregarCliente(cliente);
cliente.agregarMascota(mascota);

console.log("Veterinario:");
console.log(veterinario);

console.log("\nCliente:");
console.log(cliente);

console.log("\nMascota:");
console.log(mascota);