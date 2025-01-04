import { Component } from '@angular/core';
import { SharedModule } from '../../../../../../shared/shared.module';
import { BannerService } from '../../../../../../shared/services/banner.service';
import { bannerModel } from '../../../../../../shared/models/banner.model';
import { Content } from '../../../../../../shared/models/Content';


interface CarouselItem {
  subtitle: string;
  url: string;
  title: string;
  title2: string;
  description: string;
  buttonText: string;
}
@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {
  banner: Content<bannerModel>[]=[];

  constructor(
    private bannerService : BannerService
  ){}

  ngOnInit(): void {
    // Iniciar o autoplay quando o componente for inicializado
    this.startAutoplay();
    this.getBanner();
  }

  getBanner(){
    this.bannerService.getBanner().subscribe(response =>{
      this.banner = response.items;
    })
  }

  currentIndex: number = 0;
  autoplayInterval: any;

  moveLeft(): void {
    this.currentIndex = (this.currentIndex - 1 + this.banner.length) % this.banner.length;
  }

  moveRight(): void {
    this.currentIndex = (this.currentIndex + 1) % this.banner.length;
  }

  startAutoplay(): void {
    // Definir o intervalo de autoplay para mudar para o próximo slide a cada 3 segundos
    this.autoplayInterval = setInterval(() => {
      this.moveRight();
    }, 6000); // Intervalo em milissegundos (3 segundos neste caso)
  }

  stopAutoplay(): void {
    // Parar o autoplay ao sair do componente ou quando o usuário interagir com os controles do carrossel
    clearInterval(this.autoplayInterval);
  }
}
