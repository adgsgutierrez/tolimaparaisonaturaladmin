import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditPirncipalPageComponent } from '../pages/edit-pirncipal-page/edit-pirncipal-page.component';
import { LiteLoadDataComponent } from '../pages/lite-load-data/lite-load-data.component';

const routes: Routes = [
  {path: 'home', component: EditPirncipalPageComponent},
  {path: 'lite', component: LiteLoadDataComponent},
  {path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
