import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-headernavbar',
  templateUrl: './headernavbar.component.html',
  styleUrls: ['./headernavbar.component.css']
})
export class HeadernavbarComponent implements OnInit{

  constructor() { }

  ngOnInit(): void {
  }

  scrollTo(section: string): void {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

}
