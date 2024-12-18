import { Injectable } from "@angular/core";
import { Subject } from "rxjs"

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  isLoading = new Subject<boolean>();


  exibirLoading() {
    this.isLoading.next(true)
  }

  ocultarLoading() {
    this.isLoading.next(false)
  }
}
