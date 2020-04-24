import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {
  constructor() { }
  authenticate(username, password)
  {
   // console.log('before'+this.isUSerLoggedIn())
   if(username === "in28minutes" && password ==='dummy')
{
      sessionStorage.setItem('authenticaterUser', username)
      //console.log('after'+this.isUSerLoggedIn())
      return true
    }
    return false
  }
  isUSerLoggedIn()
  {
    let user=sessionStorage.getItem('authenticaterUser')
    return !(user === null)

  }

  logout()
  {
    sessionStorage.removeItem('authenticaterUser')
  }
}
