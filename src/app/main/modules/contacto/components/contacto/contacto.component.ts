import { Component } from '@angular/core';
import { BannerContactoComponent } from "../banner-contacto/banner-contacto.component";
import { FormContactoComponent } from '../form-contacto/form-contacto.component';
import { LocalizacaoContactoComponent } from '../localizacao-contacto/localizacao-contacto.component';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [BannerContactoComponent, FormContactoComponent,LocalizacaoContactoComponent],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.scss'
})
export class ContactoComponent {

}
