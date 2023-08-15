import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-profilemed',
  templateUrl: './profilemed.component.html',
  styleUrls: ['./profilemed.component.css']
})
export class ProfilemedComponent {
  
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });
}
