import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Students } from 'src/app/core/models/student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  student$ : Observable<Students[]> | undefined;
  private _StudentService: any;
 
  constructor(private _studentService) { }

  ngOnInit(): void {
    this.student$ = this._StudentService.get();
  }

}
