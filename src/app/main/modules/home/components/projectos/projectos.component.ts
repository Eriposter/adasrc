import { Component } from '@angular/core';
import { SharedModule } from '../../../../../../shared/shared.module';
import { ProjectosService } from '../../../../../../shared/services/projectos.service';
import { projectosModel } from '../../../../../../shared/models/projectos.model';
import { Content } from '../../../../../../shared/models/Content';

@Component({
  selector: 'app-projectos',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './projectos.component.html',
  styleUrl: './projectos.component.scss'
})
export class ProjectosComponent {
  activeCategory: string = 'all';
    projecto: Content<projectosModel>[]=[];


    constructor(
      private projectosService : ProjectosService
    ){}

    ngOnInit(): void {
      // Iniciar o autoplay quando o componente for inicializado
      this.getBanner();
    }


  projects = [
    { image: 'assets/img/projectos-1.jpg', category: 'vertical', categoryLabel: 'Sinalização Vertical', title: 'We Are pioneers of solar & renewable energy industry' },
    { image: 'assets/img/projectos-6.jpg', category: 'portico', categoryLabel: 'Pórtico de Sinalização', title: 'We Are pioneers of solar & renewable energy industry' },
    { image: 'assets/img/projectos-3.jpg', category: 'horizontal', categoryLabel: 'Sinalização Horizontal', title: 'We Are pioneers of solar & renewable energy industry' },
    { image: 'assets/img/projectos-2.png', category: 'vertical', categoryLabel: 'Sinalização Vertical', title: 'We Are pioneers of solar & renewable energy industry' },
    { image: 'assets/img/projectos-5.jpg', category: 'portico', categoryLabel: 'Pórtico de Sinalização', title: 'We Are pioneers of solar & renewable energy industry' },
    { image: 'assets/img/projectos-4.jpg', category: 'horizontal', categoryLabel: 'Sinalização Horizontal', title: 'We Are pioneers of solar & renewable energy industry' }
  ];

  setCategory(category: string) {
    this.activeCategory = category;
  }

  getBanner() {
    this.projectosService.getProjecto().subscribe(response => {
      this.projecto = response.items.map(item => ({
        ...item,
        data: {
          ...item.data,
          ficheiros: item.data.ficheiros, // Já contém os URLs completos
          titulo: item.data.titulo,
          descricao: item.data.descricao,
          categoria: item.data.categoria
        }
      }));
      console.log('Processed Projecto:', this.projecto);
    });
  }

}
