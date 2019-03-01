import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'rxjs/operators';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterYear: Number, propName: string): any {
   console.log(value)
    if(value.length === 0){
      return value;
    }
   const resultArray= [];

    for (const item of value) {
        if (filterYear == 1990) {
          if ( Number(item[propName]) >=  1990 && Number(item[propName]) < 2000 ) {
            resultArray.push(item);
          }
        }
        else if (filterYear == 2000) {
          if ( Number(item[propName]) >= 2000) {
            resultArray.push(item);
          }
        }
       
    }
    return resultArray;


  }

}
