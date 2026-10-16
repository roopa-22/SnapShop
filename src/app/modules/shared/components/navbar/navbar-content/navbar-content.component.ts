import { Component, Input } from '@angular/core';
import {navigation} from './navbar-content';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-content',
  templateUrl: './navbar-content.component.html',
  styleUrl: './navbar-content.component.scss'
})
export class NavbarContentComponent {
  
   category : any;
   @Input() selectedSection : any;

   ngOnInit() {
    this.category = navigation;
   }

   constructor(private router: Router) {}

   handleNavigate=(path:any) => {
    this.router.navigate([path])
   }
}
