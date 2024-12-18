import {
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
  } from '@angular/common/http';
  import { Injectable } from '@angular/core';
  import { Observable, of } from 'rxjs';
  import { delay, finalize, switchMap } from 'rxjs/operators';
import { LoadingService } from '../../shared/services/loading.service';




  @Injectable()
  export class LoadingInterceptor implements HttpInterceptor {
    constructor(private loadingService : LoadingService){}

    intercept(
      request: HttpRequest<unknown>,
      next: HttpHandler
    ): Observable<HttpEvent<unknown>> {
      const showLoading = request.params.get('SHOW-LOADING');

      if (showLoading !== 'false') {
        this.loadingService.exibirLoading();


        return of(null).pipe(
          delay(500),
          switchMap(() => next.handle(request)),
          finalize(() => {
            of(null)
              .pipe(delay(2000))
              .subscribe(() => {
                this.loadingService.ocultarLoading();
              });
          })
        );
      } else {

        return next.handle(request);
      }
    }
  }
