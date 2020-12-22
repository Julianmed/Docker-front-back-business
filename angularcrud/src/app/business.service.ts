import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {
  uri = 'http://localhost:4000/business';
  constructor(private http: HttpClient) { }

  addBusiness(person_name, business_name, business_gst_number) {
    const obj = {
      person_name,
      business_name,
      business_gst_number
    };
    console.log(obj);
    this.http.post(`${this.uri}/add`, obj)
    .subscribe(res => console.log(res));
  }

  getAllBusinesses(): Observable<any>{
    return this.http.get(this.uri);
  }

  getOneBusiness(id: string): Observable<any>{
    console.log("id: ",id);
    return this.http.get(this.uri+'/edit/'+id);
  }

  update(form: any, id: string){
    return this.http.post(this.uri+'/update/'+id, form);
  }

  delete(id: string){
    return this.http.delete(this.uri+'/delete/'+id);
  }
}