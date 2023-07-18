import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LiteraryPointDetailComponent } from './literary-point-detail/literary-point-detail.component';
import { LiteraryRouteDetailComponent } from './literary-route-detail/literary-route-detail.component';
import { LiteraryRouteComponent } from './literary-route/literary-route.component';

const routes: Routes = [
  { path: '', component: LiteraryRouteComponent},
  { path: 'route/:id', component: LiteraryRouteDetailComponent},
  { path: 'point/:id', component: LiteraryPointDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
