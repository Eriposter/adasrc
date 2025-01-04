import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { Router, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports:[RouterModule, SharedModule, FontAwesomeModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent  {
  activeMenuItem: number | null = null;
  anoCorrente: number = new Date().getFullYear();


  addresses = [
    {
      description:
        'footer.localizacao',
      action: null,
      icon: 'assets/footer/icon-location.svg',
    },
    {
      description: ' +244 222 700 000',
      action: 'tel: +244 222 700 000',
      icon: 'assets/footer/icon-phone.svg',
    },
    {
      description: 'correspondencia.cnnca@minfin.gov.ao',
      action: 'mailto:correspondencia.cnnca@minfin.gov.ao',
      icon: 'assets/footer/icon-mail.svg',
    },
  ];
  links = [
    {
      title: 'footer.sobre-o-cnnca',
      items: [
        {
          name: 'Inicio',
          url: '/',
          icon: 'assets/svg/ico-quem-quem.svg',
        },
        {
          name: 'header.sobre.sobreNos',
          url: 'sobre',
          icon: 'assets/svg/ico-sobre.svg',
        },
      ]
    },
    {
      title: 'header.servicos.titulo',
      items: [
        {
          name: 'header.servicos.sr',
          url: 'legislacao/sector-publico',
          icon: 'assets/img/dev-icon.svg',
        },
        {
          name: 'header.servicos.gm',
          url: 'legislacao/sector-empresarial',
          icon: 'assets/img/infra-icon.svg',
        },
        {
          name: 'header.servicos.er',
          url: 'legislacao/sector-publico',
          icon: 'assets/img/dev-icon.svg',
        },
        {
          name: 'header.servicos.ps',
          url: 'legislacao/sector-empresarial',
          icon: 'assets/img/infra-icon.svg',
        },
        {
          name: 'header.servicos.sv',
          url: 'legislacao/sector-publico',
          icon: 'assets/img/dev-icon.svg',
        },
        {
          name: 'header.servicos.sh',
          url: 'legislacao/sector-empresarial',
          icon: 'assets/img/infra-icon.svg',
        }
      ]
    },
    {
      title: 'footer.central',
      items: [
        { name: 'header.contacto', url: 'contacto' },
        { name: 'Projectos', url: 'projectos' },
        // { name: 'Políticas de privacidade', url: 'politica' }
      ],
    },
  ];


  constructor(private router: Router) {}
  setActiveMenuItem(index: number): void {
    this.activeMenuItem = index;
  }
}
