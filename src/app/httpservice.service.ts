import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
interface users {
 data : [
   {
    first_name : string,
    id: number,
    last_name:string,
    email:string,
    avatar:string
   }
 ]
}
interface userdetail {
 data : 
   {
    first_name : string,
    id: number,
    last_name:string,
    email:string,
    avatar:string
   }
}
@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {
  readonly url = "https://reqres.in/api/users"
  constructor(private http: HttpClient) { }

  getuserdata():Observable<users>{
    return this.http.get<users>(`${this.url}`)
  }
  getuserdetail(id):Observable<userdetail>{
    return this.http.get<userdetail>(`${this.url}/${id}`)
  }
  deletetheuser(id){
    return this.http.delete(`${this.url}/${id}`)
  }
}
