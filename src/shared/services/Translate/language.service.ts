import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private currentLanguageSubject: BehaviorSubject<string>;
  
  public currentLanguage: Observable<string>;

  constructor() {
    this.currentLanguageSubject = new BehaviorSubject<string>('pt'); // Define o idioma padrão como 'pt'
    this.currentLanguage = this.currentLanguageSubject.asObservable();
  }

  public setLanguage(lang: string): void {
    this.currentLanguageSubject.next(lang);
    localStorage.setItem('lang', lang);

  }

  public getLanguage(): Observable<string> {
    return this.currentLanguage;
  }
}
