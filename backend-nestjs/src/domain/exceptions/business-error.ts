export class BusinessError extends Error {
    constructor(mensaje: string) {
      super(mensaje);
    }
}