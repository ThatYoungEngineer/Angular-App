import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { faMoon } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  faMoon = faMoon;
  
  isDefaultBackground: boolean = true;
  
  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
    if (event instanceof NavigationEnd) {
        this.isDefaultBackground = event.url === '/';
      }
    });
  }
}
