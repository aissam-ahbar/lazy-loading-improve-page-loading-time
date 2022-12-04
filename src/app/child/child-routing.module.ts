import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from './child.component';
import { ChildModule } from './child.module';

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
  imports: [ChildModule, RouterModule.forChild(routeChild)],
  exports: [RouterModule],
})
export class ChildRoutingModule {}
