import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private http: HttpClient) { }

  getCustomers(params?: any) {
    return this.http.get<any>('https://dummyjson.com/users', { params: params });
}
};
