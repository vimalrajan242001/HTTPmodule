import { Component, OnInit } from '@angular/core';
import { HttpserviceService } from '../httpservice.service';

@Component({
  selector: 'app-getemp',
  templateUrl: './getemp.component.html',
  styleUrls: ['./getemp.component.css']
})
export class GetempComponent {
 Users: [{
   first_name:string,
   last_name:string,
   id:number,
   email:string,
   avatar:string
 }];

  constructor(private httpservice:HttpserviceService ) { }

 getusers(){
    this.httpservice.getuserdata().subscribe(Response => this.Users= Response.data)
  } 
  deleteuser(id){
    this.httpservice.deletetheuser(id).subscribe(data => console.log(data))
  }
}
