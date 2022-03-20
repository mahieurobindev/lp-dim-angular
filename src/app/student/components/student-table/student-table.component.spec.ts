import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentTable } from './student-table.component';

describe('StudentTableComponent', () => {
  let component: StudentTable;
  let fixture: ComponentFixture<StudentTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentTable],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
