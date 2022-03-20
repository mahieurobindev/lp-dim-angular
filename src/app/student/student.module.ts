import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StudentRoutingModule } from './student-routing.module';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { StudentTableComponent } from './components/student-table/student-table.component';
import { StudentCreateComponent } from './components/student-create/student-create.component';


@NgModule({
  declarations: [
    NotfoundComponent,
    StudentTableComponent,
    StudentCreateComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    HttpClientModule
  ]
})
export class StudentModule { }
