import { Component, Input } from '@angular/core';
import {navigation} from './navbar-content';

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
}
