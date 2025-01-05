import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRight, faSolarPanel } from '@fortawesome/free-solid-svg-icons';
import { ServicosService } from '../../../../../../shared/services/servicos.service';
import { servicosModel } from '../../../../../../shared/models/servicos.model';
import { Content } from '../../../../../../shared/models/Content';
import { SharedModule } from '../../../../../../shared/shared.module';


@Component({
  selector: 'app-servicos-home',
  standalone: true,
  imports: [FontAwesomeModule, SharedModule],
  templateUrl: './servicos-home.component.html',
  styleUrl: './servicos-home.component.scss'
})
export class ServicosHomeComponent {
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
