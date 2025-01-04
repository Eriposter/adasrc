import { Component } from '@angular/core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { SharedModule } from '../../../../../../shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { projectosModel } from '../../../../../../shared/models/projectos.model';
import { Content } from '../../../../../../shared/models/Content';
import { ProjectosService } from '../../../../../../shared/services/projectos.service';

@Component({
  selector: 'app-projectos',
  standalone: true,
  imports: [SharedModule,FontAwesomeModule],
  templateUrl: './projectos.component.html',
  styleUrl: './projectos.component.scss'
})
export class ProjectosComponent {
  faArrowRight = faArrowRight;

  projecto: Content<projectosModel>[]=[];


  constructor(
    private projectosService : ProjectosService
  ){}

  ngOnInit(): void {
    // Iniciar o autoplay quando o componente for inicializado
    this.getBanner();
  }


  getBanner() {
    this.projectosService.getProjecto().subscribe(response => {
      this.projecto = response.items.map(item => ({
        ...item,
        data: {
          ...item.data,
          ficheiros: item.data.ficheiros, // Já contém os URLs completos
          titulo: item.data.titulo,
          descricao: item.data.descricao,
          categoria: item.data.categoria
        }
      }));
      console.log('Processed Projecto:', this.projecto);
    });
  }

}
