import { Component ,  Input } from '@angular/core';
import { Housinglocation } from '../housinglocation';
import { Doctor } from '../doctor.model';

@Component({
  selector: 'app-housing-location',
  templateUrl: './housing-location.component.html',
  styleUrls: ['./housing-location.component.css']
})
export class HousingLocationComponent {
  @Input() housingLocation!: Housinglocation;
  

}
