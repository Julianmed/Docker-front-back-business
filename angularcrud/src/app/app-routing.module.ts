import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrudAddComponent } from './crud-add/crud-add.component';
import { CrudGetComponent } from './crud-get/crud-get.component';
import { CrudEditComponent } from './crud-edit/crud-edit.component';

const routes: Routes = [
  {
    path: 'business/create',
    component: CrudAddComponent
  },
  {
    path: 'business/edit/:id',
    component: CrudEditComponent
  },
  {
    path: 'business',
    component: CrudGetComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
