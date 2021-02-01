import { HttpserviceService } from './../httpservice.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserdetailComponent implements OnInit {
 User = [];

  constructor(private httpservice:HttpserviceService,
              private route:ActivatedRoute
              ) { }

  ngOnInit(): void {
      this.route.paramMap.subscribe(
        params =>{
          let id = params.get('id')
         this.httpservice.getuserdetail(id).subscribe(Response => this.User.push(Response.data))
        }
      )
  }

}
