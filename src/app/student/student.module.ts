import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StudentRoutingModule } from './student-routing.module';
import { NotfoundComponent } from './pages/notfound/notfound.component';


@NgModule({
  declarations: [
    NotfoundComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    HttpClientModule
  ]
})
export class StudentModule { }
