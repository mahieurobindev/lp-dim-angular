import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { StudentDetailsComponent } from './pages/student-details/student-details.component';
import { StudentListComponent } from './pages/student-list/student-list.component';
import { StudentComponent } from './student.component';

const routes: Routes = [
  {
  path:'',
  component: StudentComponent,
  children: [
    {
      path:'',
      component: StudentListComponent
    },
    {
      path: 'id',
      component: StudentDetailsComponent
    }
  ]
},
  {
    path:'',
    redirectTo: 'students',
    pathMatch: 'full'
  },
  {
    path: 'students',
    loadChildren: () => import ('./student.module')
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
