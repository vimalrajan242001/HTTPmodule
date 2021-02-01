import { UserdetailComponent } from './userdetail/userdetail.component';
import { GetempComponent } from './getemp/getemp.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"",component:GetempComponent},
  {path:'userdetail/:id',component:UserdetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
