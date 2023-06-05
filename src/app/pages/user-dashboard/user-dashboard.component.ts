import { Component, OnInit } from '@angular/core';
import { LightInfosInput } from 'src/app/components/light-infos/light-infos.component';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit{
  
  //creer un objet pour la liste des lightInfo qui sont dans le composant light-infos.component
  accountInfosList:  Array<LightInfosInput> =  []

  constructor() { };
  ngOnInit(): void {
    this.initializeAccountInfos()
  };

  private initializeAccountInfos() {
    this.accountInfosList = [
      {
        title: "Moyenne du compte",
        amount: 21250,
        infoStyle: "#006064 cyan darken-4"
      },
    {
        title: "Transfert max",
        amount: 21250,
        infoStyle: "#ff6f00 amber darken-4" 
      },
      {
        title: "Dépot max",
        amount: 21250,
        infoStyle: "#33691e light-green darken-4" 
      },

    ];
  }
}
