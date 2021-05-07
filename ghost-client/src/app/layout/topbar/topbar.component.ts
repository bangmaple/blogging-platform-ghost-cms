import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  categories: string[];

  constructor() {
  }

  ngOnInit(): void {
    this.categories = ['Java', '.NET', 'VanillaJS', 'Angular', 'ReactJS', 'React Native', 'Spring', 'JPA', 'Swift', 'UML'];
  }

  switchTheme(): void {
    const htmlClasses = document.querySelector('html').classList;
    if (localStorage.theme === 'dark') {
      htmlClasses.remove('dark');
      localStorage.removeItem('theme');
    } else {
      htmlClasses.add('dark');
      localStorage.theme = 'dark';
    }
  }

}
