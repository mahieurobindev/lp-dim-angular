import { Component } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable, ReplaySubject } from 'rxjs';

export interface StudentTable {
  name: string;
  position: number;
  class: string;
}

const ELEMENT_DATA: StudentTable[] = [
  { position: 1, name: 'Student1', class: 'LP-DIM' },
  { position: 2, name: 'Student2', class: 'LP-DIM' },
  { position: 3, name: 'Student3', class: 'LP-DIM' },
  { position: 4, name: 'Student4', class: 'LP-DIM' },
];

/**
 * @title Adding and removing data when using an observable-based datasource.
 */
@Component({
  selector: 'table-dynamic-observable-data-example',
  styleUrls: ['table-dynamic-observable-data-example.css'],
  templateUrl: 'table-dynamic-observable-data-example.html',
})
export class TableDynamicObservableDataExample {
  displayedColumns: string[] = ['position', 'name', 'class'];
  dataToDisplay = [...ELEMENT_DATA];

  dataSource = new ExampleDataSource(this.dataToDisplay);

  addData() {
    const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
    this.dataToDisplay = [
      ...this.dataToDisplay,
      ELEMENT_DATA[randomElementIndex],
    ];
    this.dataSource.setData(this.dataToDisplay);
  }

  removeData() {
    this.dataToDisplay = this.dataToDisplay.slice(0, -1);
    this.dataSource.setData(this.dataToDisplay);
  }
}

class ExampleDataSource extends DataSource<StudentTable> {
  private _dataStream = new ReplaySubject<StudentTable[]>();

  constructor(initialData: StudentTable[]) {
    super();
    this.setData(initialData);
  }

  connect(): Observable<StudentTable[]> {
    return this._dataStream;
  }

  disconnect() {}

  setData(data: StudentTable[]) {
    this._dataStream.next(data);
  }
}
