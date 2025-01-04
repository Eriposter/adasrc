import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { Params } from '@angular/router';
import { Content } from '../models/Content';
import { ResponseContent } from '../models/ResponseContent';
import { environment } from '../../environments/environment';
import { projectosModel } from '../models/projectos.model';
import { servicosModel } from '../models/servicos.model';


@Injectable({
  providedIn: 'root'
})
export class ServicosService {
  lang = localStorage.getItem('lang') || 'pt'; // Obtém a linguagem do localStorage

  private baseUrl = environment.squidexBaseUrl;
  private apiUrl = `${this.baseUrl}/content/adasrc/servicos`;
  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'X-Flatten': 'true',
      'X-ResolveUrls': 'imagem',
      'X-Sort': '-ordem',
    });
  }

  constructor(private http: HttpClient) {}

  getProjecto(params?: Params): Observable<ResponseContent<Content<servicosModel>[]>>{
    return this.http.get<ResponseContent<Content<servicosModel>[]>>(this.apiUrl, {
      params,
      headers: this.getHeaders()
    });
  }

  getBySlugOrIdProjecto(reference : string): Observable<Content<servicosModel>> {
    return this.http.get<ResponseContent<Content<servicosModel>[]>>(`${this.apiUrl}?$filter=data/titulo/${this.lang} eq '${reference}'`, {
      headers: this.getHeaders()
    }).pipe(map((response) => response.items[0]));
  }

  getBySlug(reference : string): Observable<Content<servicosModel>> {
    let langs = ['pt', 'en'];
    let filterSlug = ""
    langs.forEach((lang, index) => {
      if (index != 0) {
        filterSlug+=" or "
      }
      filterSlug += `data/slug/${lang} eq '${reference}'`

    });
    return this.http.get<ResponseContent<Content<servicosModel>[]>>(`${this.apiUrl}?$filter=${filterSlug} or id eq '${reference}'`, {
      headers: this.getHeaders()
    }).pipe(map((response) => response.items[0]));
  }


}
