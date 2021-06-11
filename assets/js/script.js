class Propietario {
    constructor(nombre, direccion, telefono) {
        this._nombre = nombre;
        this._direccion = direccion;
        this._telefono = telefono;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(nombre_nuevo) {
        this._nombre = nombre_nuevo;
    }

    get direccion() {
        return this._direccion;
    }
    set direccion(direccion_nuevo) {
        this._direccion = direccion_nuevo;
    }

    get telefono() {
        return this._telefono;
    }
    set telefono(telefono_nuevo) {
        this._telefono = telefono_nuevo;
    }
    datosPropietario() {
        return `El dueño es ${this.nombre} el domicilio es ${this.direccion} y el teléfono de contacto es ${this.telefono} `
    }
}

class Animal extends Propietario {
    constructor(nombre, direccion, telefono, tipo) {
        super(nombre, direccion, telefono);
        this._tipo = tipo;
    }
    get tipo() {
            return this._tipo;
        }
        /*     set tipo(tipo_nuevo) {
                this._tipo = tipo_nuevo;
            } */
}

class Mascota extends Animal {
    constructor(nombre, direccion, telefono, tipo, nombreMascota, enfermedad) {
        super(nombre, direccion, telefono, tipo, nombreMascota)
        this._nombreMascota = nombreMascota;
        this._enfermedad = enfermedad;
    }

    get nombreMascota() {
        return this._nombreMascota;
    }
    set nombreMascota(nombreMascota_nuevo) {
        this._nombreMascota = nombreMascota_nuevo;
    }

    get enfermedad() {
        return this._enfermedad;
    }
    set enfermedad(enfermedad_nuevo) {
        this._enfermedad = enfermedad_nuevo;
    }

}


document.getElementById('boton').addEventListener('click', agregar)

function registrar() {
    let nombre = document.getElementById('propietario').value;
    let direccion = document.getElementById('direccion').value;
    let telefono = document.getElementById('telefono').value;
    let nombreMascota = document.getElementById('nombreMascota').value;
    let tipo = document.getElementById('tipo').value;
    let enfermedad = document.getElementById('enfermedad').value;

    let mascota = new Mascota(nombre, direccion, telefono, tipo, nombreMascota, enfermedad);
    return mascota;

}

function agregar() {
    const laMascota = registrar();
    let nombreMascota = laMascota.nombreMascota
    let tipo = laMascota.tipo;
    let enfermedad = laMascota.enfermedad;

    const resultado = document.getElementById('resultado');
    const datosDueno = document.createElement('li');
    const datosMascota = document.createElement('li');


    datosDueno.innerHTML = `${laMascota.datosPropietario()}`;
    datosMascota.innerHTML = `El tipo de animal es un: ${tipo}, mientras que el nombre de la masctoa es ${nombreMascota} y la enfermedad es: ${enfermedad}`;

    resultado.appendChild(datosDueno);
    resultado.appendChild(datosMascota);

    document.getElementById('propietario').value = '';
    document.getElementById('direccion').value = '';
    document.getElementById('telefono').value = '';
    document.getElementById('nombreMascota').value = '';
    document.getElementById('tipo').value = 'perro';
    document.getElementById('enfermedad').value = '';


}