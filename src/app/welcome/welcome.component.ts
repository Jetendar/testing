import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../app.component';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';
//@component is decorator

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
//When ever I want to get the access for the other class I need to make the object for A class to the B class  in the constructor and inthe B class
//than access the method or propertied oof other component using object of A class
export class WelcomeComponent implements OnInit {
  message= 'Something Welcome message'
  text='he iPhone Wiki is an unofficial wiki dedicated to collecting, storing and providing information on the internals of Apples amazing iDevices. We hope to pass this information on to the next generation of hackers so that they can go forth into their forebears footsteps and break the ridiculous bonds Apple has put on their amazing mobile devicesThe iPhone Wiki is an unofficial wiki dedicated to collecting, storing and providing information on the internals of Apples amazing iDevices. We hope to pass this information on to the next generation of hackers so that they can go forth into their forebears footsteps and break the ridiculous bonds Apple has put on their amazing mobile devices The iPhone Wiki is an unofficial wiki dedicated to collecting, storing and providing information on the internals of Apples amazing iDevices. We hope to pass this information on to the next generation of hackers so that they can go forth into their forebearsfootsteps and break the ridiculous bonds Apple has put on their amazing mobile devices The iPhone Wiki is an unofficial wiki dedicated to collecting, storing and providing information on the internals of  amazing iDevices. We hope to pass this information on to the next generation of hackers so that they can go forth into their forebears footsteps and break the ridiculous bonds Apple has put on their amazing mobile devicesThe iPhone Wiki is an unofficial wiki dedicated to collecting, storing and providing information on the internals of   amazing iDevices. We hope to pass this information on to the next generation of hackers so that they can go forth into their forebears footsteps and break the ridiculous bonds Apple has put on their amazing mobile devicesThe iPhone Wiki is an unofficial wiki dedicated to collecting, storing and providing information on the internals of  amazing iDevices. We hope to pass this information on to the next generation of hackers so that they can go forth into their forebears footsteps and break the ridiculous bonds Apple has put on their amazing mobile devices'
  welcomeMessageFromService:string
  name=''
  
  
  constructor(private route:ActivatedRoute,
     private service: WelcomeDataService) { }

  ngOnInit() {
  //  console.log(this.message)
    // console.log(this.route.snapshot.params['name'])
    this.name=this.route.snapshot.params['name']
  }
 
  getWelcomeMessage()
  {
    //console.log(this.service.excuteHelloWorldBeanService());
    this.service.excuteHelloWorldBeanService().subscribe(response=> this.handleSuccessfullResponce(response), error=> this.handleErrorResponse(error));
    console.log("Last Line of get message")


  }
  getWelcomeMessageWithParameter() {
    //console.log(this.service.executeHelloWorldBeanService());
    
    this.service.excuteHelloWorldBeanServiceWithParameter(this.name).subscribe(
      response => this.handleSuccessfullResponce(response),
      error => this.handleErrorResponse(error)
    );
    
    //console.log('last line of getWelcomeMessage')

    //console.log("get welcome message");
  }
  // welcomeMessageFromService variable to tied up the message coming from the beackend
  handleSuccessfullResponce(response)
  {
    this.welcomeMessageFromService = response.message

  }
  handleErrorResponse(error)
  {
    
    // console.log(error);
    // console.log(error.error);
    // console.log(error.error.message);

    this.welcomeMessageFromService = error.error.message
  }

}
