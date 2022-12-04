import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// ChildModule generated with :
// $ ng generate module child --route child --module app.module
const routes: Routes = [
  {
    path: 'child',
    loadChildren: () =>
      import('./child/child.module').then((m) => m.ChildModule),
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
