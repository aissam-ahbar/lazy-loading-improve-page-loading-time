import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from './child.component';

const routeChild: Routes = [
  {
    path: 'child',
    component: ChildComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routeChild)],
  exports: [RouterModule],
})
export class ChildRoutingModule {}
