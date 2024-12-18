import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";


@Injectable()
export class languageInterceptor implements HttpInterceptor{

intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  const lang = localStorage.getItem('lang') || 'pt';

  if (req.url.match(environment.apisDmsUrl)) {
    return next.handle(req);
  } else {
    const request = req.clone({
      setHeaders: {
        'X-Languages': lang,
      },
    });
    return next.handle(request);
  }

}

}
