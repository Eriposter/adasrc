import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router'; // Import necessário para acessar parâmetros de rota
import { ServicoDetalheBannerComponent } from './servico-detalhe-banner/servico-detalhe-banner.component';
import { SharedModule } from '../../../../../../shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { ServicosService } from '../../../../../../shared/services/servicos.service';
import { servicosModel } from '../../../../../../shared/models/servicos.model';
import { Content } from '../../../../../../shared/models/Content';

@Component({
  selector: 'app-servicos-detalhe',
  standalone: true,
  imports: [ServicoDetalheBannerComponent, SharedModule, FontAwesomeModule],
  templateUrl: './servicos-detalhe.component.html',
  styleUrls: ['./servicos-detalhe.component.scss'], // Correção de 'styleUrl' para 'styleUrls'
})
export class ServicosDetalheComponent implements OnInit {
  faArrowRight = faArrowRight;

  servico: Content<servicosModel> | undefined;
  servicos: Content<servicosModel>[]=[];

  constructor(
    private servicosService: ServicosService,
    private route: ActivatedRoute // Injete ActivatedRoute para acessar parâmetros de rota
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id');
      if (id) {
        this.getServico(id);
      }
    });
    this.getServicos();
  }

  getServicos() {
    this.servicosService.getProjecto().subscribe(response => {
      this.servicos = response.items.map(item => ({
        ...item,
        data: {
          ...item.data,
          ficheiros: item.data.imagem, // Já contém os URLs completos
          titulo: item.data.titulo,
          descricao: item.data.descricao,
          sumario: item.data.sumario
        }
      }));
    });
  }

  getServico(id: string) {
    this.servicosService.getBySlug(id).subscribe((result) => {
      if (result.data) {
        this.servico = result;
      }
    });
  }
}
