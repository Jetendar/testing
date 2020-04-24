import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { Router } from '@angular/router';
 

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
//isUSerLoggedIn: boolean=false;
  constructor(private router: Router, private hardcodedAuthenticationService: HardcodedAuthenticationService)
  {

    
  }
  homepage()
  {
    if(this.hardcodedAuthenticationService.isUSerLoggedIn())
    {
      this.router.navigate(['welcome/:name']) 

    }
    else
    {
      this.router.navigate(['login']) 
    }

  }
  
  
ngOnInit(){
//this.isUSerLoggedIn=this.hardcodedAuthenticationService.isUSerLoggedIn()
}
 }
 


