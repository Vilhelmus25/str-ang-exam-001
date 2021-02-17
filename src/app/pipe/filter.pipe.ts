import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../common/hero/hero';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], phrase: string, key: string = ''): any[] {

    if (!Array.isArray(value) || !phrase || !key) {
      return value;
    }

    return value.filter((hero => hero[key].toLowerCase().includes(phrase.toLowerCase()) ? true : false));
  }

}
