import { FindComponent } from './components/find/find.component';
import { AllComponent } from './components/all/all.component';
import { RegisterComponent } from './components/register/register.component';
import { MainComponent } from './components/main/main.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // The path specifies http:/localhost:4200/main
  {path: "", component: MainComponent},
  {path: "main", component: MainComponent},
  {path: "register", component: RegisterComponent},
  {path: 'all', component: AllComponent},
  {path: 'find', component: FindComponent},
  {path: '**', component: MainComponent}
  
];

// 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
