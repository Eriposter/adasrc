import { Component } from '@angular/core';
import { SharedModule } from '../../../../../../shared/shared.module';
import { projectosModel } from '../../../../../../shared/models/projectos.model';
import { Content } from '../../../../../../shared/models/Content';
import { ProjectosService } from '../../../../../../shared/services/projectos.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProjectosDetalheBannerComponent } from "./projectos-detalhe-banner/projectos-detalhe-banner.component";

@Component({
  selector: 'app-projectos-detalhe',
  standalone: true,
  imports: [ProjectosDetalheComponent, SharedModule, FontAwesomeModule, ProjectosDetalheBannerComponent],
  templateUrl: './projectos-detalhe.component.html',
  styleUrl: './projectos-detalhe.component.scss'
})
export class ProjectosDetalheComponent {

  servico: Content<projectosModel> | undefined;
  servicos: Content<projectosModel>[]=[];

  constructor(
    private servicosService: ProjectosService,
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
          ficheiros: item.data.ficheiros, // Já contém os URLs completos
          titulo: item.data.titulo,
          descricao: item.data.descricao,
          sumario: item.data.categoria
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
