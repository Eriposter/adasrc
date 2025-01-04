import { Component } from '@angular/core';
import { SharedModule } from '../../../../../../shared/shared.module';
import { faArrowRight, faSolarPanel } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Content } from '../../../../../../shared/models/Content';
import { ServicosService } from '../../../../../../shared/services/servicos.service';
import { servicosModel } from '../../../../../../shared/models/servicos.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-servicos-card',
  standalone: true,
  imports: [SharedModule,FontAwesomeModule, RouterModule],
  templateUrl: './servicos-card.component.html',
  styleUrl: './servicos-card.component.scss'
})
export class ServicosCardComponent {
  faSolarPanel = faSolarPanel;
  faArrowRight = faArrowRight;

  projecto: Content<servicosModel>[]=[];


      constructor(
        private servicosService : ServicosService
      ){}

      ngOnInit(): void {
        // Iniciar o autoplay quando o componente for inicializado
        this.getServicos();
      }

      getServicos() {
        this.servicosService.getProjecto().subscribe(response => {
          this.projecto = response.items.map(item => ({
            ...item,
            data: {
              ...item.data,
              ficheiros: item.data.imagem, // Já contém os URLs completos
              titulo: item.data.titulo,
              descricao: item.data.descricao,
              sumario: item.data.sumario
            }
          }));
          console.log('Processed Projecto:', this.projecto);
        });
      }
}
