import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent } from './child.component';
import { ChildRoutingModule } from './child-routing.module';

@NgModule({
  declarations: [ChildComponent],
  imports: [CommonModule, ChildRoutingModule],
})
export class ChildModule {}
