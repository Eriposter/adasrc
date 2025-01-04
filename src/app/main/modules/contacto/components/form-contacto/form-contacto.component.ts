import { Component } from '@angular/core';
import Aos from 'aos';

@Component({
  selector: 'app-form-contacto',
  standalone: true,
  imports: [],
  templateUrl: './form-contacto.component.html',
  styleUrl: './form-contacto.component.scss'
})
export class FormContactoComponent {
  ngOnInit(): void {
    Aos.init(); // Inicializar AOS
  }
}
