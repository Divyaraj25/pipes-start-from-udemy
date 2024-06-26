import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure:false // this lead to low performance as it is not pure, and it checks each time the list changes
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, propertyName: string): any {
    if(value.length===0 || filterString ===''){
      return value;
    }
    const resultArray = [];
    for(const item of value){
      if(item[propertyName] === filterString){
        resultArray.push(item);
      }
    }
    return resultArray
  }

}
