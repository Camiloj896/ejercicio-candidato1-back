import { BusinessError } from './business-error';

export class DataMissing extends BusinessError {
  constructor(mensaje: string) {
    super(mensaje);
  }
}
