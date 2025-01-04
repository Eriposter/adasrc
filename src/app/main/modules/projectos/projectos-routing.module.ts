import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectoComponent } from './components/projecto/projecto.component';
import { ProjectosDetalheComponent } from './components/projectos-detalhe/projectos-detalhe.component';

const routes: Routes = [
  {
    path:'',
    component: ProjectoComponent
  },
    {
      path: ':id',
      component: ProjectosDetalheComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectosRoutingModule { }
