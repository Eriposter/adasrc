import { Component } from '@angular/core';
import Aos from 'aos';

@Component({
  selector: 'app-banner-contacto',
  standalone: true,
  imports: [],
  templateUrl: './banner-contacto.component.html',
  styleUrl: './banner-contacto.component.scss'
})
export class BannerContactoComponent {
  ngOnInit(): void {
    Aos.init(); // Inicializar AOS
  }
}
