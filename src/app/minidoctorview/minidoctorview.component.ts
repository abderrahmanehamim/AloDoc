import { Component , Input} from '@angular/core';
import { Doctor } from '../doctor.model';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-minidoctorview',
  templateUrl: './minidoctorview.component.html',
  styleUrls: ['./minidoctorview.component.css']
})
export class MinidoctorviewComponent {
  @Input() doctor!: Doctor;
  constructor( private sanitizer: DomSanitizer) {}
  sanitizeImageURL(imageURL: string) {
    return this.sanitizer.bypassSecurityTrustUrl(imageURL);
  }
}
