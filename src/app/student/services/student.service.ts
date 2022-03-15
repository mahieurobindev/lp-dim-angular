import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Students } from 'src/app/core/models/student';
import { environment } from 'src/environments/environment';

@Injectable()
export class StudentService {
    private readonly studentPath: string = "/students";

    constructor(private _http: HttpClient) { }

    get(): Observable<Students[]> {
        return this._http.get<Students[]>(`${environment.apiBaseUrl}${this.studentPath}`);
    }
}