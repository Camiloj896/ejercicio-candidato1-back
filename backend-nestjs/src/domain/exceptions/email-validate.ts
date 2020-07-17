
import { BusinessError } from './business-error';

export class EmailValidateError extends BusinessError {
  constructor(mensaje: string) {
    super(mensaje);
  }
}
