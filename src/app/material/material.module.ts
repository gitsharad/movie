import { NgModule } from '@angular/core';
import { MatSlideToggleModule} from "@angular/material/slide-toggle"
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule} from '@angular/material/icon'
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatSnackBarModule} from '@angular/material/snack-bar';
@NgModule({
  declarations: [],
  
  exports:[MatSlideToggleModule, MatToolbarModule,MatSnackBarModule, 
    MatIconModule, MatButtonModule,MatInputModule,MatCardModule]
})
export class MaterialModule { }
