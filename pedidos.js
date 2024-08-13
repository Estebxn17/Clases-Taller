
class Producto {
    constructor(nombre, precio, cantidad, impuesto, existencias) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
        this.impuesto = impuesto;
        this.existencias = existencias;
    }

    calcularPrecioFinal() {
        return this.precio * this.cantidad * (1 + this.impuesto);
    }

    verificarExistencias() {
        return this.existencias >= this.cantidad;
    }
}

class Estado {
    constructor(estado) {
        this.estado = estado;
    }
}


class Pago {
    procesarPago() {
        
    }
}


class TarjetaCredito extends Pago {
    constructor(numero, fechaCaducidad, tipo) {
        super();
        this.numero = numero;
        this.fechaCaducidad = fechaCaducidad;
        this.tipo = tipo;
    }

    procesarPago() {
        return `Pago procesado con tarjeta ${this.tipo} número ${this.numero}`;
    }
}


class Efectivo extends Pago {
    constructor(moneda) {
        super();
        this.moneda = moneda;
    }

    procesarPago() {
        return `Pago procesado en efectivo (${this.moneda})`;
    }
}


class Cheque extends Pago {
    constructor(nombre, entidad) {
        super();
        this.nombre = nombre;
        this.entidad = entidad;
    }

    procesarPago() {
        return `Pago procesado con cheque de ${this.nombre} en ${this.entidad}`;
    }
}


class Pedido {
    constructor(fecha, estado) {
        this.fecha = fecha;
        this.estado = new Estado(estado);
        this.productos = [];
        this.pagos = [];
    }

    agregarProducto(producto) {
        if (producto.verificarExistencias()) {
            this.productos.push(producto);
        } else {
            console.log(`Producto ${producto.nombre} no hay suficientes existencias.`);
        }
    }

    agregarPago(pago) {
        this.pagos.push(pago);
    }

    calcularCostoTotal() {
        let total = 0;
        for (let producto of this.productos) {
            total += producto.calcularPrecioFinal();
        }
        return total;
    }

    mostrarEstado() {
        return `Estado del pedido: ${this.estado.estado}`;
    }
}


class Cliente {
    constructor(nombre, direccion, telefono) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
    }

    realizarPedido(pedido) {
        console.log(`Pedido realizado por ${this.nombre} en la fecha ${pedido.fecha}`);
        console.log(`Costo total: ${pedido.calcularCostoTotal()}`);
        console.log(pedido.mostrarEstado());
    }
}


const producto1 = new Producto("Laptop", 1000, 1, 0.16, 10);
const producto2 = new Producto("Mouse", 20, 2, 0.16, 5);

const tarjetaCredito = new TarjetaCredito("1234-5678-9012-3456", "12/25", "VISA");

const pedido = new Pedido("2024-08-12", "Pendiente");
console.log(pedido.agregarProducto(producto1))
console.log(pedido.agregarProducto(producto2))
console.log(pedido.agregarPago(tarjetaCredito))

const cliente = new Cliente("Pedro Gonzales", "Calle False 763", "555-1234");
console.log(cliente.realizarPedido(pedido))
