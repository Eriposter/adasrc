import { Component, HostListener, inject, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { SharedModule } from '../../../shared/shared.module';
import { Router, RouterModule } from '@angular/router';
import { ServicosService } from '../../../shared/services/servicos.service';
import { MapLangPipe } from '../../../shared/pipes/map-lang.pipe';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, SharedModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  providers: [MapLangPipe]
})
export class HeaderComponent implements OnInit {
  countries: any[] | undefined;
  selectedCountry: any;
  lang: string = 'pt'; // Define um valor padrão inicial
  activeMenuItem: number | null = null;
  screenWidth!: number;
  showSubmenu: boolean = false;
  isOpaque: boolean = false;
  servicos: any[] = []; // Para armazenar os serviços dinâmicos


  private translateService = inject(TranslateService);
  private mapLangPipe = inject(MapLangPipe); // Injeta o MapLangPipe

  constructor(public router: Router, private servicosService: ServicosService) {}

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const scrollThreshold = 50;
    this.isOpaque = window.scrollY > scrollThreshold;
  }

  menu: {
    name: string;
    url: string;
    submenu?: { name: string; url: string; icon?: string }[];
  }[] = [
    {
      name: 'header.inicio',
      url: '/',
    },
    {
      name: 'header.sobre.titulo',
      url: 'sobre',
    },
    {
      name: 'header.servicos.titulo',
      url: 'servicos',
      submenu: [], // Inicialize como um array vazio, mas agora com o tipo definido
    },
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

    this.lang = localStorage.getItem('lang') || 'pt'; // Obtém o idioma salvo ou usa o padrão
    this.loadServicos(); // Chama o método para carregar os serviços
    const savedLang = localStorage.getItem('lang');
    if (savedLang) {
      this.selectedCountry = this.countries.find(
        (country) => country.code === savedLang
      );
      this.changeLanguage(savedLang, false);
    }
  }

  setActiveMenuItem(index: number): void {
    this.activeMenuItem = index;
  }

  changeLanguage(lang: string, reload: boolean = true) {
    this.translateService.use(lang);
    localStorage.setItem('lang', lang);
    if (reload) {
      window.location.reload();
    }
  }

  toggleSubmenu(): void {
    this.showSubmenu = !this.showSubmenu;
  }

  private loadServicos(): void {
    this.servicosService.getProjecto().subscribe((response) => {
      this.servicos = response.items.map((item) => ({
        name: this.mapLangPipe.transform(item.data.titulo), // Aplica o pipe para mapear o idioma
        url: `servicos/${this.mapLangPipe.transform(item.data.slug)}`, // Adapta ao formato do URL
        icon: item.data.imagem?.[0] || '', // Usa o ícone se disponível
      }));

      const servicosMenu = this.menu.find(
        (menuItem) => menuItem.name === 'header.servicos.titulo'
      );
      if (servicosMenu) {
        servicosMenu.submenu = this.servicos;
      }
    });
  }



}
