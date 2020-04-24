import { Injectable } from '@angular/core';
import {HttpClient, HttpBackend, HttpHandler, HttpHeaders} from '@angular/common/http'
import { baseDirectiveCreate } from '@angular/core/src/render3/instructions';

export class HelloWOrldBeans{


  constructor(public message:string)
  {
    
  }
}
@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http:HttpClient) {

   }
  
  
  //return is importand Otherwise I would get undefined
  
  excuteHelloWorldBeanService()
  {
    return this.http.get('http://localhost:8080/hello-world-bean')
    //console.log("Execute Hello Worl Bean Service")
  }
  excuteHelloWorldBeanServiceWithParameter(name)
  {
    return this.http.get<HelloWOrldBeans>(
   
      `http://localhost:8080/hello-world/path-variable/${name}`);
  }
  
}
