import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  //on initialise l'input pour l'admin  
  @Input() isAdmin = false;
  role = 'user';

  contructor(){
  }
  ngOnInit(){
  if (this.isAdmin){
    this.role = 'admin';
  }
  }
}
