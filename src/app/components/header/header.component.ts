import { Component, HostListener, inject, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { SharedModule } from '../../../shared/shared.module';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ RouterModule, SharedModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  countries: any[] | undefined;
  selectedCountry: any;
  lang: string | undefined;
  activeMenuItem: number | null = null;
  screenWidth!: number;
  showSubmenu: boolean = false;
  isOpaque: boolean = false;

  private tranlsateService = inject(TranslateService)

  constructor(public router: Router) {}


  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const scrollThreshold = 50;
    this.isOpaque = window.scrollY > scrollThreshold;
  }

  menu = [
    {
      name: 'header.inicio',
      url: '/',
    },
    {
      name: 'header.sobre.titulo',
      url: 'sobre',
    },
    // {
    //   name: 'header.sobre.titulo',
    //   submenu: [
    //     {
    //       name: 'header.sobre.sobreNos',
    //       url: 'sobre',
    //       icon: 'assets/header/menu icon.png',
    //     },
    //     {

    //       name: 'header.sobre.orgaos',
    //       url: 'sobre/estrutura',
    //       icon: 'assets/header/orgao-icon.png',
    //     },
    //     {
    //       name: 'header.sobre.atribuicoes',
    //       url: 'sobre/atribuicoes',
    //       icon: 'assets/header/atribuicoes-icon.png',
    //     }
    //   ],
    // },
    {
      name: 'header.servicos.titulo',
      url: 'servicos',
      submenu: [
        {
          name: 'header.servicos.sr',
          url: 'legislacao/sector-empresarial',
          icon: 'assets/header/sec-empresarial-icon.png',
        },
        {
          name: 'header.servicos.gm',
          url: 'legislacao/sector-empresarial',
          icon: 'assets/header/sec-empresarial-icon.png',
        },
        {
          name: 'header.servicos.er',
          url: 'legislacao/sector-empresarial',
          icon: 'assets/header/sec-empresarial-icon.png',
        },
        {
          name: 'header.servicos.ps',
          url: 'legislacao/sector-empresarial',
          icon: 'assets/header/sec-empresarial-icon.png',
        },
        {
          name: 'header.servicos.sv',
          url: 'legislacao/sector-empresarial',
          icon: 'assets/header/sec-empresarial-icon.png',
        },
        {
          name: 'header.servicos.sh',
          url: 'legislacao/sector-empresarial',
          icon: 'assets/header/sec-empresarial-icon.png',
        }

      ],
    },
    // {
    //   name: 'header.imprensa.titulo',
    //   submenu: [
    //     {
    //       name: 'header.imprensa.noticias',
    //       url: 'sala-de-imprensa/noticias',
    //       icon: 'assets/header/news-icon.png',
    //     },
    //     {
    //       name: 'header.imprensa.galeria',
    //       url: 'sala-de-imprensa/galerias',
    //       icon: 'assets/header/galeria-icon.png',
    //     },
    //     {
    //       name: 'header.imprensa.publicacoes',
    //       url: 'sala-de-imprensa/publicacoes',
    //       icon: 'assets/header/pub-icon.png',
    //     },
    //     {
    //       name: 'header.imprensa.comunicados',
    //       url: 'sala-de-imprensa/comunicados',
    //       icon: 'assets/header/comunicados-icon.png',
    //     },
    //     {
    //       name: 'header.imprensa.faq',
    //       url: 'sala-de-imprensa/perguntas-frequentes',
    //       icon: 'assets/header/faq-icon.png',
    //     }
    //   ],
    // },
    {
      name: 'header.projectos',
      url: 'projectos',
    },
    {
      name: 'header.contacto',
      url: 'contacto',
    },
  ];

  ngOnInit() {
      this.screenWidth = window.innerWidth;
    this.countries = [
      { name: 'AO', code: 'pt' },
      { name: 'EN', code: 'en' },
    ];

    this.lang = localStorage.getItem('lang') || 'pt';
    const savedLang = localStorage.getItem('lang');
    if (savedLang) {
      this.selectedCountry = this.countries.find(country => country.code === savedLang);
      this.changeLanguage(savedLang, false)
    }
  }


  setActiveMenuItem(index: number): void {
    this.activeMenuItem = index;
  }
  changeLanguage(lang : string, reload: boolean = true){
    this.tranlsateService.use(lang);
    localStorage.setItem('lang', lang);
    if (reload) {
      window.location.reload();
    }

  }

  toggleSubmenu(): void {
    this.showSubmenu = !this.showSubmenu;
  }
}
