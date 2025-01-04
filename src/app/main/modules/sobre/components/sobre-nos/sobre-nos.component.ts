import { Component } from '@angular/core';
import { SharedModule } from '../../../../../../shared/shared.module';
import Aos from 'aos';

@Component({
  selector: 'app-sobre-nos',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './sobre-nos.component.html',
  styleUrl: './sobre-nos.component.scss'
})
export class SobreNosComponent {
  ngOnInit(): void {
    Aos.init(); // Inicializar AOS
  }
}
