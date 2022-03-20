import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentDetailsComponent } from 'src/app/student/pages/student-details/student-details.component';
import { StudentListComponent } from 'src/app/student/pages/student-list/student-list.component';
import { StudentComponent } from 'src/app/student/student.component';

const routes: Routes = [
  {
    path: '',
    component: StudentComponent,
    children: [
      {
        path: '',
        component: StudentListComponent,
      },
      {
        path: ':id',
        component: StudentDetailsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentRoutingModule {}