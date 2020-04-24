import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  ErrorMessage= "An error accured in the URL"
  constructor() { }

  ngOnInit() {
  }

}
