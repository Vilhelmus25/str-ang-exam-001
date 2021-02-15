import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sorter'
})
export class SorterPipe implements PipeTransform {

  transform(value: any[], key: string): any[] {
    if (!Array.isArray(value) || !key) {
      return value;
    }

    let newValue = value.sort((a: any, b: any) => {
      if (typeof (a[key] && b[key]) == 'number') {
        return a[key] - b[key];
      }
      else {
        let newA = a[key].toString().toLowerCase();
        let newB = b[key].toString().toLowerCase();
        return newA.localeCompare(newB);
      }
    });

    return newValue;

  }

}
