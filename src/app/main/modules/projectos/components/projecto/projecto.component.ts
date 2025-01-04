import { Component } from '@angular/core';
import { BannerProjectosComponent } from "../banner-projectos/banner-projectos.component";
import { ProjectosComponent } from '../projectos/projectos.component';

@Component({
  selector: 'app-projecto',
  standalone: true,
  imports: [BannerProjectosComponent, ProjectosComponent],
  templateUrl: './projecto.component.html',
  styleUrl: './projecto.component.scss'
})
export class ProjectoComponent {

}
