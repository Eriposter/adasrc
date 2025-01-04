import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-servico-detalhe-banner',
  standalone: true,
  imports: [],
  templateUrl: './servico-detalhe-banner.component.html',
  styleUrl: './servico-detalhe-banner.component.scss'
})
export class ServicoDetalheBannerComponent {
  @Input() titulo!: string;
  @Input() imagem!: string | string[] | undefined;



  getBackgroundStyle(): string {
    return `url(${this.imagem || 'assets/img/default.jpg'}) center center no-repeat`;
  }

}
