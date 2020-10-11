import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ResultService } from '../result.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
  getData=new FormGroup({
    Enu:new FormControl('',[]),
    Name:new FormControl('',[]),
    Ionic:new FormControl('',[]),
    Ml:new FormControl('',[]),
    Big_data:new FormControl('',[])
  })
  constructor(private resultService:ResultService,private router:Router) { }

  onSubmit(data){
    console.log(data.Enu)
    this.resultService.Enu=data.Enu;
    this.resultService.Name=data.Name;
    this.resultService.Ionic=data.Ionic;
    this.resultService.Ml=data.Ml;
    this.resultService.Big_data=data.Big_data;
    console.log("Name",this.resultService.Name);
    
    this.router.navigate(['/ViewResult']);
  }
  ngOnInit(): void {
  }

}
