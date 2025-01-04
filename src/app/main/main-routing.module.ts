import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';


const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./modules/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'sobre',
        loadChildren: () =>
          import('./modules/sobre/sobre.module').then((m) => m.SobreModule),
      },
      {
        path: 'projectos',
        loadChildren: () =>
          import('./modules/projectos/projectos.module').then((m) => m.ProjectosModule),
      },
      {
        path: 'servicos',
        loadChildren: () =>
          import('./modules/servicos/servicos.module').then((m) => m.ServicosModule),
      },
      {
        path: 'contacto',
        loadChildren: () =>
        import('./modules/contacto/contacto.module').then((m) => m.ContactoModule),

    },

    ],
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
