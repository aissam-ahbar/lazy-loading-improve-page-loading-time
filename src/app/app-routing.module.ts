import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'child',
    loadChildren: './child/child-routing.module#ChildComponent',
    //loadChildren: './views/book/book-routing.module#BookRoutingModule',
  },
  {
    path: '**',
    redirectTo: 'landing',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
