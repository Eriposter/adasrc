import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRight, faSolarPanel } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-servicos-home',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './servicos-home.component.html',
  styleUrl: './servicos-home.component.scss'
})
export class ServicosHomeComponent {
  faSolarPanel = faSolarPanel;
  faArrowRight = faArrowRight;
}
