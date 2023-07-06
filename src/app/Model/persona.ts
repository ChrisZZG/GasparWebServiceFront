export class Persona {
    id?: number;
    nombre: string;
    email: string;
    telefono: string;
    descripcion: string;

    constructor(nombre: string, email: string, telefono: string, descripcion: string) {
        this.nombre = nombre;
        this.email = email;
        this.telefono =telefono;
        this.descripcion = descripcion;
    }
}
