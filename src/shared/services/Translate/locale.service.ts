import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocaleService {
  getLocale(): string {
    return localStorage.getItem('lang') || 'pt';
  }
}
