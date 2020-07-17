import { BusinessError } from './business-error';

export class CatchError extends BusinessError {
  constructor(mensaje: string) {
    super(mensaje);
  }
}
  