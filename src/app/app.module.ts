import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';

// 
import { MatListModule, MatCardModule, MatSlideToggleModule, MatDialogModule, MatIconModule, 
  MatInputModule, MatSnackBarModule, MatTabsModule, MatButtonModule,MatLineModule, MatToolbarModule } 
  from '@angular/material'; 
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
