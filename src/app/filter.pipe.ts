import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, inp: string): any {
    const resultArray=[];
    if(inp === ''){
      return value;
    } else {
      for (let item of value){
        if(item.name.toLowerCase() === inp.toLowerCase() || item.email.toLowerCase() === inp.toLowerCase() || item.company.name.toLowerCase() === inp.toLowerCase()){
          resultArray.push(item);
        }
      }
      return resultArray
    }
  }

}
