import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {
  resultado: any = null;

  transform(value: any, campo: any, criterio?: any): any {

    if(!criterio){
      this.resultado = value.filter(
        val =>{
          return val[campo] !== null;
        });
    }

    if(criterio){
      if(criterio === 'none'){

        this.resultado = value.filter(
          val => {
            return val[campo] == null
          });

      }else{

        this.resultado = value.filter(
          val => {
            return val[campo] === criterio
          });
          
      }

    }


    return this.resultado;                  

  }

}
