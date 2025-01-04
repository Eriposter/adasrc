import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { Params } from '@angular/router';
import { Content } from '../models/Content';
import { ResponseContent } from '../models/ResponseContent';
import { environment } from '../../environments/environment';
import { projectosModel } from '../models/projectos.model';


@Injectable({
  providedIn: 'root'
})
export class ProjectosService {
  lang = localStorage.getItem('lang') || 'pt'; // Obtém a linguagem do localStorage

  private baseUrl = environment.squidexBaseUrl;
  private apiUrl = `${this.baseUrl}/content/adasrc/projectos`;
  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'X-Flatten': 'true',
      'X-ResolveUrls': 'ficheiros',
      'X-Sort': '-ordem',
    });
  }

  constructor(private http: HttpClient) {}

  getProjecto(params?: Params): Observable<ResponseContent<Content<projectosModel>[]>>{
    return this.http.get<ResponseContent<Content<projectosModel>[]>>(this.apiUrl, {
      params,
      headers: this.getHeaders()
    });
  }

  getBySlugOrIdProjecto(reference : string): Observable<Content<projectosModel>> {
    return this.http.get<ResponseContent<Content<projectosModel>[]>>(`${this.apiUrl}?$filter=data/titulo/${this.lang} eq '${reference}'`, {
      headers: this.getHeaders()
    }).pipe(map((response) => response.items[0]));
  }

  getBySlug(reference : string): Observable<Content<projectosModel>> {
    let langs = ['pt', 'en'];
    let filterSlug = ""
    langs.forEach((lang, index) => {
      if (index != 0) {
        filterSlug+=" or "
      }
      filterSlug += `data/slug/${lang} eq '${reference}'`

    });
    return this.http.get<ResponseContent<Content<projectosModel>[]>>(`${this.apiUrl}?$filter=${filterSlug} or id eq '${reference}'`, {
      headers: this.getHeaders()
    }).pipe(map((response) => response.items[0]));
  }


}
