import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { BannerComponent } from "./components/banner/banner.component";
import { NumerosComponent } from "./components/numeros/numeros.component";
import { SobreHomeComponent } from "./components/sobre-home/sobre-home.component";
import { ServicosHomeComponent } from "./components/servicos-home/servicos-home.component";
import { PorqueNosComponent } from "./components/porque-nos/porque-nos.component";
import { ProjectosComponent } from "./components/projectos/projectos.component";


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    BannerComponent,
    NumerosComponent,
    SobreHomeComponent,
    ServicosHomeComponent,
    PorqueNosComponent,
    ProjectosComponent
]
})
export class HomeModule { }
