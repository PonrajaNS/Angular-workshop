import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from '../about/about.component';
import { CollectionComponent } from '../collection/collection.component';
import { Routes, RouterModule } from '@angular/router';
import { BookDetailComponent } from '../book-detail/book-detail.component';

const routes: Routes = [{ path: 'about', component: AboutComponent },
{ path: 'collection', component: CollectionComponent },
{ path: '', redirectTo: '/about', pathMatch: 'full' },
{ path: 'collection/:id', component: BookDetailComponent },];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
