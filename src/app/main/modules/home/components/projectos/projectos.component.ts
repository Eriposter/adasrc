import { Component } from '@angular/core';
import { SharedModule } from '../../../../../../shared/shared.module';

@Component({
  selector: 'app-projectos',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './projectos.component.html',
  styleUrl: './projectos.component.scss'
})
export class ProjectosComponent {
  activeCategory: string = 'all';

  projects = [
    { image: 'assets/img/img-600x400-6.jpg', category: 'solar', categoryLabel: 'Solar Panels', title: 'We Are pioneers of solar & renewable energy industry' },
    { image: 'assets/img/img-600x400-5.jpg', category: 'wind', categoryLabel: 'Wind Turbines', title: 'We Are pioneers of solar & renewable energy industry' },
    { image: 'assets/img/img-600x400-4.jpg', category: 'hydro', categoryLabel: 'Hydropower Plants', title: 'We Are pioneers of solar & renewable energy industry' },
    { image: 'assets/img/img-600x400-3.jpg', category: 'solar', categoryLabel: 'Solar Panels', title: 'We Are pioneers of solar & renewable energy industry' },
    { image: 'assets/img/img-600x400-2.jpg', category: 'wind', categoryLabel: 'Wind Turbines', title: 'We Are pioneers of solar & renewable energy industry' },
    { image: 'assets/img/img-600x400-1.jpg', category: 'hydro', categoryLabel: 'Hydropower Plants', title: 'We Are pioneers of solar & renewable energy industry' }
  ];

  setCategory(category: string) {
    this.activeCategory = category;
  }
}
