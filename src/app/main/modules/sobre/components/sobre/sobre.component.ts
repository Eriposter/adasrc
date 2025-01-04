import { Component } from '@angular/core';
import { BannerSobreComponent } from "../banner-sobre/banner-sobre.component";
import { SobreNosComponent } from "../sobre-nos/sobre-nos.component";
import { NumerosComponent } from "../../../home/components/numeros/numeros.component";

@Component({
  selector: 'app-sobre',
  standalone: true,
  imports: [BannerSobreComponent, SobreNosComponent, NumerosComponent],
  templateUrl: './sobre.component.html',
  styleUrl: './sobre.component.scss'
})
export class SobreComponent {

}
