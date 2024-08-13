

class Compañía {
    constructor(nombre) {
      this.nombre = nombre;
      this.flota = [];
      this.vuelos = [];
    }
  
    agregarAvion(avion) {
      this.flota.push(avion);
    }
  
    agregarVuelo(vuelo) {
      this.vuelos.push(vuelo);
    }
  
    obtenerVuelos() {
      return this.vuelos;
    }
  }
  
  
  class Avion {
    constructor(capacidad, modelo) {
      this.capacidad = capacidad;
      this.modelo = modelo;
    }
  
    obtenerCapacidad() {
      return   this.capacidad;
    }
  }
  
  
  class Vuelo {
    constructor(fecha, hora, destino, plazasDisponibles, avion) {
      this.fecha = fecha;
      this.hora = hora;
      this.destino = destino;
      this.plazasDisponibles = plazasDisponibles;
      this.avion = avion;
      this.billetes = [];
    }
  
    agregarBillete(billete) {
      this.billetes.push(billete);
      this.plazasDisponibles--;
    }
  
    obtenerPlazasDisponibles() {
      return this.plazasDisponibles;
    }
  
    obtenerBilletes() {
      return this.billetes;
    }
  }
  
  
  class Billete {
    constructor(numeroAsiento, pasajero, vuelo) {
      this.numeroAsiento = numeroAsiento;
      this.pasajero = pasajero;
      this.vuelo = vuelo;
    }
  
    obtenerNumeroAsiento() {
      return this.numeroAsiento;
    }
  
    obtenerPasajero() {
      return this.pasajero;
    }
  }
  
  
  class Pasajero {
    constructor(nombre, apellidos, edad) {
      this.nombre = nombre;
      this.apellidos = apellidos;
      this.edad = edad;
    }
  
    obtenerNombre() {
      return this.nombre;
    }
  
    obtenerApellidos() {
      return this.apellidos;
    }
  
    obtenerEdad() {
      return this.edad;
    }
  }
  
  
  let compañía = new Compañía("Aerolíneas CO");
  
  let avion1 = new Avion(200, "Boeing 737");
  let avion2 = new Avion(300, "Airbus A320");
  
  compañía.agregarAvion(avion1);
  compañía.agregarAvion(avion2);
  
  let vuelo1 = new Vuelo("2023-03-15", "10:00", "Bogota", 150, avion1);
  let vuelo2 = new Vuelo("2023-03-16", "12:00", "Cali", 200, avion2);
  
  compañía.agregarVuelo(vuelo1);
  compañía.agregarVuelo(vuelo2);
  
  let pasajero1 = new Pasajero("Rodrigo", "Pérez", 30);
  let pasajero2 = new Pasajero("Valentina", "González", 25);
  
  let billete1 = new Billete(1, pasajero1, vuelo1);
  let billete2 = new Billete(2, pasajero2, vuelo2);
  
  vuelo1.agregarBillete(billete1);
  vuelo2.agregarBillete(billete2);
  
  console.log(compañía.obtenerVuelos());
  console.log(vuelo1.obtenerBilletes());
  console.log(pasajero1.obtenerNombre());