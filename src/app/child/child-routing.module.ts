import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from './child.component';

// Lazy loaded ChildComponent route
const routeChild: Routes = [
  {
    path: 'child',
    component: ChildComponent,
  },
  {
    path: '**',
    redirectTo: 'child',
  },
];

@NgModule({
  // Child Module ===> ChildRoutingModule ===> ChildComponent route
  imports: [RouterModule.forChild(routeChild)],
  exports: [RouterModule],
})
export class ChildRoutingModule {}
