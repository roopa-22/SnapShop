import { Component } from '@angular/core';
import { UserService } from './State/User/userService';
import { select, Store } from '@ngrx/store';
import { AppState } from './Models/AppState';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'EcommerceApp';

  constructor(private userService : UserService,
      private store : Store<AppState>) {
    }

  ngOnInit() {
      if(localStorage.getItem("jwt") ) {
        this.userService.getUserProfile();
      }
  
      this.store.pipe(select((store) => store.auth)).subscribe((auth) => {
        this.userService.getUserProfile();
        console.log("store", this.store)
      })
    }  
}
