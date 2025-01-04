import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicosComponent } from './components/servicos/servicos.component';
import { ServicosDetalheComponent } from './components/servicos-detalhe/servicos-detalhe.component';

const routes: Routes = [
  {
    path:'',
    component: ServicosComponent
  },
  {
    path: ':id',
    component: ServicosDetalheComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicosRoutingModule { }
