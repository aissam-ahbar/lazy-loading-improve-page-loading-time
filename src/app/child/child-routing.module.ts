import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from './child.component';

// Create lazy loaded children component
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
  imports: [RouterModule.forChild(routeChild)],
  exports: [RouterModule],
})
export class ChildRoutingModule {}
