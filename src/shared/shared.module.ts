import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarouselModule } from 'primeng/carousel';
import { PaginatorModule } from 'primeng/paginator';
import { TranslateModule } from '@ngx-translate/core';
import { AccordionModule } from 'primeng/accordion';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { MapLangPipe } from './pipes/map-lang.pipe';
import { DebounceDirective } from './directives/debounce.directive';

@NgModule({
  imports: [
    DialogModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    PaginatorModule,
    CarouselModule,
    AccordionModule,
    AvatarModule,
    BadgeModule,
    CommonModule,
    DropdownModule
  ],
  declarations: [MapLangPipe, DebounceDirective],
  providers:[
    DebounceDirective
  ],

  exports: [ReactiveFormsModule, MapLangPipe, DebounceDirective, FormsModule, PaginatorModule, CarouselModule, TranslateModule, DialogModule, ButtonModule, CheckboxModule, AccordionModule, CommonModule, DropdownModule  ]
})
export class SharedModule {}
