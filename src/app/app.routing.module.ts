import { NgModule } from "@angular/core";
import {RouterModule, Routes} from '@angular/router';

import { PhotoComponent } from './photos/photo/photo.component';
import { PhotoListComponent } from "./photos/photo-list/photo-list.component";
import { PhotoFormComponent } from "./photos/photo-form/photo-form.component";

const routes: Routes = [
    // {path:'**', component: PhotoListComponent},
    {path:'list', component: PhotoListComponent},
    {path:'p/add', component: PhotoFormComponent}
]
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule{}
