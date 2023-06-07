import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

urlParam = "est pas défini";
queryPara = "fok pas defini";
constructor( 
  private router: Router,
  private activatedRoute: ActivatedRoute,
  
) {
  
  this.urlParam = this.activatedRoute.snapshot.params['someText'];
  this.queryPara = this.activatedRoute.snapshot.queryParams['x'];
}

ngOnInit(): void{
  
}

async enregistrement() {
 await this.router.navigate(['enregistrement'])
}
}
