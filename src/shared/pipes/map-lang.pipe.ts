import { inject, Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'mapLang',
})
export class MapLangPipe implements PipeTransform {

  transform(value: any): string {
    const lang = localStorage.getItem('lang') || 'pt'

    return value[lang];
  }

}
