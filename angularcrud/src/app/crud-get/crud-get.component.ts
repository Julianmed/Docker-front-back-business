import { Component, OnInit } from '@angular/core';
import { BusinessService } from '../business.service'

@Component({
  selector: 'app-crud-get',
  templateUrl: './crud-get.component.html',
  styleUrls: ['./crud-get.component.css']
})
export class CrudGetComponent implements OnInit {
  businesses: any = [{}];
  constructor(
    private busiSvc: BusinessService) { }

  ngOnInit(){
    this.busiSvc.getAllBusinesses().subscribe((data)=>{
      this.businesses = data;
    });
  }

  remove(id:string){
    this.busiSvc.delete(id).subscribe(message =>{
      console.log(message);
    });
  }
}
