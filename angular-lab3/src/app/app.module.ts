import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';

import { MatListModule, MatCardModule, MatSlideToggleModule, MatDialogModule, MatIconModule, MatInputModule, MatSnackBarModule, MatTabsModule, MatButtonModule, MatLineModule, MatToolbarModule }
  from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CollectionComponent } from './collection/collection.component';
import { FormsModule } from '@angular/forms';
import { RatingCategoryPipe } from './pipes/rating-category.pipe';
import { RatingComponent } from './rating/rating.component';
import { DataService } from './services/data.service';
import { HttpModule } from '@angular/http';
import { TabsComponent } from './tabs/tabs.component';
// import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { BookDetailComponent } from './book-detail/book-detail.component'
// const routes: Routes = [{ path: 'about', component: AboutComponent },
// { path: 'collection', component: CollectionComponent },
// { path: '', redirectTo: '/about', pathMatch: 'full' }];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    CollectionComponent,
    RatingCategoryPipe,
    RatingComponent,
    TabsComponent,
    BookDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatListModule, MatTabsModule, MatSnackBarModule, MatDialogModule, MatCardModule,
    MatIconModule, MatSlideToggleModule, MatButtonModule, MatLineModule, MatInputModule,
    MatToolbarModule, BrowserAnimationsModule,
    HttpModule,
    AppRoutingModule
    // RouterModule.forRoot(
    //   routes,
    //   { enableTracing: true } // <-- debugging purposes only
    // )
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
