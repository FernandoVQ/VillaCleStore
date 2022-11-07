import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    HeaderComponent,
  ],
  exports:[
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    MatCardModule,
    MatRadioModule,
    FormsModule,
    MatInputModule
  ]
})
export class SharedModule { }
