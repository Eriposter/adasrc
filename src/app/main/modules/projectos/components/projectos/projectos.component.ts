import { Component } from '@angular/core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { SharedModule } from '../../../../../../shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-projectos',
  standalone: true,
  imports: [SharedModule,FontAwesomeModule],
  templateUrl: './projectos.component.html',
  styleUrl: './projectos.component.scss'
})
export class ProjectosComponent {
  faArrowRight = faArrowRight;
}
