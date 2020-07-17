import { BusinessError } from './business-error';

export class FieldRequire extends BusinessError {
  constructor(mensaje: string) {
    super(mensaje);
  }
}
