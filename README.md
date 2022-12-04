# Lazy Loading modules to improve performance loading time

Angular Routing allows to create a single-page application with multiple views.
It allows navigation between views.
Users can switch between these views.

```
----------------
# app.module.ts
----------------
// Load 2 components: ComponentOne & ComponentTwo
@NgModule({
  declarations: [
    AppComponent,
    OneComponent,
    TwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

```
-------------------------
# app.routing.module.ts
-------------------------
const routes: Routes = [
{ path: 'one', component: OneComponent },
{ path: 'two', component: TwoComponent },
];

@NgModule({
// Creates and configures a module with all the router providers and directives.
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule],
})
export class AppRoutingModule {}

```

```
--------------------
# app.component.ts
--------------------
<a routerLink="/one" routerLinkActive="active">Component One</a>
<a routerLink="/two" routerLinkActive="active">Component Two</a>

<!-- RENDER THE ROUTE (ROUTER OUTLET) -->
<router-outlet></router-outlet>
```
