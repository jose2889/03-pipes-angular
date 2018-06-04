import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, activar: boolean = true): any {
    if (activar){
      let resultado:string = '';
      for (let i = 0; i < value.length; i++){
        resultado +="*"; 
      }
      return resultado;
    }
    return value;
  }

}
