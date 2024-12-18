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
          name: 'header.sobre.sobreNos',
          url: 'sobre',
          icon: 'assets/svg/ico-sobre.svg',
        },
        {
          name: 'header.sobre.orgaos',
          url: 'sobre/estrutura',
          icon: 'assets/svg/ico-quem-quem.svg',
        },
        {
          name: 'header.sobre.atribuicoes',
          url: 'sobre/atribuicoes',
          icon: 'assets/svg/ico-quem-quem.svg',
        }
      ]
    },
    {
      title: 'header.legislacao.titulo',
      items: [
        {
          name: 'header.legislacao.sp',
          url: 'legislacao/sector-publico',
          icon: 'assets/img/dev-icon.svg',
        },
        {
          name: 'header.legislacao.se',
          url: 'legislacao/sector-empresarial',
          icon: 'assets/img/infra-icon.svg',
        }
      ]
    },
    {
      title: 'header.imprensa.titulo',
      items: [
        {
          name: 'header.imprensa.noticias',
          url: 'sala-de-imprensa/noticias',
          icon: 'assets/svg/ico-noticias.svg',
        },
        {
          name: 'header.imprensa.galeria',
          url: 'sala-de-imprensa/galerias',
          icon: 'assets/svg/ico-fotos.svg',
        },
        {
          name: 'header.imprensa.publicacoes',
          url: 'sala-de-imprensa/publicacoes',
          icon: 'assets/img/book-closed.svg',
        },
        {
          name: 'header.imprensa.comunicados',
          url: 'sala-de-imprensa/comunicados',
          icon: 'assets/svg/ico-videos.svg',
        },
        {
          name: 'header.imprensa.faq',
          url: 'sala-de-imprensa/perguntas-frequentes',
          icon: 'assets/header/faq-icon.png',
        }

      ],
    },
    {
      title: 'footer.central',
      items: [
        { name: 'header.contacto', url: 'contacto' },
        // { name: 'Mapa do site', url: 'mapa' },
        // { name: 'Políticas de privacidade', url: 'politica' }
      ],
    },
  ];


  constructor(private router: Router) {}
  setActiveMenuItem(index: number): void {
    this.activeMenuItem = index;
  }
}
