import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { Params } from '@angular/router';
import { bannerModel } from '../models/banner.model';
import { Content } from '../models/Content';
import { ResponseContent } from '../models/ResponseContent';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class BannerService {
  private baseUrl = environment.squidexBaseUrl;
  private apiUrl = `${this.baseUrl}/content/adasrc/banner`;
  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'X-Flatten': 'true',
      'X-ResolveUrls': 'url',
      'X-Sort': '-ordem',
    });
  }

  constructor(private http: HttpClient) {}

  getBanner(params?: Params): Observable<ResponseContent<Content<bannerModel>[]>>{
    return this.http.get<ResponseContent<Content<bannerModel>[]>>(this.apiUrl, {
      params,
      headers: this.getHeaders()
    });
  }
}
