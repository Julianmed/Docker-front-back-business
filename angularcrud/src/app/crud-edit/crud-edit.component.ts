import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router} from '@angular/router';
import { BusinessService } from '../business.service';

@Component({
  selector: 'app-crud-edit',
  templateUrl: './crud-edit.component.html',
  styleUrls: ['./crud-edit.component.css']
})
export class CrudEditComponent implements OnInit {
  business: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private busiSvc: BusinessService
  ) { }

  ngOnInit(): void{
    this.route.params.subscribe((params)=>{
      this.busiSvc.getOneBusiness(params.id).subscribe((data)=>{
        this.business = data;
      });
    });
  }

  update(form: NgForm){
    this.busiSvc.update(form, this.business._id).subscribe(message =>{
      console.log(message);
    });
    this.router.navigate(['/business']);
  }

}
