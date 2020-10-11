import { Component, OnInit } from '@angular/core';
import { ResultService } from '../result.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor(private resultService:ResultService) { }
  enu=this.resultService.Enu;
  name=this.resultService.Name;
  ionic=parseInt(this.resultService.Ionic);
  ml=parseInt(this.resultService.Ml);
  big_data=parseInt(this.resultService.Big_data);
  ngOnInit(): void {
    enu:this.resultService.Enu;
  }
total=this.ionic+this.ml+this.big_data;
 percentage:number=this.total*100/300;

  
    
  
}
