import { Component } from '@angular/core';
import { BannerservicosComponent } from "../bannerservicos/bannerservicos.component";
import { ServicosCardComponent } from "../servicos-card/servicos-card.component";

@Component({
  selector: 'app-servicos',
  standalone: true,
  imports: [BannerservicosComponent, ServicosCardComponent],
  templateUrl: './servicos.component.html',
  styleUrl: './servicos.component.scss'
})
export class ServicosComponent {

}
