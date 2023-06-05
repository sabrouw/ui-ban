import { Component, Input, OnInit } from '@angular/core';


export interface LightInfosInput{
  title?: String;
  amount?: number;
  infoStyle?: '#006064 cyan darken-4'| '#ff6f00 amber darken-4'| '#33691e light-green darken-4' ;
}


@Component({
  selector: 'app-light-infos',
  templateUrl: './light-infos.component.html',
  styleUrls: ['./light-infos.component.scss']
})
export class LightInfosComponent implements OnInit{
  
  @Input() infoInput: LightInfosInput = {};
  
  constructor() { }
  
  ngOnInit(): void { }

}
