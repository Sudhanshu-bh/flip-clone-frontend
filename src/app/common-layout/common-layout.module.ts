import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './footer/footer.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from "@angular/material/button";



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,

    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class CommonLayoutModule { }
