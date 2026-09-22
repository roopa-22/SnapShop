import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  appLogo: string = 'assets/AppLogo.png';

  currentSection: any;
  isNavbarContentOpen: any;

  openNavbarContent(section: any) {
    this.isNavbarContentOpen = true;
    this.currentSection = section;
  }
  closeNavbarContent() {
    this.isNavbarContentOpen = false;
  }
  navigateTo(path: any) {}

  @HostListener('document:click',[`$event`])
  onDocumentClick(event:MouseEvent) {
    const modelContainer = document.querySelector(".model-container");
    const openButtons = document.querySelectorAll(".open-button");
    
    let clickInsideButton = false;

    openButtons.forEach((button:Element) => {
      if(button.contains(event.target as Node)) {
        clickInsideButton = true;
      }
    })

    if(modelContainer && !clickInsideButton && this.isNavbarContentOpen) {
      this.closeNavbarContent();
    }
  }
}
