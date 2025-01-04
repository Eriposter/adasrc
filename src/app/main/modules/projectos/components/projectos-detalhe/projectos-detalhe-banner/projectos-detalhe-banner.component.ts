import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-projectos-detalhe-banner',
  standalone: true,
  imports: [],
  templateUrl: './projectos-detalhe-banner.component.html',
  styleUrl: './projectos-detalhe-banner.component.scss'
})
export class ProjectosDetalheBannerComponent {
  @Input() titulo!: string;
  @Input() imagem!: string | string[] | undefined;

  getBackgroundStyle(): string {
    return `url(${this.imagem || 'assets/img/default.jpg'}) center center no-repeat`;
  }

}
