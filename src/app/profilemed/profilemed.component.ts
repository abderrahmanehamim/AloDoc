import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-profilemed',
  templateUrl: './profilemed.component.html',
  styleUrls: ['./profilemed.component.css']
})
export class ProfilemedComponent {
    profilemedForm = new FormGroup({  
    title: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    ville: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    phoneCabinet:new FormControl(''),
    phoneMobile: new FormControl(''),


  });
}
