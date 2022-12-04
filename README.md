# Lazy Loading modules to improve performance loading time

Angular Routing allows to create a single-page application with multiple views.
It allows navigation between views.
Users can switch between these views.

```
-----------------------
# app.component.html
----------------------
<a routerLink="/child" routerLinkActive="active">Child component lazy loaded</a>
<router-outlet></router-outlet>
```

```
---------------------------------------
# app.module.ts => AppRountingModule
---------------------------------------
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

```
--------------------------------------------
# app.routing.module.ts => child.module.ts
--------------------------------------------
const routes: Routes = [
  {
    path: 'child',
    loadChildren: () =>
      // lazy loaded module = childModule
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
```

```
-----------------------------------------------------------------
# child.module.ts => ChildRoutingComponent + ChildRoutingModule
-----------------------------------------------------------------
@NgModule({
  declarations: [ChildComponent],
  imports: [CommonModule, ChildRoutingModule],
})
export class ChildModule {}
```

```
----------------------------------------------------
# child-routing.module.ts => ChildRoutingComponent
----------------------------------------------------
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
```
