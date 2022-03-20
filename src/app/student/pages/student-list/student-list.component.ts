import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Students } from 'src/app/core/models/student';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss'],
  providers: [StudentService],
})
export class StudentListComponent implements OnInit {
  constructor(private _studentService: StudentService) {}
  students$: Observable<Students[]>;
  ngOnInit(): void {
    this.students$ = this._studentService.getAllStudent();
  }
}
