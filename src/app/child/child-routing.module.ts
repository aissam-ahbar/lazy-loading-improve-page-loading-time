import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
