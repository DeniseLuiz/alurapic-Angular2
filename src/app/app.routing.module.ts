import { NotFoundComponent } from './errors/not-found/not-found.component';
import { NgModule } from "@angular/core";
import {RouterModule, Routes} from '@angular/router';

import { PhotoComponent } from './photos/photo/photo.component';
import { PhotoListComponent } from "./photos/photo-list/photo-list.component";
import { PhotoFormComponent } from "./photos/photo-form/photo-form.component";

const routes: Routes = [
    {path:'list', component: PhotoListComponent},
    {path:'form', component: PhotoFormComponent},
    {path: '**', component: NotFoundComponent}
]
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule{}
